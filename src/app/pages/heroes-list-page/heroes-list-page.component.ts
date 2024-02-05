import { Component, ViewChild, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { Heroe } from '../../models/heroe.model';

import { CommonModule } from '@angular/common';
import { HeroesService } from '../../services/heroes.service';
import { HeroesTableComponent } from '../../components/heroes-table/heroes-table.component';
import { HeroesPaginatorComponent } from "../../components/heroes-paginator/heroes-paginator.component";
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogConfirmDeleteComponent } from '../../components/dialog-confirm-delete/dialog-confirm-delete.component';
import { DialogErrorOperationComponent } from '../../components/dialog-error-operation/dialog-error-operation.component';
import { DialogOkOperationComponent } from '../../components/dialog-ok-operation/dialog-ok-operation.component';
import { 
	IgxCarouselModule,
	IgxSliderModule
 } from "igniteui-angular";
import { HeroesImagesCarrouselComponent } from "../../components/heroes-images-carrousel/heroes-images-carrousel.component";
import { UpperTextDirective } from '../../custom/upper-text.directive';
import { DialogHeroeDetailComponent } from '../../components/dialog-heroe-detail/dialog-heroe-detail.component';


@Component({
    selector: 'app-heroes-list-page',
    standalone: true,
    templateUrl: './heroes-list-page.component.html',
    styleUrl: './heroes-list-page.component.scss',
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        HeroesTableComponent,
        HeroesPaginatorComponent,
        HeroesImagesCarrouselComponent,
        UpperTextDirective
    ]
})
export class HeroesListPageComponent implements OnInit {

  constructor( 
    private heroesService: HeroesService, 
    private router: Router,
    public dialog: MatDialog ) { }

  initialPageSize = 10;
  initialPageIndex = 0;
    
  heroesList: WritableSignal<Heroe[]> = signal([]);
  heroesAllList: WritableSignal<Heroe[]> = signal([]);

  totalListLength = signal(0);
  newIdInsert = signal(0);
  pageSize = signal(this.initialPageSize);
  pageIndex = signal(this.initialPageIndex);

  heroeNameBySearch = new FormControl('');

  ngOnInit() {
    this.initialProcess();
  }

  initialProcess() {
    this.heroeNameBySearch.setValue('');
    this.heroesService.getAllHeroes().subscribe( (heroes: Heroe[]) => {
      this.totalListLength.set(heroes.length);
      this.newIdInsert.set(Number(heroes[heroes.length - 1].id) + 1);
      this.heroesAllList.set(heroes);
      this.getHeoresPageable(this.initialPageIndex, this.initialPageSize);
    });
  }

  onHandlePage(e: PageEvent) {
    this.getHeoresPageable(e.pageIndex, e.pageSize);
  }

  getHeoresPageable(indexPage: number, numElements: number): Heroe[] | any  {
    this.heroesList.set(this.heroesAllList().slice(indexPage * numElements, (indexPage + 1) * numElements));
    this.pageSize.set(numElements);
    this.pageIndex.set(indexPage);
  }

  searchHeroeByName($event: any) {
    $event.preventDefault();
    if (this.heroeNameBySearch.value) {
      let name = this.heroeNameBySearch.value;
      this.heroesService.getAllHeroes().subscribe(heroes => {
        this.heroesAllList.set(heroes.filter(heroe => heroe.name.toLowerCase().includes(name.toLowerCase())));
        this.totalListLength.set(this.heroesAllList().length);
        this.getHeoresPageable(this.initialPageIndex, this.initialPageSize);
      });
    }
  }

  onHandleCreateHeroe() {
    this.router.navigate(['create', this.newIdInsert()]);
  }

  onHandleEditHeroe(heroe: Heroe) {
    this.router.navigate(['edit', heroe.id]);
  }

  onHandleDeleteHeroe(heroe: Heroe) {
    this.openConfirmDialog(heroe);
  }

  onHandleDetailHeroe(heroe: Heroe) {
    this.openDetailDialog(heroe);
  }

  openDetailDialog(heroe: Heroe): void {
    const dialogRef = this.dialog.open(DialogHeroeDetailComponent, {
      width: '400px',
      height: '750px',
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '10ms',
      data: heroe,
    });
  }

  openConfirmDialog(heroe: Heroe): void {
    const dialogRef = this.dialog.open(DialogConfirmDeleteComponent, {
      width: '600px',
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '10ms',
      data: heroe.name,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.heroesService.deleteHeroe(heroe.id).subscribe({
          next: (h: Heroe) =>  this.openOKDialog(`Heroe with name ${h.name} deleted successfully`),
          error: (error: any) => this.openErrorDialog(`Error deleting heroe with name ${heroe.name} :: ${error} `),
        });
      }
    });
  }

  openOKDialog(msg: string): void {
    const dialogRef = this.dialog.open(DialogOkOperationComponent, {
      width: '600px',
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '10ms',
      data: msg,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.initialProcess();
    });
  }

  openErrorDialog(error: string): void {
    const dialogRef = this.dialog.open(DialogErrorOperationComponent, {
      width: '600px',
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '10ms',
      data: error,
    });
  }

}


import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CREATE_MODE, EDIT_MODE, Heroe } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import { HeroesFormComponent } from "../../components/heroes-form/heroes-form.component";
import { MatDialog } from '@angular/material/dialog';
import { DialogOkOperationComponent } from '../../components/dialog-ok-operation/dialog-ok-operation.component';
import { DialogErrorOperationComponent } from '../../components/dialog-error-operation/dialog-error-operation.component';
import { DialogConfirmDeleteComponent } from '../../components/dialog-confirm-delete/dialog-confirm-delete.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-heroes-management-page',
    standalone: true,
    templateUrl: './heroes-management-page.component.html',
    styleUrl: './heroes-management-page.component.scss',
    imports: [HeroesFormComponent, MatButtonModule]
})
export class HeroesManagementPageComponent implements OnInit {

  isCreateMode = true;

  heroe: WritableSignal<Heroe> = signal({
    id: '0',
    name: '',
    imageUrl: '',
    intelligence: 0,
    speed: 0,
    combat: 0
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe( (url: any) => { 
      if (url[0].path === CREATE_MODE) {
        this.isCreateMode = true;
        this.activatedRoute.params.subscribe( (params: any) => {
          this.heroe.set({
            id: params.newId,
            name: '',
            imageUrl: '',
            intelligence: 0,
            speed: 0,
            combat: 0
          });
        });
      
      } else if (url[0].path === EDIT_MODE) {  
        this.isCreateMode = false;

        this.activatedRoute.params.subscribe( (params: any) => {
          this.heroesService.getHeroeById(params.heroeId).subscribe( (h: Heroe) => {
            this.heroe.set(h); 
          });
        });
      } else {
        this.router.navigate(['/heroes']);
      }
    });
  }

  onHandleBackToList() {
    this.router.navigate(['/heroes']);
  }

  onHandleSaveHeroe(heroe: Heroe) {
    if (this.isCreateMode) {
      this.heroesService.createHeroe(heroe).subscribe({
        next: (h: Heroe) =>  this.openOKDialog(`Heroe with name ${h.name} created successfully`),
        error: (error: any) => this.openErrorDialog(`Error creating heroe with name ${heroe.name} :: ${error} `),
      });
    } else {
      this.heroesService.updateHeroe(heroe).subscribe({
        next: (h: Heroe) =>  this.openOKDialog(`Heroe with name ${h.name} updated successfully`),
        error: (error: any) => this.openErrorDialog(`Error updating heroe with name ${heroe.name} :: ${error} `),
      });
    }
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
      this.router.navigate(['/heroes']);
    });
  }

  openErrorDialog(error: string): void {
    const dialogRef = this.dialog.open(DialogErrorOperationComponent, {
      width: '600px',
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '10ms',
      data: error,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/heroes']);
    });
  }



}

import { Component, Inject } from '@angular/core';
import { HeroesDetailComponent } from "../heroes-detail/heroes-detail.component";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';
import { Heroe } from '../../models/heroe.model';

@Component({
    selector: 'app-dialog-heroe-detail',
    standalone: true,
    templateUrl: './dialog-heroe-detail.component.html',
    styleUrl: './dialog-heroe-detail.component.scss',
    imports: [HeroesDetailComponent, MatDialogContent]
})
export class DialogHeroeDetailComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogHeroeDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe,
  ) {}

}

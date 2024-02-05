import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm-delete',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './dialog-confirm-delete.component.html',
  styleUrl: './dialog-confirm-delete.component.scss'
})
export class DialogConfirmDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}

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
  selector: 'app-dialog-error-operation',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './dialog-error-operation.component.html',
  styleUrl: './dialog-error-operation.component.scss'
})
export class DialogErrorOperationComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogErrorOperationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

}

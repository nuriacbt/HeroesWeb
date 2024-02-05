import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ok-operation',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './dialog-ok-operation.component.html',
  styleUrl: './dialog-ok-operation.component.scss'
})
export class DialogOkOperationComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOkOperationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

}

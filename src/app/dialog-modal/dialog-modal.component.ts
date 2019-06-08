import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal-c.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent {
  
  constructor(
    public dialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

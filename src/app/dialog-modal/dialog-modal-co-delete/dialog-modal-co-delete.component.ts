import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialog-modal-co-delete',
  templateUrl: './dialog-modal-co-delete.component.html',
  styleUrls: ['./dialog-modal-co-delete.component.css']
})
 
export class DialogModalCoDeleteComponent {
  private idcollaborateur;
  private nomcollaborateur;
  private prenomcollaborateur;
  constructor(
    public dialogRef: MatDialogRef<DialogModalCoDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.idcollaborateur=data.Id;
    this.nomcollaborateur=data.Nom;
    this.prenomcollaborateur=data.Prenom;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialog-modal-co',
  templateUrl: './dialog-modal-co.component.html',
  styleUrls: ['./dialog-modal-co.component.css']
})
 
export class DialogModalCoComponent {
  private idcollaborateur;
  private nomcollaborateur;
  private prenomcollaborateur;
  constructor(
    public dialogRef: MatDialogRef<DialogModalCoComponent>,
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


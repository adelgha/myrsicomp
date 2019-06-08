import { Component, OnInit, ViewChild } from '@angular/core';
import { Collaborateur } from '../models/Collaborateur';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {CollaborateursService } from '../collaborateurs/collaborateurs.services';
import { error } from 'selenium-webdriver';
import { DialogModalCoComponent } from '../dialog-modal/dialog-modal-co/dialog-modal-co.component';
import { NotificationsService } from 'angular2-notifications';
import { DialogModalCoDeleteComponent } from '../dialog-modal/dialog-modal-co-delete/dialog-modal-co-delete.component';




@Component({
  selector: 'app-collaborateurs',
  templateUrl: './collaborateurs.component.html',
  styleUrls: ['./collaborateurs.component.css'],
  providers:[CollaborateursService],
  
})
export class CollaborateursComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private idcollaborateur;
  private nomcollaborateur;
  private prenomcollaborateur;
  private collaborateurs;
  displayedColumns = ['Id','Civilite', 'Nom', 'Prenom', "Status", "Birthday", "Matricule", "actions"];
  dataSource = new MatTableDataSource<Collaborateur>(this.collaborateurs);


  constructor(private _service: NotificationsService, private collaborateursService: CollaborateursService, public dialog: MatDialog) { }

  

  ngOnInit() {
    this.collaborateursService.getCollaborateurs().subscribe(
     collaborateur => {
       console.log(collaborateur);
       this.collaborateurs = collaborateur;       
       this.dataSource = new MatTableDataSource<Collaborateur>(collaborateur);
      },
      error => alert("error")
    )    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  editCollaborateur(collaborateur){
    console.log("you are about editing ", collaborateur);
    
    let dialogRef = this.dialog.open(DialogModalCoComponent, {
      width: '400px',
      data: collaborateur
    });
    
    dialogRef.beforeClose().subscribe(result => {
       
      this.idcollaborateur = document.getElementById('idcollaborateur');
       this.idcollaborateur=this.idcollaborateur.value;
       this.nomcollaborateur = document.getElementById('nomcollaborateur');
       this.nomcollaborateur=this.nomcollaborateur.value;
       this.prenomcollaborateur = document.getElementById('prenomcollaborateur');
       this.prenomcollaborateur=this.prenomcollaborateur.value;
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null){
        let index = this.collaborateurs.findIndex(val => val.Id === result);
        if(index !== -1){
          let c = this.collaborateurs.find(val => val.Id === result);
          c.Id= this.idcollaborateur;
          c.Nom= this.nomcollaborateur;
          c.Prenom= this.prenomcollaborateur;
        
        this.collaborateursService.EditCollaborateurs(c);
        this.dataSource._updateChangeSubscription();
        this._service.success("Success", "Modification enregistré avec succés.")
        }
      }

    });
  }
  deleteCollaborateur(collaborateur){
    console.log("you are about deleting ", collaborateur); 
    
    let dialogRef = this.dialog.open(DialogModalCoDeleteComponent, {
      width: '400px',
      data: collaborateur
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null){
        let index = this.collaborateurs.findIndex(val => val.Id === result);
        if(index !== -1)
          this.collaborateurs.splice(index,1);
        this.dataSource._updateChangeSubscription();
        this._service.error("Success", "Suppression fait avec succés.")
      }
    });   
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}


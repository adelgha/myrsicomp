import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Client} from "../models/Client";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DialogModalComponent} from "../dialog-modal/dialog-modal.component";
import {ClientGrid} from "../models/ClientGrid";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private clients: ClientGrid[] = [
    {codeClient: "az02", raisonSocial: "qsd", status: true, facturesImpayes: 2, nbrCollaborateurs: 3},
    {codeClient: "sd12", raisonSocial: "qsd", status: false, facturesImpayes: 1, nbrCollaborateurs: 7},
    {codeClient: "87sd", raisonSocial: "qsd", status: true, facturesImpayes: 4, nbrCollaborateurs: 1}

  ];
  displayedColumns = ['codeClient', 'raisonSocial', 'status', "facturesImpayes", "nbrCollaborateurs", "actions"];
  dataSource = new MatTableDataSource<ClientGrid>(this.clients);


  constructor(private titleService: Title, public dialog: MatDialog) { }

  ngOnInit() {
    this.titleService.setTitle("Clients");
  }

  editClient(client){
    console.log("you are about editing ", client);
  }

  deleteClient(client){
    console.log("you are about deleting ", client);
    let dialogRef = this.dialog.open(DialogModalComponent, {
      width: '400px',
      data: client
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null){
        let index = this.clients.findIndex(val => val.codeClient === result);
        if(index !== -1)
          this.clients.splice(index,1);
        this.dataSource._updateChangeSubscription();
      }
    });
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

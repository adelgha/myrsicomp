import { Component, OnInit } from '@angular/core';
import {AdelService } from '../adel/adel.services';
import { Projet } from '../models/Projet';

@Component({
  selector: 'app-adel',
  templateUrl: './adel.component.html',
  styleUrls: ['./adel.component.css']
})
export class AdelComponent implements OnInit {
  projets: Projet[];
  constructor(private adelServices: AdelService,) { }

  ngOnInit() {

    this.adelServices.getProjets().subscribe(
      p => {
      console.log(p);
      this.projets = p;
       
      },
      error => alert("error")
      )
  }




 
}

import { Component, OnInit } from '@angular/core';
import {ROUTES} from "../routesInfo";

declare var $:any;


@Component({
  selector: 'sidebar-cmp',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isNotMobileMenu(){
    if($(window).width() > 991){
      return false;
    }
    return true;
  }

}

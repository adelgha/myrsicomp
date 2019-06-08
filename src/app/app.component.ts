import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private loggedIn: boolean  = false;


  constructor(private router:Router) {
    this.router.events.subscribe((event: any) => {
      if (this.router.isActive('login', false)) {
        this.loggedIn = false;
      }else {
        this.loggedIn = true;
      }
    });
  }

}

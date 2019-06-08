import { Component, OnInit } from '@angular/core';
import {User} from "../models/User";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {LoginService} from "./Login.service";
import {Router} from "@angular/router";




const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loading: boolean = false;
  public errMsg: string = '';
  public user = new User();
  public loginFormGroup = new FormGroup({
    'email': new FormControl(this.user.email, [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]),
    'password': new FormControl(this.user.password, [
      Validators.required
    ])
  });

  ngOnInit(){
    this.loginService.logout();
    this.loading = false;
    this.user = new User();
  }

  public constructor( titleService: Title, private loginService: LoginService, private router: Router){
    titleService.setTitle("Se Connecter");
  }

  login(loginForm: FormGroup){
    this.loading = true;
    this.user = loginForm.value;
    console.log(this.user);
    this.loginService.checkCredential(this.user.email, this.user.password).subscribe(result =>{
      if(result === true){
        this.router.navigateByUrl('');
      }
      else{
        this.errMsg = "please check your email or password!";
        this.loading = false;
        this.user = new User();
      }

    });
  }
}


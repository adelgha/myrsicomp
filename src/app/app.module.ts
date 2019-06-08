import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatSelectModule,
  MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule, MatNativeDateModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./login/Login.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthGaurds} from "./login/authGuards";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {CommonModule} from "@angular/common";
import { ClientsComponent } from './clients/clients.component';
import { CollaborateursComponent } from './collaborateurs/collaborateurs.component';
import { AdminComponent } from './admin/admin.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import {CdkTableModule} from "@angular/cdk/table";
import { FooterComponent } from './footer/footer.component';
import { AdelComponent } from './adel/adel.component';
import { CollaborateursService } from './collaborateurs/collaborateurs.services';
import {HttpModule} from '@angular/http';
import { routes } from './app.routes';
import { Http } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {RestResource} from "ng2-resource";
import { DialogModalCoComponent } from './dialog-modal/dialog-modal-co/dialog-modal-co.component';
import { DialogModalCoDeleteComponent } from './dialog-modal/dialog-modal-co-delete/dialog-modal-co-delete.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AdelService } from './adel/adel.services';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    ClientsComponent,
    CollaborateursComponent,
    AdminComponent,
    DialogModalComponent,
    FooterComponent,
    AdelComponent,
    DialogModalCoComponent,
    DialogModalCoDeleteComponent,
    
  ],
  imports: [
    CdkTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule, 
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule ,
    BrowserAnimationsModule, 
    SimpleNotificationsModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [LoginService, AuthGaurds, CollaborateursService, AdelService, HttpModule],
  bootstrap: [AppComponent],
  entryComponents: [DialogModalCoComponent, DialogModalCoDeleteComponent]
})
export class AppModule {}

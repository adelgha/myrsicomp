import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AuthGaurds} from "./login/authGuards";
import {ClientsComponent} from "./clients/clients.component";
import {CollaborateursComponent} from "./collaborateurs/collaborateurs.component";
import {AdminComponent} from "./admin/admin.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DialogModalComponent} from "./dialog-modal/dialog-modal.component";
import { AdelComponent } from "./adel/adel.component";

export const routes: Routes = [
  {path: '', component: AdminComponent, canActivate: [AuthGaurds], children: [
    {path: '', component: DashboardComponent, canActivate: [AuthGaurds]},
    {path: 'clients', component: ClientsComponent, canActivate: [AuthGaurds], children: [
      {path: 'clients', component: DialogModalComponent}
    ]},
    {path: 'collaborateurs', component: CollaborateursComponent, canActivate: [AuthGaurds]},
    {path: 'adel', component: AdelComponent, canActivate: [AuthGaurds]}
  ]},
  {path: 'login', component: LoginComponent},

];

import { Injectable, enableProdMode} from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Collaborateur } from '../models/Collaborateur';
import { Projet } from '../models/Projet';
import "rxjs/Rx";

enableProdMode();

@Injectable()
export class CollaborateursService {
private baseUrl = "http://localhost:4200/assets/collaborateursJson.json";  // web api URL
private baseUrlApi = "http://localhost:4200/api/Projet";  // web api URL
constructor(private _http: Http){}

getCollaborateurs() {
    return this._http.get(this.baseUrl)
        .map(res => <Collaborateur[]> res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
};
EditCollaborateurs(c : Collaborateur) {
     this._http.delete(this.baseUrl, JSON.stringify(c))
    .map(res => res.json())
    
}

}
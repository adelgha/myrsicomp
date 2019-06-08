import { Injectable, enableProdMode} from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Projet } from '../models/Projet';
import "rxjs/Rx";

enableProdMode();

@Injectable()
export class AdelService {
//private baseUrl = "http://localhost:50224/api/projets";  // web api URL
private baseUrl = "http://localhost:4200/assets/projetsJson.json";  // web api URL
constructor(private _http: Http){}

getProjets() {
    return this._http.get(this.baseUrl)
        .map(res => <Projet[]> res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
}
}
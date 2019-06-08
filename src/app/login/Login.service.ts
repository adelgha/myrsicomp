import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService{

    checkCredential(email: string, password: string) : Observable<boolean> {
        localStorage.setItem('token', 'azerty123');
        return new Observable(observer => {
            setTimeout( () => { observer.next(email === 'test@test.com' && password === 'test')} , 5000);
        });
    }

    logout(){
        localStorage.removeItem('token');
    }

    isLoggedIn(){
        return localStorage.getItem('token') != null;
    }
}
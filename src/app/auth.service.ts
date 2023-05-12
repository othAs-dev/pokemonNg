import { Injectable } from '@angular/core';
import {delay, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string;
  constructor() { }
  login(name: string, password: string): Observable<boolean>{
    const isLoggedIn = (name == 'pikachu' && password == '1234')
    return of(isLoggedIn).pipe(delay(1000), tap((isLoggedIn:any)  => this.isLoggedIn = isLoggedIn))
  }
  logout(){
    this.isLoggedIn = false;
  }
}

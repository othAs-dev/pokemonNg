import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  message: string = 'Vous êtes déconnecté. [identifiant: pikachu, mdp: 1234]'
  name: string;
  password: string;
  auth: AuthService
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(){
    this.auth = this.authService
  }
  setMessage(){
    this.auth.isLoggedIn ? this.message = 'Vous êtes connecté' : this.message = 'Identifiant ou mot de passe incorrect'
  }
  login(){
    this.message = 'Tentative de connexion en cours..'
    this.auth.login(this.name, this.password).subscribe((isLoggedIn) => {
      this.setMessage();
      if(isLoggedIn){
      this.router.navigate(['/pokemons'])
      } else {
        this.password = '';
        this.router.navigate(['/login'])
      }
    })
  }
  logout(){
    this.auth.logout();
    this.message = 'Vous êtes déconnecté'
  }
}

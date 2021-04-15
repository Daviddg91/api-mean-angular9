import { Component, OnInit } from '@angular/core';
import { DataApiAppUserService } from "../../../services/data-api-app-user.service"
import {HttpClient} from '@angular/common/http';
import { AuthService } from "../../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }
  private authService : AuthService;
  private appiLogin : DataApiAppUserService;
  constructor( private http: HttpClient, private router: Router) { 
    this.appiLogin= new DataApiAppUserService(http);
    this.authService = new AuthService ();
  }

  private errorMessage;
  private repos ={
    name  : "",
    uid : "",
    token : ""
  };

user ="prueba@prueba.com";
password = "1234567";
login(  ) {
    this.appiLogin.loginUsuario(this.user,this.password).subscribe((response) => {                           
      this.repos = JSON.parse(response);
      this.authService.setToken(this.repos.token);
      this.router.navigate(["clientes"]);
    },
    (error) => {                              
      this.errorMessage = error;
   

    });
}

}
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.isLoggedIn();
  }
  constructor(private router: Router) { }
 
 authService = new AuthService();

 logout(  ) {
  this.authService.setToken("");
  this.authService.isLoggedIn();
  this.router.navigate([""]);
}

 isLoggedIn(){

  return this.authService.isLoggedIn();
 }

}
 
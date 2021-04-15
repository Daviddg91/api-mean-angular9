import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 

  }
  isLoggedIn(){
    const token = localStorage.getItem('token');
    if(token === null || token === "") {
      return  false;
    }else{
      return  true;
    }

  }

  logout(  ) {

    this.setToken("");
 
}
 setToken(token:string):void {
  localStorage.setItem('token',token);
}

reset () {
  this.setToken("");
 
}
}

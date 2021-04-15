import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
 import {Usuarios} from "../interfaces/usuarios";
 //import {HttpParams} from  "@angular/common/http";
import { environment } from "src/environments/environment"
import { ClassField } from '@angular/compiler';
 @Injectable({
  providedIn: 'root'
})

export class DataApiAppUserService {

  constructor(private http: HttpClient) { 

    
  }
    
  //url_origin = "http://localhost:8080/";
  url_origin = environment.API_URL+"/api/";
  

  loginUsuario(user , password  ) {
    
    let headers = new HttpHeaders();
    headers.set('Content-type', 'application/json');
    
    var url_api =this.url_origin+"auth";
    return  this.http.post(url_api , {'email': user , 'password':password} , { 'headers':headers ,  responseType: 'text' } );
  
  
  }

  getAllUsers() {
    let token = localStorage.getItem('token');
    var url_api =this.url_origin+"clients";
    return  this.http.get(url_api, { 'headers':{
    'Content-type': 'application/json',
    "x-token" : token,
   } ,  responseType: 'text' });
  
  }
  
  getAllUsersByDNI(dni: string  ) {
    let token = localStorage.getItem('token');
    var url_api =this.url_origin+"clients/getClient/" + dni;
 
    return  this.http.get(url_api, { 'headers':{
      'Content-type': 'application/json',
      "x-token" : token,
     } ,  responseType: 'text' });
  }
 
saveUsuarioAPI(usuario: Usuarios){
    let token = localStorage.getItem('token');
    var url_api =this.url_origin+"clients";
    return  this.http.post(url_api, usuario ,{ 'headers':{
      'Content-type': 'application/json',
      "x-token" : token,
    } ,  responseType: 'text' });

}

modifyUsuarioAPI(usuario: Usuarios){
  var url_api =this.url_origin+"clients/"+usuario.id;
  let token = localStorage.getItem('token');
  console.log("object")
  return  this.http.put(url_api, usuario, { 'headers':{
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin' : '*',
  "x-token" : token,
 } ,  responseType: 'text' });


}

deleteUserByDni(dni:string ){
  let token = localStorage.getItem('token');
  var url_api2 =this.url_origin+"clients/"+dni;
 
  return  this.http.delete(url_api2, { 'headers':{
    "x-token" : token,
   } ,  responseType: 'text' });



}

}
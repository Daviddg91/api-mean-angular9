import { Component, OnInit } from '@angular/core';
import {Usuarios} from "../../../interfaces/usuarios";
import { ActivatedRoute } from '@angular/router';
import {DataApiAppUserService} from "../../../services/data-api-app-user.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.css']
})
export class CreateClientesComponent implements OnInit {
  
usuarios: Usuarios = {
  id: null,
  nombre: "",
  apellidos: "",
  edad: 0,
  direccion: "",
  dni: "",
  cp: 0,
  telefono: "",
  correo: "",
};
 
dni: string;
editing: false;
  constructor(private routeActivated: ActivatedRoute,private router:Router, 
    public apiUsurios: DataApiAppUserService) { 


  }

  ngOnInit(): void {
  }
private errorMessage;
private repos;
  saveUsuario(){
    this.apiUsurios.saveUsuarioAPI(this.usuarios).subscribe(  (response) => {                           //Next callback
      this.repos = response;
      this.showDialog();
      setTimeout(() => this.esconderModalConfirmacion(), 3000);
      setTimeout(() => this.router.navigate(['/clientes']) , 3600);
    },
    (error) => {                              //Error callback
      this.errorMessage = JSON.parse(error.error);
     console.log(this.errorMessage.errors);
     var arrErrors = this.errorMessage.errors;
     
      $("div[id^='div-']").text("");


    Object.keys(arrErrors).forEach(key => {
      console.log(arrErrors[key].param);
      $("#div-"+arrErrors[key].param).text(arrErrors[key].msg);
    });
 

 

var arrAlert =   $( ".alert" );
arrAlert.each(function( i ) {
      
      if($(this).html()==""){
        $(this).css("display","none");
     
      }else{
        $(this).css("display","block");

      }

    });
      //throw error;   //You can also throw the error to a global error handler
    

    });
 
  }
  

display: boolean = false;

showDialog() {

  this.display = true;
 
 
}
 
 esconderModalConfirmacion():void{
  

  this.display = false;
}


  

  

 
  
}

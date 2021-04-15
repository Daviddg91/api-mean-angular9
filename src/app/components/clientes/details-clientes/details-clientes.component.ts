import { Component, OnInit } from '@angular/core';
import {Usuarios} from "../../../interfaces/usuarios";
import { ActivatedRoute } from '@angular/router';
import {DataApiAppUserService} from "../../../services/data-api-app-user.service";
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details-clientes',
  templateUrl: './details-clientes.component.html',
  styleUrls: ['./details-clientes.component.css']
})
export class DetailsClientesComponent implements OnInit {
  usuarioEditable: Usuarios;
  apiUsurios2: DataApiAppUserService;
  dni: string;
  editing: false;
  
    constructor(private routeActivated: ActivatedRoute, apiUsurios: DataApiAppUserService, http: HttpClient, private router:Router) { 
      this.dni = routeActivated.snapshot.params['dni'];
      this.apiUsurios2= new DataApiAppUserService(http);
   if(this.dni){
  editing: true;
  
    apiUsurios.getAllUsersByDNI(this.dni).subscribe((data)=>{  
      let cliente = JSON.parse(data);
    this.usuarioEditable = cliente.cliente[0];  
    console.log(this.usuarioEditable);
  });
  }
  
    }
  
    ngOnInit(): void {
    }
       edited: boolean = false;
       private errorMessage;
    modificarUsuario(){
    
      this.apiUsurios2.modifyUsuarioAPI(this.usuarioEditable).subscribe(  (response) => {                           //Next callback
        //alert(response);
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
  
      });
   
    

 console.log(this.edited);
    }

    display: boolean = false;

showDialog() {

  this.display = true;
 
 
}
 
 esconderModalConfirmacion():void{
  

  this.display = false;
}
}

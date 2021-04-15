import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/vistaClientes/clientes.component';
 import { DataTablesModule } from 'angular-datatables';
import { CreateClientesComponent } from './components/clientes/create-clientes/create-clientes.component';
import { DetailsClientesComponent } from './components/clientes/details-clientes/details-clientes.component';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { InicioComponent } from './components/ui/inicio/inicio.component';
import { LoginComponent } from './components/admin/login/login.component';
import { AdminRouterGuard } from  './services/admin-router.guard';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    CreateClientesComponent,
    DetailsClientesComponent,
    NavbarComponent,
    InicioComponent,
    LoginComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

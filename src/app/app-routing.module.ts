import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//import {PedidosComponent} from "./components/pedidos/pedidos.component";
import {PageNotFoundComponentComponent} from "./components/page-not-found-component/page-not-found-component.component";
 import {ClientesComponent} from "./components/clientes/vistaClientes/clientes.component";
import {CreateClientesComponent} from "./components/clientes/create-clientes/create-clientes.component";
import {DetailsClientesComponent} from "./components/clientes/details-clientes/details-clientes.component";
import { InicioComponent } from "./components/ui/inicio/inicio.component"
import { LoginComponent } from "./components/admin/login/login.component"
import { AdminRouterGuard } from './services/admin-router.guard';


const routes: Routes = [

  { path: '', redirectTo: '/inicio', pathMatch: 'full'   },
  
  { 
    path: 'crearUsuarios',
    component: CreateClientesComponent,
    canActivate: [AdminRouterGuard] 
  },
  { 
    path: 'details-usuarios/:dni',
    component: DetailsClientesComponent,
    canActivate: [AdminRouterGuard] 
  },
  { 
    path: 'clientes',
    component: ClientesComponent,
    canActivate: [AdminRouterGuard] 
  },
//{ path: 'pedidos', component: PedidosComponent },
 
{ path: 'inicio', component: InicioComponent  },
{ path: 'login', component: LoginComponent  },



//el not found ** va al final
{ path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

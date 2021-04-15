import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminRouterGuard implements CanActivate {
   boolAuthenticated = false;
   auth = new AuthService();
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      let boolAuth = this.auth.isLoggedIn();
      this.boolAuthenticated = boolAuth;
      return boolAuth ;
  }

}

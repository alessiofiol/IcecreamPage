import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServices } from '../../servicios/servicios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public userServices: UserServices, public router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userServices.isLoggedin() !==true)
          {
          window.alert("Por favor, iniciar sesión para visualizar este contenido");
          this.router.navigate(['login'])
          }
    return true;
  }
  
}


//Las guardas nos permiten identificar si el usuario tiene que estar registrado o logado para acceder a una ruta especifica
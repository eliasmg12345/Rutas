import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      // F3 eliminamos el return true... en lugar de eso ....
    const numAleatorio=Math.random();
    console.log(numAleatorio);
    if(numAleatorio>0.4){
      return  true;
    }else{
      return false;
    }
  }
  
}

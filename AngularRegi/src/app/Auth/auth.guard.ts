import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

//
// AUTH GUARD CLASS USING canActivate Functions and Declaring the function by the user token.
// If the user Token.length greater than 0 which means if he have a token
// Then the user allowed to do whatever canActivate protects in AppRouting 
// And if the user doesn't have a token it returns false, which mean access denied
///


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
    if (localStorage.getItem('userToken').length > 0)
    return true;
    this.router.navigate(['/login'])
    return false
  }
  
}

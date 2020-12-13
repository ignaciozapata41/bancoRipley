import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';

// servicios
import { UserService } from 'src/app/shared/services/user.service'

@Injectable({
  providedIn: 'root'
})
export class AutenticationGuard implements CanActivate{
  constructor(private route: Router, private _UserService: UserService) {}
 
  canActivate(): boolean {
    let token = this._UserService.getToken();

    if(!token){
        this.route.navigate(['/home']);
        return false
    }

    return true;
  }
}

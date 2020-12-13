import { ToastService } from './../../../shared/services/toast.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User, httpResponse } from './../../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: string;

  constructor(private httpClient: HttpClient, private _ToastService: ToastService, private router: Router) { }

  async createNewUser(newUser: User){
    let url = `${environment.endPoint}users/newUser`; 
    try{
      await this.httpClient.post(url, newUser)
        .pipe(
          map( (resp : httpResponse) =>{
            if(resp && resp.data){
              this._ToastService.presentToast("Usuario Creado exitosamente.", "success");
              this.login(resp.data.rut, resp.data.password);
            }
          })
        ).toPromise();
    }catch(e){
      this._ToastService.presentToast(e.error, "danger");
      console.log('Error creando el usuario', e);
    }
  }

  async login(rut: string, password: string){
    let url = `${environment.endPoint}users/login`;

    try{
      await this.httpClient.post(url, {rut, password})
        .pipe(
          map( (resp : httpResponse) =>{
            if(resp && resp.data){
              this.token = resp.data;
              this.closeModals();
              this.router.navigate(['bank-portal']); 
            }
          })
        ).toPromise();
    }catch(e){
      this._ToastService.presentToast(e.error, "danger");
      console.log('Error intentando acceder a la cuenta', e);
    }
  }

  private closeModals(){
    var modals = document.getElementsByTagName("ion-modal");
    [].forEach.call(modals, function (el:any) {
        el.parentNode.removeChild(el);
    });
}
}

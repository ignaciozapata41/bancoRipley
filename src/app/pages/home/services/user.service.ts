import { ToastService } from './../../../shared/services/toast.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './../../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private _ToastService: ToastService) { }

  async createNewUser(newUser: User){
    let url = `${environment.endPoint}users/login`; 
    try{
      let consulta = await this.httpClient.post(url, newUser ).toPromise();
    }catch(e){
      this._ToastService.presentToast('ha ocurrido un problema crenado el usuario.', "danger");
      console.log('Error creando el usuario', e);
    }
  }
}

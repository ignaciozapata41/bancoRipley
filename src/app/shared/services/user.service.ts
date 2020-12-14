import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User, httpResponse } from 'src/app/interfaces/interfaces';
import { Subject, Observable } from 'rxjs';

// services
import { ToastService } from './toast.service';
import { BankAccountService } from 'src/app/pages/bank-portal/services/bank-account.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: string;
  private userAcc: User;

  LoginSubject$: Subject<any> = new Subject();
  readonly LoginObservable$: Observable<any> = this.LoginSubject$.asObservable();

  constructor(private httpClient: HttpClient, private _ToastService: ToastService, private router: Router,private _BankAccountService: BankAccountService) { }

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
          map( async (resp : httpResponse) =>{
            if(resp && resp.data){
              this.token = resp.data.token;
              this.userAcc = resp.data.user;

              await this._BankAccountService.getUserBankAcc(this.userAcc.rut);
              this.closeModals();
              this.router.navigate(['bank-portal']); 
              this.triggerLoginObservable();
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

  triggerLoginObservable(){
    this.LoginSubject$.next();
  }

  getUserName(){
    return this.userAcc.name;
  }

  getToken(){
    return this.token;
  }

  getUser(){
    return this.userAcc;
  }

  removeUserSession(){
    this.token = null;
    this.userAcc = null;
    this.router.navigate(['home']); 
  }
}

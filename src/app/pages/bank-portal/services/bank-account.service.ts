import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

// services
import { ToastService } from 'src/app/shared/services/toast.service';

// interface
import { BankAccount, httpResponse } from 'src/app/interfaces/interfaces';
import { BankAccHistory } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private UserAccBank: BankAccount;
  private UserAccMovements: BankAccHistory[] = [];

  constructor(private _ToastService: ToastService, private httpClient: HttpClient) { }

  async getUserBankAcc(rut: string){
    let url = `${environment.endPoint}bankAcc/getUserBankAcc`; 

    try{
      await this.httpClient.post(url, {rut}).pipe(
        map( (resp: httpResponse)  =>{
          if(resp && resp.data){
            this.UserAccBank = resp.data[0]? resp.data[0] : null ;
            this.setAccMovements();
          }
        })
      ).toPromise();
    }catch(e){
      this._ToastService.presentToast(e.error? e.error : 'Error obteniendo la cuenta de bancaria del usuario', 'danger');
      console.log('Error obteniendo la cuenta de bancaria del usuario', e);
    }
  }

  async changeAmount(amount: number, type: string){
    let url = `${environment.endPoint}bankAcc/changeAmount`; 

    try{
      await this.httpClient.put(url, {acc_number: this.UserAccBank.account_number, amount: amount, type}).pipe(
        map( (resp: httpResponse)  =>{
          if(resp && resp.data){
            this._ToastService.presentToast("Cuenta Actualizda exitosamente","success");
            this.UserAccBank.amount = resp.data.amount;
            this.setAccMovements();
          }
        })
      ).toPromise();
    }catch(e){
      this._ToastService.presentToast(e.error? e.error : 'Error actualizando el saldo del usuario', 'danger');
      console.log('Error actualizando el saldo del usuario', e);
    }
  }

  async transferAmount(amount: number, destinationRut: string){
    let url = `${environment.endPoint}bankAcc/transferAmount`; 

    try{
      await this.httpClient.put(url, {rutOrigin: this.UserAccBank.rut, amount: amount, destinationRut}).pipe(
        map( (resp: httpResponse)  =>{
          if(resp && resp.data){
            this._ToastService.presentToast("Transferencia realizada exitosamente","success");
            this.UserAccBank.amount = resp.data.amount;
            this.setAccMovements();
          }
        })
      ).toPromise();
    }catch(e){
      this._ToastService.presentToast(e.error? e.error : "Ha ocurrido un error intentando transferir el saldo ingresado", 'danger');
      console.log('Error intentando transferir un saldo a un tercero', e);
    }
  }

  async setAccMovements(){
    let url = `${environment.endPoint}bankAcc/getBankAccHistory?acc_number=${this.UserAccBank.account_number}`; 

    try{
      await this.httpClient.get(url).pipe(
              map( (resp: httpResponse) => {
                if(resp) this.UserAccMovements = resp.data;
              })
            ).toPromise();
    }catch(e){
      this.UserAccMovements = [];
      this._ToastService.presentToast("Ha ocurrido un error intentando obtener el historial de movimientos", 'danger');
      console.log('Ha ocurrido un error intentando obtener el historial de movimientos', e);
    }

  }

  getUserAccBank(){
    return this.UserAccBank;
  }

  getUserRut(){
    return this.UserAccBank.rut;
  }

  getUserAccAmount(){
    return this.UserAccBank.amount;
  }

  getAccMovements(){
    return this.UserAccMovements;
  }

  validateWithdrawAmount(accAmount) {
    return function (control) {
       if(control.value > accAmount){
         return {response: true};
       }
       
       return null;
   }
  }

  validateAutoTransfer(originRut){
    return function (control) {
      if(control.value === originRut){
        return {response: true};
      }
      
      return null;
    }
  }

  removeUserBankAcc(){
    this.UserAccBank = null;
  }

}

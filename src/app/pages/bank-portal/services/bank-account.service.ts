import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

// services
import { ToastService } from 'src/app/shared/services/toast.service';

// interface
import { BankAccount, httpResponse } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private UserAccBank: BankAccount;

  constructor(private _ToastService: ToastService, private httpClient: HttpClient) { }

  async getUserBankAcc(rut: string){
    let url = `${environment.endPoint}bankAcc/getUserBankAcc`; 

    try{
      await this.httpClient.post(url, {rut}).pipe(
        map( (resp: httpResponse)  =>{
          if(resp && resp.data) this.UserAccBank = resp.data[0]? resp.data[0] : null ;
        })
      ).toPromise();
    }catch(e){
      this._ToastService.presentToast('Error obteniendo la cuenta de bancaria del usuario', 'danger');
      console.log('Error obteniendo la cuenta de bancaria del usuario', e);
    }
  }

  async chargeAmount(amount: number){
    let url = `${environment.endPoint}bankAcc/chargeAmount`; 

    try{
      await this.httpClient.put(url, {acc_number: this.UserAccBank.account_number, amount: amount}).pipe(
        map( (resp: httpResponse)  =>{
          if(resp && resp.data){
            this._ToastService.presentToast("Cuenta Actualizda exitosamente","success");
            this.UserAccBank.amount = resp.data.amount;
          }
        })
      ).toPromise();
    }catch(e){
      this._ToastService.presentToast('Error obteniendo la cuenta de bancaria del usuario', 'danger');
      console.log('Error obteniendo la cuenta de bancaria del usuario', e);
    }
  }

  getUserAccBank(){
    return this.UserAccBank;
  }
}

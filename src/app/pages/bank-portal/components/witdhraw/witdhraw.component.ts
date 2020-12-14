import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

// services
import { BankAccountService } from '../../services/bank-account.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-witdhraw',
  templateUrl: './witdhraw.component.html',
  styleUrls: ['./witdhraw.component.scss'],
})
export class WitdhrawComponent implements OnInit {
  withdrawForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public _BankAccountService: BankAccountService, private _LoadingService: LoadingService) { 
    this.withdrawForm = formBuilder.group({
      saldo: [null, [Validators.required, Validators.min(1),this._BankAccountService.validateWithdrawAmount(this._BankAccountService.getUserAccAmount())]],
    });
  }

  ngOnInit() {}

  async withdrawAmount(){
    await this._LoadingService.presentLoading('Actualizando Saldo...');
    await this._BankAccountService.changeAmount(this.withdrawForm.controls['saldo'].value, 'withdraw');
    this._LoadingService.hideLoading();
  }
}

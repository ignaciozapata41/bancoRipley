import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

// services
import { BankAccountService } from '../../services/bank-account.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-transfer-amount',
  templateUrl: './transfer-amount.component.html',
  styleUrls: ['./transfer-amount.component.scss'],
})
export class TransferAmountComponent implements OnInit, OnDestroy {
  transferForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public _BankAccountService: BankAccountService, private _LoadingService: LoadingService) { 
    this.transferForm = formBuilder.group({
      saldo: [null, [Validators.required, Validators.min(1), this._BankAccountService.validateWithdrawAmount(this._BankAccountService.getUserAccAmount())]],
      targetRut: [null, [Validators.required, Validators.minLength(1), this._BankAccountService.validateAutoTransfer(this._BankAccountService.getUserRut())]],
    });
  }

  async transferAmount(){
    await this._LoadingService.presentLoading('Actualizando Saldo...');
    await this._BankAccountService.transferAmount(this.transferForm.controls['saldo'].value, this.transferForm.controls['targetRut'].value);
    this.resetFormValues();
    this._LoadingService.hideLoading();
  }

  ngOnInit() {}

  ngOnDestroy(){
    
  }

  resetFormValues(){
    this.transferForm.controls['saldo'].setValue('');
    this.transferForm.controls['targetRut'].setValue('');
  }

}

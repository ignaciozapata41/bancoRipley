import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

// services
import { BankAccountService } from '../../services/bank-account.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-charge-amount',
  templateUrl: './charge-amount.component.html',
  styleUrls: ['./charge-amount.component.scss'],
})
export class ChargeAmountComponent implements OnInit, OnDestroy {
  chargeAmountForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private _BankAccountService: BankAccountService, private _LoadingService: LoadingService) { 
    this.chargeAmountForm = formBuilder.group({
      saldo: [null, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {}

  ngOnDestroy(){
    
  }


  async chargeAmount(){
    await this._LoadingService.presentLoading('Actualizando Saldo...');
    await this._BankAccountService.changeAmount(this.chargeAmountForm.controls['saldo'].value,'charge');
    this._LoadingService.hideLoading();
  }
}

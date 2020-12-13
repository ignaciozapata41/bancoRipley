import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

// services
import { BankAccountService } from '../../services/bank-account.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-charge-mount',
  templateUrl: './charge-mount.component.html',
  styleUrls: ['./charge-mount.component.scss'],
})
export class ChargeMountComponent implements OnInit {
  chargeMountForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private _BankAccountService: BankAccountService, private _LoadingService: LoadingService) { 
    this.chargeMountForm = formBuilder.group({
      saldo: [null, [Validators.required]],
    });
  }

  ngOnInit() {}


  async chargeAmount(){
    await this._LoadingService.presentLoading('Actualizando Saldo...');
    await this._BankAccountService.chargeAmount(this.chargeMountForm.controls['saldo'].value);
    this._LoadingService.hideLoading();
  }
}

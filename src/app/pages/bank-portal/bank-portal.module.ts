import { sharedModule } from './../../shared/shared.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BankPortalPageRoutingModule } from './bank-portal-routing.module';
import { BankPortalPage } from './bank-portal.page';

// components
import { ChargeAmountComponent } from './components/charge-amount/charge-amount.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { WitdhrawComponent } from './components/witdhraw/witdhraw.component';
import { TransferAmountComponent } from './components/transfer-amount/transfer-amount.component';
import { AccountHistoryComponent } from './components/account-history/account-history.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BankPortalPageRoutingModule,
    sharedModule,
  ],
  declarations: [
    BankPortalPage,
    ChargeAmountComponent,
    AccountInfoComponent,
    WitdhrawComponent,
    TransferAmountComponent,
    AccountHistoryComponent,
  ]
})
export class BankPortalPageModule {}

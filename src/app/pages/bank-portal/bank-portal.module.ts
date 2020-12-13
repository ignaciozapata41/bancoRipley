import { sharedModule } from './../../shared/shared.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BankPortalPageRoutingModule } from './bank-portal-routing.module';
import { BankPortalPage } from './bank-portal.page';

// components
import { ChargeMountComponent } from './components/charge-mount/charge-mount.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';

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
    ChargeMountComponent,
    AccountInfoComponent
  ]
})
export class BankPortalPageModule {}

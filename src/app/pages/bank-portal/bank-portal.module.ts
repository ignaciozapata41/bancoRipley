import { sharedModule } from './../../shared/shared.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BankPortalPageRoutingModule } from './bank-portal-routing.module';
import { BankPortalPage } from './bank-portal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankPortalPageRoutingModule,
    sharedModule,
  ],
  declarations: [BankPortalPage]
})
export class BankPortalPageModule {}

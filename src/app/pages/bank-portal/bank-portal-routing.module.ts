import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankPortalPage } from './bank-portal.page';

const routes: Routes = [
  {
    path: '',
    component: BankPortalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankPortalPageRoutingModule {}

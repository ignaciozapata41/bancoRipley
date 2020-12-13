import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AuthMovileModalPage } from './auth-movile-modal.page';

import { homeComponentsModule } from '../../homeComponentsModule'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    homeComponentsModule
  ],
  declarations: [
    AuthMovileModalPage,
  ],
})
export class AuthMovileModalPageModule {}

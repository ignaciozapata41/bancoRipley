import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

// modules
import { sharedModule } from './../../shared/shared.modules';

// components
import { AvancesCardComponent } from './components/avances-card/avances-card.component';
import { AuthenticationCardComponent } from './components/authentication-card/authentication-card.component';
import { LoginComponent } from './components/authentication-card/components/login/login.component';
import { RegisterAccountComponent } from './components/authentication-card/components/register-account/register-account.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    sharedModule,
  ],
  declarations: [
    HomePage,
    AvancesCardComponent,
    AuthenticationCardComponent,
    LoginComponent,
    RegisterAccountComponent,
  ],
})
export class HomePageModule {}

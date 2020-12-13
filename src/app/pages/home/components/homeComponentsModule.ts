import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { AuthenticationCardComponent } from './authentication-card/authentication-card.component';
import { LoginComponent } from './authentication-card/components/login/login.component';
import { RegisterAccountComponent } from './authentication-card/components/register-account/register-account.component';


@NgModule({
  declarations: [
    AuthenticationCardComponent,
    LoginComponent,
    RegisterAccountComponent
  ],
  exports:[
    AuthenticationCardComponent,
    LoginComponent,
    RegisterAccountComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class homeComponentsModule { }

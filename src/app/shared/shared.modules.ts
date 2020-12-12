import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class sharedModule { }

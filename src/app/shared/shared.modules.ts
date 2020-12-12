import { ToastService } from './services/toast.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
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

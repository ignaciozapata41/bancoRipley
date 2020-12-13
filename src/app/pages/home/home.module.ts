import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

// modules
import { sharedModule } from './../../shared/shared.modules';
import { homeComponentsModule } from './components/homeComponentsModule';

// components
import { AvancesCardComponent } from './components/avances-card/avances-card.component';
import { AuthMovileModalPageModule } from 'src/app/pages/home/components/modals/auth-movile-modal/auth-movile-modal.module';
import { AuthMovileModalPage } from 'src/app/pages/home/components/modals/auth-movile-modal/auth-movile-modal.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    sharedModule,
    homeComponentsModule,
    AuthMovileModalPageModule,
  ],
  declarations: [
    HomePage,
    AvancesCardComponent,
  ],
  entryComponents:[
    AuthMovileModalPage
  ],
})
export class HomePageModule {}

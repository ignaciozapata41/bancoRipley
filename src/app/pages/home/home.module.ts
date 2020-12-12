import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

// modules
import { sharedModule } from './../../shared/shared.modules';

// components
import { AvancesCardComponent } from './components/avances-card/avances-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    sharedModule
  ],
  declarations: [HomePage, AvancesCardComponent]
})
export class HomePageModule {}

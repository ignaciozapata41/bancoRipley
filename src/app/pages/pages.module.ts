import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule
  ],
  exports:[
    HomePage
  ],
})
export class PagesModule { }

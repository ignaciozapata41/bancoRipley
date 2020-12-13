import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading: any;

  constructor(public loadingController: LoadingController) {

   }

   async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      message: mensaje,
    });
    this.loading.present();
  }

  hideLoading(){
    if(this.loading){
      this.loading.dismiss();
    }
  }

}

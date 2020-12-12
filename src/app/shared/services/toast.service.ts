import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async presentToast( message: string,color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1800,
      position: 'top',
      color: color,
      cssClass: 'toastAfterHeader'
    });
    toast.present();
  }
}

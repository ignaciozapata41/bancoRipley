import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-auth-movile-modal',
  templateUrl: './auth-movile-modal.page.html',
  styleUrls: ['./auth-movile-modal.page.scss'],
})
export class AuthMovileModalPage implements OnInit {

  constructor(private modalController: ModalController,) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

}

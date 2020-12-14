import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthMovileModalPage } from './components/modals/auth-movile-modal/auth-movile-modal.page';

// servicios
import { AvancesService } from './services/avances.service';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {
  showLoginFormOnMovile: boolean;
  menuSubcription: Subscription;
  
  constructor(public _avancesService: AvancesService, private modalController: ModalController, private _MenuService: MenuService) {
    this.menuSubcription = this._MenuService.loginFormMovilbservable$.subscribe(() => {
      this.presentLoginFormModal();
    })
  }
  
  ngOnDestroy(){
    this.menuSubcription? this.menuSubcription.unsubscribe() : null;
  }

  async presentLoginFormModal() {
    const modal = await this.modalController.create({
      component: AuthMovileModalPage,
    });
    return await modal.present();
  }

}

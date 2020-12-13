import { Component, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';

import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy{
  MovileMenuSubcription: Subscription;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private _MenuService: MenuService,
  ) {
    this.initializeApp();

    this.MovileMenuSubcription = this._MenuService.menuObservable$.subscribe( showMenu => {
      showMenu? this.openMovileMenu() : this.closeopenMovileMenu();
    });
  }

  ngOnDestroy(){
    this.MovileMenuSubcription? this.MovileMenuSubcription.unsubscribe() : null;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openMovileMenu() {
    this.menu.open('MovileMenu');
  }

  closeopenMovileMenu(){
    this.menu.close('MovileMenu');
  }

  showLoginFormOnMovile(){
    this.closeopenMovileMenu();
    this._MenuService.showloginFormMovil();
  }
}

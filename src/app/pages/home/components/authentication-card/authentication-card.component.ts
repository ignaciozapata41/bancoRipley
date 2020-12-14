import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-authentication-card',
  templateUrl: './authentication-card.component.html',
  styleUrls: ['./authentication-card.component.scss'],
})
export class AuthenticationCardComponent implements OnInit {
  @ViewChild(IonSlides, { static: false }) slidesAuth: IonSlides;

  authSlides = [
    { svg: 'person', index: 0, cheked: true, action: 'Ingresar' },
    { svg: 'home', index: 1, cheked: false, action: 'Registrarse' },
  ];

  constructor() { }

  ngOnInit() {

  }

  slideOnChange(index: number, slide: any){
    this.authSlides.map(async (pag) => {
      pag.index != index ? pag.cheked = false : pag.cheked=true
    });

    slide.lockSwipes(false);
    slide.slideTo(index);
    slide.lockSwipes(true);

    window.scrollTo({ top: 0});
  }

}

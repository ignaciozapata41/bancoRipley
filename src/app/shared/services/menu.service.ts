import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuSubject$: Subject<any> = new Subject();
  readonly menuObservable$: Observable<any> = this.menuSubject$.asObservable();

  loginFormMovilSubject$: Subject<any> = new Subject();
  readonly loginFormMovilbservable$: Observable<any> = this.loginFormMovilSubject$.asObservable();

  constructor() { }

  async showMenu(show: boolean = true){
    this.menuSubject$.next(show);
  }

  showloginFormMovil(){
    this.loginFormMovilSubject$.next();
  }
}

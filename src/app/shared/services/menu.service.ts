import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

// interfaces
import { menuOptions } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private activeOption: string = 'chargeMount';

  private menuOptions: menuOptions[] = [
    {icon: 'trending-up', title: 'Cargar Saldo', name: 'chargeMount'}
  ]
 
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
  getMenuOptions(){
    return this.menuOptions;
  }

  setActiveOption(optionName: string){
    this.activeOption = optionName;
  }

  getActivateOption(){
    return this.activeOption;
  }
}

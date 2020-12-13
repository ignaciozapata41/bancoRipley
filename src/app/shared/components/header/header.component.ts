import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { MenuService } from 'src/app/shared/services/menu.service';
import { UserService } from "src/app/shared/services/user.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private _MenuService: MenuService, public _UserService: UserService,  private router: Router) { }

  ngOnInit() {}

  showMovileMenu(){
    this._MenuService.showMenu(true);
  }

  showMovileLoginForm(){
    this._MenuService.showloginFormMovil();
  }

  goToHome(){
    this.router.navigate(['home']); 
  }

}

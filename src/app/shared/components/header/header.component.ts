import { Component, OnInit } from '@angular/core';

// services
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private _MenuService: MenuService) { }

  ngOnInit() {}

  showMovileMenu(){
    this._MenuService.showMenu(true);
  }

}

import { Component, OnInit } from '@angular/core';

// servicios
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-bank-portal',
  templateUrl: './bank-portal.page.html',
  styleUrls: ['./bank-portal.page.scss'],
})
export class BankPortalPage implements OnInit {


  constructor(public _MenuService: MenuService) { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

// servicios
import { AvancesService } from './services/avances.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public _avancesService: AvancesService) {}

}

import { Avances } from './../../../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avances-card',
  templateUrl: './avances-card.component.html',
  styleUrls: ['./avances-card.component.scss'],
})
export class AvancesCardComponent implements OnInit {
  @Input() avance: Avances;

  constructor() { }

  ngOnInit() {}

}

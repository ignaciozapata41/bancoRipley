import { Injectable } from '@angular/core';

// interfaces
import { avances } from './../../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AvancesService {

  // Simulamos avances extraidos desde alguna bd o procedimiento.
  avances: avances[] = [
    {
      monto: 200000,
      numCuotas: 12,
      cae: 20.82,
      ctc: 240940,
    },
    {
      monto: 500000,
      numCuotas: 18,
      cae: 26.85,
      ctc: 630640,
    },
    {
      monto: 800000,
      numCuotas: 18,
      cae: 27.34,
      ctc: 1014190,
    },
    {
      monto: 1500000,
      numCuotas: 36,
      cae: 22.72,
      ctc: 2082540,
    },
    {
      monto: 4000000,
      numCuotas: 36,
      cae: 21.52,
      ctc: 5463680,
    },
    {
      monto: 6000000,
      numCuotas: 48,
      cae: 16.18,
      ctc: 8188800,
    },

  ]

  constructor() { }
}

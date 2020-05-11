import { Component, OnInit } from '@angular/core';
import { Fiore } from './Fiore';

@Component({
  selector: 'app-fiore',
  templateUrl: './fiore.component.html',
  styleUrls: ['./fiore.component.css']
})
export class FioreComponent implements OnInit {
  Fiori : Fiore[];
  Specie : string;
  Altezza : string;
  Colore : string;
  Periodo: string;


  constructor() { }

  ngOnInit(): void {
  }
addFiore(newSpecie: HTMLInputElement, newAltezza: HTMLInputElement, newColore: HTMLInputElement, newPeriodo: HTMLInputElement): boolean {
  let newFiori: Fiore = new Fiore(this.Specie,this.Altezza,this.Colore,this.Periodo);
      newFiori.Specie = newSpecie.value;
      newFiori.Altezza = newAltezza.value;
      newFiori.Colore = newColore.value;
      newFiori.Periodo = newPeriodo.value;



      return false;
  }
}

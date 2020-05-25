import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fiore } from './Fiore';

@Component({
  selector: 'app-fiore',
  templateUrl: './fiore.component.html',
  styleUrls: ['./fiore.component.css']
})
export class FioreComponent implements OnInit {
   obsFiore: Observable<Fiore[]>;
  postObserver : Observable<Object>;
  postData : Object;
  Fiori : Fiore[];
  Specie : string;
  Altezza : string;
  Colore : string;
  Periodo: string;


  constructor(private http: HttpClient) { }
   getFioriList(): void {
    //Qui va sostituito l’url con quello delle vostre api
    this.obsFiore = this.http.get<Fiore[]>('https://jsonplaceholder.typicode.com/users');
    //Mi sottoscrivo all’observable e scrivo la arrow function che riceve i dati
    this.obsFiore.subscribe((data: Fiore[]) => {this.Fiori = data;});
  }

  ngOnInit(): void {
     this.getFioriList();
  }
addFiore(newSpecie: HTMLInputElement, newAltezza: HTMLInputElement, newColore: HTMLInputElement, newPeriodo: HTMLInputElement): boolean {
  let newFiori: Fiore = new Fiore(this.Specie,this.Altezza,this.Colore,this.Periodo);
      newFiori.Specie = newSpecie.value;
      newFiori.Altezza = newAltezza.value;
      newFiori.Colore = newColore.value;
      newFiori.Periodo = newPeriodo.value;

      let headers =  {headers: new HttpHeaders().set('Content-Type', 'application/json')};


    this.postObserver = this.http.post('http://localhost:3000/users', newFiori);
    this.postObserver.subscribe(data => this.postData = data);

      return false;

  }
}

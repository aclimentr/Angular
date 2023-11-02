import { Component } from '@angular/core';
import { IHeroesmod } from '../superheroes-list-model/models/heroesmod.model';

@Component({
  selector: 'app-superheroes-list',
  templateUrl: './superheroes-list.component.html',
  styleUrls: ['./superheroes-list.component.scss']
})
export class SuperheroesListComponent {
  listado: IHeroesmod[];

  constructor(){
    this.listado = [
      {
        name: 'Tony Stark',
        heroName: 'Iron Man',
        age: 40
      }
      {
        name: 'Thor',
        heroName: 'Thor',
        age: 17
      }
      {
        name: 'Óscar Gutiérrez',
        heroName: 'Rey Misterio',
        age: 48
      }
      {
        name: 'Vin Diesel',
        heroName: 'Toretto',
        age: 20
      }
    ]
  }

  newHeroe(heroe: IHeroesmod){
    this.listado = [...this.listado, heroe]
  }

}

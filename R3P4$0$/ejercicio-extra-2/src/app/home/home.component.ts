import { Component } from '@angular/core';
import { IChucherias } from '../models/chucherias.model.ts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  chuches: IChucherias[];
  constructor() {
    this.chuches = [
  {
    name: 'Regaliz',
    price: 1.50,
    cathegory: 'gominola',
    color: 'negro, rojo',
    image: 'https://www.funtastyc.es/blog/wp-content/uploads/2020/02/regaliz.jpg'
  },
  {
    name: 'Bombón',
    price: 2,
    cathegory: 'Chocolate',
    color: 'Marrón',
    image: 'https://ideyaverde.es/5644-home_default/bombones-tipo-ferrero-rocher-veganos-love-raw.jpg'
  },
  {
    name: 'Dentadura',
    price: 1,
    cathegory: 'gominola',
    color: 'rosa',
    image: 'https://willysinas.com/621/dentaduras-dulces-de-gominola.jpg'
  },
  {
    name: 'solano',
    price: 1.20,
    cathegory: 'caramelo',
    color: 'crema',
    image: 'https://www.funtastyc.es/61674-medium_default/caramelos-solano-tradicional-sin-azucar.jpg'
  }
]
}

  addNewChuche(chuche: IChucherias){
    this.chuches = [...this.chuches, chuche];
  }

}

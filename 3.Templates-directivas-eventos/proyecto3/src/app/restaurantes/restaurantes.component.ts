import { Component } from '@angular/core';
import { IRestaurante } from './model/restaurante.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent {

    restaurante1: IRestaurante = {
      nombre: "La Tagliatella",
      calle: "Orense 60",
      open: true
    }
}

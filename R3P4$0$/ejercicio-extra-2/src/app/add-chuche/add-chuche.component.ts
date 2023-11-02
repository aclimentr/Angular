import { Component, Output, EventEmitter } from '@angular/core';
import { IChucherias } from '../models/chucherias.model.ts';
import { publishFacade } from '@angular/compiler';

@Component({
  selector: 'app-add-chuche',
  templateUrl: './add-chuche.component.html',
  styleUrls: ['./add-chuche.component.scss']
})
export class AddChucheComponent {
  @Output() addChuche = new EventEmitter<IChucherias>();

  addChucheria(chuche: IChucherias) {
    this.addChuche.emit(chuche);
    
  }
  toNumber(price: string): number{
    return parseInt(price);
  }


}


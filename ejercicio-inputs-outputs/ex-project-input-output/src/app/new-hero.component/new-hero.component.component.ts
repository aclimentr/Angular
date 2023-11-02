import { Component, EventEmitter, Output } from '@angular/core';
import { IHeroesmod } from '../superheroes-list-model/models/heroesmod.model';

@Component({
  selector: 'app-new-hero.component',
  templateUrl: './new-hero.component.component.html',
  styleUrls: ['./new-hero.component.component.scss']
})
export class NewHeroComponentComponent {
enviarContacto(arg0: { name: any; email: any; phone: any; }) {
throw new Error('Method not implemented.');
}

  @Output() addHeroe = new EventEmitter();

  enviarHeroe(heroe: IHeroesmod){
    this.addHeroe.emit(heroe);
  }
}

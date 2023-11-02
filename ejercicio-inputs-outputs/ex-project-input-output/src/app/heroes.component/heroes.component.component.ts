import { Component, Input } from '@angular/core';
import { IHeroesmod } from '../superheroes-list-model/models/heroesmod.model';

@Component({
  selector: 'app-heroes.component',
  templateUrl: './heroes.component.component.html',
  styleUrls: ['./heroes.component.component.scss']
})
export class HeroesComponentComponent {
  @Input() listado!: IHeroesmod[];
}

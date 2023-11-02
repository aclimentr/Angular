import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuperheroesListComponent } from './superheroes-list/superheroes-list.component';
import { SuperheroesComponent } from './superheroes-list/superheroes/superheroes.component';
import { HeroesComponentComponent } from './heroes.component/heroes.component.component';
import { NewHeroComponentComponent } from './new-hero.component/new-hero.component.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperheroesListComponent,
    SuperheroesComponent,
    HeroesComponentComponent,
    NewHeroComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

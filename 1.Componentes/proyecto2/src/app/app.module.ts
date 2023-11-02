import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { SegundoComponenteHijoComponent } from './segundo-componente-hijo/segundo-componente-hijo.component';
import { PrimerComponenteHijoComponent } from './primer-componente/primer-componente-hijo/primer-componente-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    SegundoComponenteComponent,
    SegundoComponenteHijoComponent,
    PrimerComponenteHijoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

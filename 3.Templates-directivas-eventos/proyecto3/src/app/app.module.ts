import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { TasksComponent } from './tasks/tasks.component';
import { ContadorComponent } from './contador/contador.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo1Component,
    TasksComponent,
    ContadorComponent,
    RestaurantesComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

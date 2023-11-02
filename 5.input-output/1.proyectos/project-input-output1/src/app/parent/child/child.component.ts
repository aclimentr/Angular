import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  //Indicaciones: mostrar un nombre con un botón para notificar al componente 
  //padre que el nombre ha sido seleccionado

  //decorador @Input() para RECIBIR datos del componente padre
  @Input() name: string | undefined;

  //@Output() para ENVIAR datos al componente padre
  @Output() nameSelected = new EventEmitter<string>();

  //función que se ejecute cuando se haga click en el botón

  selectName(){
    //enviar el valor de name a través del evento "nameSelected"
    //para que el componente padre pueda recibirlo
    this.nameSelected.emit(this.name);
  }

}

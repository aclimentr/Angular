import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  //Indicaciones: listado de nombres
  //utilizar al componente hijo para mostrar cada nombre
  //Recibir notificaciones cuando un nombre ha sido seleccionado

  //variable con un array de nombres

  names:string[] = ['Marcos', 'Toni', 'Jose', 'María', 'Lucía'];

  //variable que almacene el nombre seleccionado

  selectedName: string | undefined;

  //funcion que se llama cuando se selecciona un nombre en el componente hijo
  onNameSelected(name: string){
    //asignamos el nombre seleccionado a la variable
    this.selectedName = name;
  }

}

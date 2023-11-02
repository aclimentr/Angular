import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {
  
  title: string;

  constructor () { 
    this.title = "Listado de alumnos";
    console.log("constructor finalizado");  
  }

  ngOnInit(){
    console.log(this.title);
    console.log("NgOnInit finalizado");
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

    //declaramos una variable "contador" de tipo number
    //inicializarla en 0
    contador: number = 0;

    //metodo incrementar
    incrementar(): void {
      console.log(`Incrementando ${this.contador}`);
      this.contador++;
    }

    //metodo decrementar
    decrementar(): void {
      console.log(`Decrementando ${this.contador}`);
      this.contador--;
    }

    resetear(): void{
      this.contador = 0;
    }
}

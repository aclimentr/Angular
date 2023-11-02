import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  subtitle = "Soy un subtitulo"; //esto es una variable que podemos utilizar con {{}} en el html
}

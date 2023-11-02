import { Component, Input } from '@angular/core';
import { IChucherias } from 'src/app/models/chucherias.model.ts';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  @Input() chuches: IChucherias[]= [];
  

}

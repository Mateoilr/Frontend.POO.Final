import { Component } from '@angular/core';
import { MenuModelosComponent } from '../../componentes/componentes/menu-modelos/menu-modelos.component';



@Component({
  selector: 'app-modelos',
  standalone: true,
  imports : [MenuModelosComponent],
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent {

}

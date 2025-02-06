import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Modelo3dService } from '../../../services/modelo3d.service';  // Asegúrate de que la ruta sea correcta
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-modelos',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzGridModule, NzSpinModule],
  templateUrl: './menu-modelos.component.html',
  styleUrls: ['./menu-modelos.component.css']
})

export class MenuModelosComponent implements OnInit {
verModelo3D(_t5: any) {
throw new Error('Method not implemented.');
}
  nombreUsuario: string = '';
  modelos$!: Observable<any[]>; // Variable para almacenar la lista de modelos


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modelo3dService: Modelo3dService // Inyectamos el servicio
  ) {}

  verEn3d(id: number) {
    this.router.navigate([`/welcome/visor-3d`, id]);
  }

  ngOnInit(): void {
    // Suscribirse a los queryParams para obtener el nombre del usuario
    this.route.queryParams.subscribe(params => {
      this.nombreUsuario = params['nombre'] || 'Usuario'; // Si no se pasa el nombre, mostrar 'Usuario' por defecto
    });

    // Llamamos al servicio para obtener los modelos
    this.modelos$ = this.modelo3dService.getModelos();
  }

  

}


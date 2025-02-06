import { Component, OnInit } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { UserService } from '../../../services/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,  
  imports: [NzFormModule, NzInputModule, CommonModule, ReactiveFormsModule, NzCardModule],
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'] 
})
export class RegistroUsuarioComponent implements OnInit {
  // Formulario reactivo
  registroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,  // Inicializamos el FormBuilder
    private usuarioService: UserService,  // Asegúrate de que tienes el servicio de usuarios
    private message: NzMessageService,  // Para mostrar mensajes
    private router: Router 
  ) {}

  ngOnInit(): void {
    // Inicializamos el formulario
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],  // Validaciones para el nombre
    });
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.registroForm.invalid) {
      return;  // Si el formulario es inválido, no hace nada
    }

    const usuario = this.registroForm.value;  // Obtenemos los datos del formulario
    this.usuarioService.addUsuario(usuario).subscribe(
      (_response: any): void => {
        this.message.success('Usuario registrado con éxito');  // Asegúrate de que la ruta sea correcta
        
        // Redirige a la página de modelos, pasando el nombre como queryParam
        this.router.navigate(['/welcome/modelos'], { queryParams: { nombre: usuario.nombre } });
      },
      (_error: any): void => {
        this.message.error('Error al registrar el usuario');
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000'; // Ajusta la URL según tu backend
 

  constructor(private http: HttpClient) {}

 
  
  addUsuario(Usuario: any) {
    return this.http.post<any>(`${this.url}/usuario`, Usuario );// Asegúrate de que la URL es correcta
  }
}


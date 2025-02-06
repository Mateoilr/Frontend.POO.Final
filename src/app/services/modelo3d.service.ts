import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Modelo3dService {
  private apiUrl = 'http://localhost:3000/Modelo3D'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getModelos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createModelo(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateModelo(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}

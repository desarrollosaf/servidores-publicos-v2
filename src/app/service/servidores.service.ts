import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servidores } from '../interfaces/servidores';
import { Injectable, signal, inject, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServidoresService {
  private myAppUrl: string;
  private myAPIUrl: string;
  private http = inject( HttpClient );

  constructor() {
    this.myAppUrl = 'http://localhost:3001/'
    this.myAPIUrl = 'api/servidor';

  }
  
  getServidores(): Observable<Servidores[]> {
    console.log(`${this.myAppUrl}${this.myAPIUrl}/read`, );
    return this.http.get<Servidores[]>(`${this.myAppUrl}${this.myAPIUrl}/read`);
  }

  getMovimientos(id: number): Observable<any> {    
    return this.http.get(`${this.myAppUrl}${this.myAPIUrl}/movimientos/${id}`);
  }
}

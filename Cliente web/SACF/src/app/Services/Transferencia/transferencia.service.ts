import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente';


@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private APIurl="http://localhost:3000/api/v1/clientes";
  constructor(private http: HttpClient) { }

  testGet():Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.APIurl);
  } 
   
}

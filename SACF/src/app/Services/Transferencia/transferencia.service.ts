import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente';


@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private APIurl="https://sacf-api.herokuapp.com/";
  constructor(private http: HttpClient) { }

  testGet():Observable<string> {
    return this.http.get<string>(this.APIurl);
  } 
   
}

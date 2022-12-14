import { HttpClient } from '@angular/common/http';
import { APP_BOOTSTRAP_LISTENER, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asiento } from 'src/app/Models/Asiento';
import { LineaAsiento } from 'src/app/Models/LineaAsiento';

@Injectable({
  providedIn: 'root'
})
export class AsientoService {

  API_Asientos: string = "http://localhost:3000/api/asientos/";

  constructor(private http: HttpClient) { }

  getAsientos(): Observable<Asiento[]> {
    return this.http.get<Asiento[]>(this.API_Asientos);
  }


}

import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asiento } from 'src/app/Models/Asiento';
import { LineaAsiento } from 'src/app/Models/LineaAsiento';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AsientoService {

  Url_Asientos: string = environment.APIurl + "api/asientos/";
  Url_LineasAsiento: string = environment.APIurl + "api/lineasasiento/";

  constructor(private http: HttpClient) { }

  //devuelve todos los asientos
  getAsientos(): Observable<Asiento[]> {
    return this.http.get<Asiento[]>(this.Url_Asientos);
  }


  addAsiento(asiento: Asiento): Observable<Asiento> {
    return this.http.post<Asiento>(this.Url_Asientos, asiento);
  }

  deleteAsiento(id: number): Observable<Asiento> {
    return this.http.delete<Asiento>(this.Url_Asientos + id);
  }





  getLineasAsiento(): Observable<LineaAsiento[]> {
    return this.http.get<LineaAsiento[]>(this.Url_LineasAsiento);
  }

  addLineasAsiento(lineaAsiento: LineaAsiento): Observable<LineaAsiento> {
    return this.http.post<LineaAsiento>(this.Url_LineasAsiento, lineaAsiento);
  }


  deleteLineaAsiento(id: number): Observable<LineaAsiento> {
    return this.http.delete<LineaAsiento>(this.Url_LineasAsiento + id);
  }





}

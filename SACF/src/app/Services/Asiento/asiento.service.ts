import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asiento } from 'src/app/Models/Asiento';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AsientoService {

  //API_Asientos: string = "http://localhost:3000/api/asientos/";

  Url_Asientos: string = environment.APIurl + "asientos/";

  constructor(private http: HttpClient) { }

  getAsientos(): Observable<Asiento[]> {
    return this.http.get<Asiento[]>(this.Url_Asientos);
  }

}

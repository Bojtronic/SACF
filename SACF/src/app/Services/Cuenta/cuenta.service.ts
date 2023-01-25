import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cuenta } from 'src/app/Models/Cuenta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private http: HttpClient) { }

  URL_cuentas: string = environment.APIurl + "/api/cuentas/";

  cuentaControl = new FormControl('');
  //cuentaControl = new FormControl('', Validators.required);

  private tipocuentas: string[] = ["Cuentas por cobrar (C/C)", "Activos corrientes",
    "Efectivo y equivalentes de efectivo", "Activos fijos", "Activos no corrientes",
    "Activos no corrientes", "Activos no corrientes", "Cuentas por pagar(C/P)",
    "Tarjeta de credito", "Pasivos corrientes", "Pasivos no corrientes",
    "Capital de propietario", "Ingresos", "Otros ingresos", "Costos de las ventas",
    "Gastos", "Otros gastos"];

  private divisas: string[] = ["Colon", "Dolar", "Euro"]

  /*
  cuentas: Cuenta[] = [
    { numero: '101', nombre: 'Bancos Colones', tipo: 'Efectivo y equivalentes de efectivo', detalle: 'Banco', descripcion: '', saldo: '12.430.818,95', divisa: 'CRC' },
    { numero: '101-01-00', nombre: 'Bancos Colones:BNCR #100-01-000466-0', tipo: 'Efectivo y equivalentes de efectivo', detalle: 'Banco', descripcion: 'BNCR 000466', saldo: '12.022.693,55', divisa: 'CRC' },
    { numero: '101', nombre: 'Bancos Colones', tipo: 'Efectivo y equivalentes de efectivo', detalle: 'Banco', descripcion: '', saldo: '12.430.818,95  ', divisa: 'CRC' },
    { numero: '103-01-00', nombre: 'Cuentas por cobrar (C/C) - USD', tipo: 'Cuentas por cobrar (C/C)', detalle: 'Cuentas por cobrar (C/C)', descripcion: '', saldo: '137.017,96', divisa: 'USD' },
    { numero: '103-02-00', nombre: 'Cuentas por cobrar', tipo: 'Cuentas por cobrar (C/C)', detalle: 'Cuentas por cobrar (C/C)', descripcion: '', saldo: '140.341.424,71', divisa: 'CRC' },
    { numero: '101', nombre: 'Bancos Colones', tipo: 'Efectivo y equivalentes de efectivo', detalle: 'Banco', descripcion: '', saldo: '12.430.818,95', divisa: 'CRC' },
    { numero: '101-01-00', nombre: 'Bancos Colones:BNCR #100-01-000466-0', tipo: 'Efectivo y equivalentes de efectivo', detalle: 'Banco', descripcion: 'BNCR 000466', saldo: '12.022.693,55', divisa: 'CRC' },
    { numero: '101', nombre: 'Bancos Colones', tipo: 'Efectivo y equivalentes de efectivo', detalle: 'Banco', descripcion: '', saldo: '12.430.818,95  ', divisa: 'CRC' },
    { numero: '103-01-00', nombre: 'Cuentas por cobrar (C/C) - USD', tipo: 'Cuentas por cobrar (C/C)', detalle: 'Cuentas por cobrar (C/C)', descripcion: '', saldo: '137.017,96', divisa: 'USD' },
    { numero: '103-02-00', nombre: 'Cuentas por cobrar', tipo: 'Cuentas por cobrar (C/C)', detalle: 'Cuentas por cobrar (C/C)', descripcion: '', saldo: '140.341.424,71', divisa: 'CRC' }
  ];
  */

  getCuentas(): Observable<Cuenta[]> {
    return this.http.get<Cuenta[]>(this.URL_cuentas);
  }

  addCuenta(cuenta: Cuenta): Observable<Cuenta> {
    return this.http.post<Cuenta>(this.URL_cuentas, cuenta);
  }

  deleteCuenta(id: number): Observable<Cuenta> {
    return this.http.delete<Cuenta>(this.URL_cuentas + id);
  }


  /*
  nombreCuentas() {
    let nombrecuentas: string[] = [];
    for (let cuenta of this.cuentas) {
      nombrecuentas.push(cuenta.nombre);
    }
    return nombrecuentas;
  }
  */

  getTipos() {
    return this.tipocuentas;
  }

  getDivisas() {
    return this.divisas;
  }



  /*
    allCuentas() {
      return this.cuentas;
    }
    */

  getControl() {
    return this.cuentaControl;
  }
}

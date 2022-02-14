import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Cuenta } from 'src/app/Models/Cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor() { }

  cuentaControl = new FormControl('', Validators.required);

  cuentas: Cuenta[] = [
    {numero: '101', nombre: 'Bancos Colones', tipo: 'Efectivo y equivalentes de efectivo', detalle: 'Banco', descripcion: '', saldo: '12.430.818,95  ', divisa: 'CRC'},
    {numero: '101-01-00', nombre:	'Bancos Colones:BNCR #100-01-000466-0', tipo:	'Efectivo y equivalentes de efectivo', detalle:	'Banco', descripcion:	'BNCR 000466', saldo:	'12.022.693,55', divisa: 'CRC'} 	
  ];

  allCuentas(){
    return this.cuentas;
  }

  getControl(){
    return this.cuentaControl;
  }
}

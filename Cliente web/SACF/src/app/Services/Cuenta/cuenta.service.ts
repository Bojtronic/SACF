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
    {titular: 'Mechudin', banco: 'BAC', descripcion: 'cuenta para el vicio'},
    {titular: 'Cory', banco: 'BCR', descripcion: 'cuenta para comida'},
    {titular: 'Alissa', banco: 'Scotiabank', descripcion: 'cuenta para viajes'},
    {titular: 'Simone', banco: 'Cathay', descripcion: 'cuenta para instrumentos'}
  ];

  allCuentas(){
    return this.cuentas;
  }

  getControl(){
    return this.cuentaControl;
  }

  setTitular(row:string, titular:string){

  }

  setBanco(row:string, banco:string){

  }

  setDescripcion(row:string, descripcion:string){

  }
}

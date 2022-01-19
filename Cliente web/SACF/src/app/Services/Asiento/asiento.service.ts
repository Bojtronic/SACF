import { Injectable } from '@angular/core';
import { Asiento } from 'src/app/Models/Asiento';
import { LineaAsiento } from 'src/app/Models/LineaAsiento';

@Injectable({
  providedIn: 'root'
})
export class AsientoService {

  Asientos: Asiento[] = [
  {consecutivo: '1', fecha:'00/00/0000',
    numlinea: [{numero: '1', cuenta: 'BAC', debito: '1000', credito: '1000', descripcion: 'compra de alimento', impuesto: '200', proveedor: 'Veterinario', fechabanco: '00/00/0000'},
    {numero: '2', cuenta: 'BCR', debito: '2000', credito: '2000', descripcion: 'paranguanitirimicuaro', impuesto: '500', proveedor: 'Vendor', fechabanco: '11/11/3333'},
    {numero: '3', cuenta: 'BN', debito: '3000', credito: '3000', descripcion: 'otorrinolaringologo', impuesto: '9500', proveedor: 'Picachu', fechabanco: '07/10/9999'}]},
  {consecutivo: '1', fecha:'00/00/0000',
    numlinea: [{numero: '1', cuenta: 'BAC', debito: '1000', credito: '1000', descripcion: 'compra de alimento', impuesto: '200', proveedor: 'Veterinario', fechabanco: '00/00/0000'},
    {numero: '2', cuenta: 'BCR', debito: '2000', credito: '2000', descripcion: 'paranguanitirimicuaro', impuesto: '500', proveedor: 'Vendor', fechabanco: '11/11/3333'},
    {numero: '3', cuenta: 'BN', debito: '3000', credito: '3000', descripcion: 'otorrinolaringologo', impuesto: '9500', proveedor: 'Picachu', fechabanco: '07/10/9999'}]},
  {consecutivo: '1', fecha:'00/00/0000',
    numlinea: [{numero: '1', cuenta: 'BAC', debito: '1000', credito: '1000', descripcion: 'compra de alimento', impuesto: '200', proveedor: 'Veterinario', fechabanco: '00/00/0000'},
    {numero: '2', cuenta: 'BCR', debito: '2000', credito: '2000', descripcion: 'paranguanitirimicuaro', impuesto: '500', proveedor: 'Vendor', fechabanco: '11/11/3333'},
    {numero: '3', cuenta: 'BN', debito: '3000', credito: '3000', descripcion: 'otorrinolaringologo', impuesto: '9500', proveedor: 'Picachu', fechabanco: '07/10/9999'}]}
];

  allAsientos(){
    return this.Asientos
  }

  asientoLines(consecutivo: string){
    let asiento: Asiento = this.Asientos[+consecutivo]
    let lines: LineaAsiento[] = asiento.numlinea
    return lines
  }

  asiento(consecutivo: string){
    this.Asientos[+consecutivo]
  }

  constructor() { }
}

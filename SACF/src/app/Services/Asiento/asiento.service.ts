import { Injectable } from '@angular/core';
import { Asiento } from 'src/app/Models/Asiento';
import { LineaAsiento } from 'src/app/Models/LineaAsiento';

@Injectable({
  providedIn: 'root'
})
export class AsientoService {

  private allNewRows: LineaAsiento[] = [];
  private newRow: LineaAsiento = {
    numero: '',
    cuenta: '',
    debito: '',
    credito: '',
    descripcion: '',
    impuesto: '',
    proveedor: '',
    fechabanco: ''
  }

  Asientos: Asiento[] = [
  {consecutivo: '1', fecha:'00/00/0000',
    numlinea: [{numero: '1', cuenta: 'BAC', debito: '1000', credito: '1000', descripcion: 'compra de alimento', impuesto: '200', proveedor: 'Veterinario', fechabanco: '00/00/0000'},
    {numero: '2', cuenta: 'BCR', debito: '2000', credito: '2000', descripcion: 'paranguanitirimicuaro', impuesto: '500', proveedor: 'Vendor', fechabanco: '11/11/3333'},
    {numero: '3', cuenta: 'BN', debito: '3000', credito: '3000', descripcion: 'otorrinolaringologo', impuesto: '9500', proveedor: 'Picachu', fechabanco: '07/10/9999'}]},
  {consecutivo: '2', fecha:'00/00/0000',
    numlinea: [{numero: '1', cuenta: 'BAC', debito: '1000', credito: '1000', descripcion: 'compra de alimento', impuesto: '200', proveedor: 'Veterinario', fechabanco: '00/00/0000'},
    {numero: '2', cuenta: 'BCR', debito: '2000', credito: '2000', descripcion: 'paranguanitirimicuaro', impuesto: '500', proveedor: 'Vendor', fechabanco: '11/11/3333'},
    {numero: '3', cuenta: 'BN', debito: '3000', credito: '3000', descripcion: 'otorrinolaringologo', impuesto: '9500', proveedor: 'Picachu', fechabanco: '07/10/9999'}]},
  {consecutivo: '3', fecha:'00/00/0000',
    numlinea: [{numero: '1', cuenta: 'BAC', debito: '1000', credito: '1000', descripcion: 'compra de alimento', impuesto: '200', proveedor: 'Veterinario', fechabanco: '00/00/0000'},
    {numero: '2', cuenta: 'BCR', debito: '2000', credito: '2000', descripcion: 'paranguanitirimicuaro', impuesto: '500', proveedor: 'Vendor', fechabanco: '11/11/3333'},
    {numero: '3', cuenta: 'BN', debito: '3000', credito: '3000', descripcion: 'otorrinolaringologo', impuesto: '9500', proveedor: 'Picachu', fechabanco: '07/10/9999'}]}
];

  getNewRow(){
    return this.newRow;
  }

  addNewRow(row: LineaAsiento){
    this.allNewRows.push(row);
    this.allNewRows = this.reorderRows(this.allNewRows);
  }

  getAllNewRows(){
    return this.allNewRows;
  }

  allAsientos(){
    return this.Asientos
  }

  //*
  asientoRows(consecutivo: string){
    let asiento: Asiento = this.Asientos[+consecutivo]
    let rows: LineaAsiento[] = asiento.numlinea
    return rows
  }

  asiento(consecutivo: string){
    this.Asientos[+consecutivo]
  }

  deleteRow(numero: string){
    this.allNewRows.splice(+numero-1, 1);
    this.allNewRows = this.reorderRows(this.allNewRows);
  }

  editRow(numero: string, cuenta: string, debito: string, credito: string, impuesto: string, proveedor: string, descripcion: string, fechabanco: string){
    for (let row of this.getAllNewRows()){
      if(row.numero==numero){
        row.cuenta=cuenta;
        row.debito=debito;
        row.credito=credito;
        row.impuesto=impuesto;
        row.proveedor=proveedor
        row.descripcion=descripcion;
        row.fechabanco=fechabanco; 
      }
    }
  }

  newConsecutivo(){
    return (this.Asientos.length).toString();
  }

  updateAsientos(changes: Asiento[]){
    this.Asientos = changes;
  }

  updateLines(consecutivo: string, lines: LineaAsiento[]){
    for (let asiento of this.Asientos){
      if(consecutivo==asiento.consecutivo){
        asiento.numlinea==lines;
      }
      else{
        console.log('NO EXISTE EL CONSECUTIVO');
      }
    }
  }

  reorderRows(rows: LineaAsiento[]){
    let numRow: number = 1;
    for (let row of rows){
      row.numero=(numRow).toString();
      numRow++
    }
    return rows;
  }


  constructor() { }
}

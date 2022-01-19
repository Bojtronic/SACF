import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Asiento } from 'src/app/Models/Asiento';
import { LineaAsiento } from 'src/app/Models/LineaAsiento';
import { Proveedor } from 'src/app/Models/Proveedor';
import { Cuenta } from 'src/app/Models/Cuenta';

let newAsiento: Asiento = {consecutivo: '1', fecha:'00/00/0000',
numlinea: [{numero: '1', cuenta: 'BAC', debito: '1000', credito: '1000', descripcion: 'compra de alimento', impuesto: '200', proveedor: 'Veterinario', fechabanco: '00/00/0000'},
           {numero: '2', cuenta: 'BCR', debito: '2000', credito: '2000', descripcion: 'paranguanitirimicuaro', impuesto: '500', proveedor: 'Vendor', fechabanco: '11/11/3333'},
           {numero: '3', cuenta: 'BN', debito: '3000', credito: '3000', descripcion: 'otorrinolaringologo', impuesto: '9500', proveedor: 'Picachu', fechabanco: '07/10/9999'}
]};

 const AsientoRows: LineaAsiento[] = newAsiento.numlinea;






@Component({
  selector: 'app-new-asiento',
  templateUrl: './new-asiento.component.html',
  styleUrls: ['./new-asiento.component.scss']
})



export class NewAsientoComponent implements AfterViewInit{
  banco: string  = '';
  proveedor: string = '';
  debito: string = '';
  credito: string = '';
  impuesto: string = '';
  descripcion: string = '';
  fecha: string = '';

  Columns: string[] = ['numlinea', 'cuenta', 'debito', 'credito', 'descripcion', 'impuesto', 'proveedor', 'fechabanco'];
  
  nuevoConsecutivo: number = +newAsiento.consecutivo + 1;

  dataSource = new MatTableDataSource<LineaAsiento>(AsientoRows);

  constructor(){

  }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  borrarLineas(){
    AsientoRows.splice(0, AsientoRows.length);
        
    this.dataSource = new MatTableDataSource<LineaAsiento>(AsientoRows);
    this.dataSource.paginator = this.paginator;
  }

  addLinea(debito: string, credito: string, impuesto: string, descripcion: string, fecha: string){
    let newnumLinea: string = '';
    if(AsientoRows.length == 0){
      newnumLinea = '1';
    }
    else{
      newnumLinea = (+AsientoRows[AsientoRows.length - 1].numero + 1).toString();
    }

    let newLinea: LineaAsiento = {numero: newnumLinea, cuenta: this.banco, debito: debito, credito: credito, descripcion: descripcion, impuesto: impuesto, proveedor: this.proveedor, fechabanco: fecha}
    
    AsientoRows.push(newLinea);
    newAsiento.numlinea = AsientoRows; 
    
    this.dataSource = new MatTableDataSource<LineaAsiento>(AsientoRows);
    this.dataSource.paginator = this.paginator;
  }


  setProveedor(nombre: string){
    this.proveedor = nombre;
  }

  setCuenta(banco: string){
    this.banco = banco;
  }


  proveedorControl = new FormControl('', Validators.required);
  cuentaControl = new FormControl('', Validators.required);

  //selectFormControl = new FormControl('', Validators.required);

  proveedores: Proveedor[] = [
    {nombre: 'Felix el gato', correo: 'xyz@catmail.com'},
    {nombre: 'Buckethead', correo: 'oioi@metal.com'},
    {nombre: 'Ryan Williams', correo: 'nitrocircus@au.com'},
    {nombre: 'Goku', correo: 'dragonball@anime.com'}
  ];
  
  newCuenta: Cuenta = {titular: '', banco: '', descripcion: ''};

  cuentas: Cuenta[] = [
    {titular: 'Mechudin', banco: 'BAC', descripcion: 'cuenta para el vicio'},
    {titular: 'Cory', banco: 'BCR', descripcion: 'cuenta para comida'},
    {titular: 'Alissa', banco: 'Scotiabank', descripcion: 'cuenta para viajes'},
    {titular: 'Simone', banco: 'Cathay', descripcion: 'cuenta para instrumentos'}
  ];
}

import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Asiento } from 'src/app/Models/Asiento';
import { LineaAsiento } from 'src/app/Models/LineaAsiento';
import { Proveedor } from 'src/app/Models/Proveedor';
import { Cuenta } from 'src/app/Models/Cuenta';
import { AsientoService } from 'src/app/Services/Asiento/asiento.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/*
let newAsiento: Asiento = {consecutivo: '1', fecha:'00/00/0000',
numlinea: [{numero: '1', cuenta: 'BAC', debito: '1000', credito: '1000', descripcion: 'compra de alimento', impuesto: '200', proveedor: 'Veterinario', fechabanco: '00/00/0000'},
           {numero: '2', cuenta: 'BCR', debito: '2000', credito: '2000', descripcion: 'paranguanitirimicuaro', impuesto: '500', proveedor: 'Vendor', fechabanco: '11/11/3333'},
           {numero: '3', cuenta: 'BN', debito: '3000', credito: '3000', descripcion: 'otorrinolaringologo', impuesto: '9500', proveedor: 'Picachu', fechabanco: '07/10/9999'}
]};
*/






@Component({
  selector: 'app-new-asiento',
  templateUrl: './new-asiento.component.html',
  styleUrls: ['./new-asiento.component.scss']
})



export class NewAsientoComponent implements AfterViewInit{
  numero: string = '';
  banco: string  = '';
  proveedor: string = '';
  debito: string = '';
  credito: string = '';
  impuesto: string = '';
  descripcion: string = '';
  fecha: string = '';

  AsientoRows: LineaAsiento[] = [];
  consecutivo: string = this.service.newConsecutivo()

  Columns: string[] = ['numlinea', 'cuenta', 'debito', 'credito', 'descripcion', 'impuesto', 'proveedor', 'fechabanco','accion'];

  dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoRows);

  constructor(public dialog: MatDialog, private service:AsientoService, private router:Router){ }



  openDialog(): void {
    const dialogRef = this.dialog.open(FormAsientoComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteLine(numLine: string){
    this.AsientoRows.splice(+numLine-1, 1);
    this.AsientoRows = this.service.reorderRows(this.AsientoRows);

    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoRows);
    this.dataSource.paginator = this.paginator;
  }

  borrarLineas(){
    this.AsientoRows.splice(0, this.AsientoRows.length);
        
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoRows);
    this.dataSource.paginator = this.paginator;
  }

  addLinea(debito: string, credito: string, impuesto: string, descripcion: string, fecha: string){
    this.numero = (this.AsientoRows.length + 1).toString();

    let newLinea: LineaAsiento = {numero: this.numero, cuenta: this.banco, debito: debito, credito: credito, descripcion: descripcion, impuesto: impuesto, proveedor: this.proveedor, fechabanco: fecha}
    
    this.AsientoRows.push(newLinea);
    //this.service.updateLines(this.service.newConsecutivo(), this.AsientoRows)
    //newAsiento.numlinea = this.AsientoRows; 


    
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.service.reorderRows(this.AsientoRows));
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

@Component({
  selector: 'app-form-asiento',
  templateUrl: './form-asiento.component.html'
})
export class FormAsientoComponent{
  constructor(
    public dialogRef: MatDialogRef<FormAsientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cuenta,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  proveedorControl = new FormControl('', Validators.required);
  cuentaControl = new FormControl('', Validators.required);


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

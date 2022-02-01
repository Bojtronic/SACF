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
import { CuentaService } from 'src/app/Services/Cuenta/cuenta.service';
import { ProveedorService } from 'src/app/Services/Proveedor/proveedor.service';
import { FormAsientoComponent } from '../form-asiento/form-asiento.component';


let newProveedor: string = '';
let newCuenta: string = '';

@Component({
  selector: 'app-new-asiento',
  templateUrl: './new-asiento.component.html',
  styleUrls: ['./new-asiento.component.scss']
})



export class NewAsientoComponent implements AfterViewInit{
  numlinea: string = (this.asientoService.getAllNewRows().length + 1).toString();

  proveedorControl = this.proveedorService.getControl();
  cuentaControl = this.cuentaService.getControl();

  proveedores: Proveedor[] = this.proveedorService.allProveedores();
  cuentas: Cuenta[] = this.cuentaService.allCuentas();


  AsientoRows: LineaAsiento[] = this.asientoService.getAllNewRows();
  consecutivo: string = this.asientoService.newConsecutivo()

  Columns: string[] = ['numlinea', 'cuenta', 'debito', 'credito', 'descripcion', 'impuesto', 'proveedor', 'fechabanco','accion'];

  dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoRows);


  constructor(public dialog: MatDialog, private asientoService:AsientoService, private cuentaService:CuentaService, private proveedorService:ProveedorService, private router:Router){ }

  getProveedor(proveedor:Proveedor):string{
    return proveedor.nombre;
  }
  getCuenta(cuenta:Cuenta):string{
    return cuenta.banco;
  }

  editRow(numero:string, cuenta:string, debito:string, credito:string, impuesto:string, proveedor:string, descripcion:string, fechabanco:string): void {
    const dialogRef = this.dialog.open(FormAsientoComponent, {
      //height: '400px',
      //width: '600px',
      data: {numero: numero, cuenta: cuenta, debito: debito, credito: credito, impuesto: impuesto, proveedor: proveedor, descripcion: descripcion, fechabanco: fechabanco}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      //this.openDialog()
      //this.animal = result;
      this.upDate();
    });
  }

/*
  openDialogX(): void {
    
    const dialogRef = this.dialog.open(FormAsientoComponent, {
      //height: '400px',
      //width: '600px',
      data: {numlinea: 'numlinea', cuenta: 'cuenta', debito: 'debito', credito: 'credito', descripcion: 'descripcion', impuesto: 'impuesto', proveedor: 'proveedor', fechabanco: 'fechabanco'}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      //this.openDialog()
      //this.animal = result;
      this.upDate();
    });
  }
*/
  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteRow(numero: string){
    //this.AsientoRows.splice(+numero-1, 1);
    //this.AsientoRows = this.asientoService.reorderRows(this.AsientoRows);
    this.asientoService.deleteRow(numero);
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoRows);
    this.dataSource.paginator = this.paginator;
  }
/*
  borrarLineas(){
    this.AsientoRows.splice(0, this.AsientoRows.length);
        
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoRows);
    this.dataSource.paginator = this.paginator;
  }
*/

  addRow(debito:string, credito:string, impuesto:string, descripcion:string, fechabanco:string){
    let newRow: LineaAsiento = {numero:this.numlinea, cuenta:newCuenta, debito:debito, credito:credito, descripcion:descripcion, impuesto:impuesto, proveedor:newProveedor, fechabanco:fechabanco};
    
    this.asientoService.addNewRow(newRow);
        
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoRows);
    this.dataSource.paginator = this.paginator;
  }


upDate(){
  this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoRows);
  this.dataSource.paginator = this.paginator;
}
  //*
  setProveedor(proveedor: string){
    newProveedor = proveedor;
  }

  setCuenta(cuenta: string){
    newCuenta = cuenta;
  }
  toDashboard(){
    this.router.navigate(['/dashboard']);
  }
}


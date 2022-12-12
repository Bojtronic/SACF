import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LineaAsiento } from 'src/app/Models/LineaAsiento';
import { Proveedor } from 'src/app/Models/Proveedor';
import { Cuenta } from 'src/app/Models/Cuenta';
import { AsientoService } from 'src/app/Services/Asiento/asiento.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CuentaService } from 'src/app/Services/Cuenta/cuenta.service';
import { ProveedorService } from 'src/app/Services/Proveedor/proveedor.service';
import { FormAsientoComponent } from '../form-asiento/form-asiento.component';
import { Asiento } from 'src/app/Models/Asiento';


let newProveedor: string = '';
let newCuenta: string = '';

@Component({
  selector: 'app-new-asiento',
  templateUrl: './new-asiento.component.html',
  styleUrls: ['./new-asiento.component.scss']
})



export class NewAsientoComponent implements AfterViewInit {


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

  Asientos: Asiento[] = [];

  numlinea: string = this.consecutivo();

  consecutivo_asiento: string = this.consecutivo();

  AsientoRows: LineaAsiento[] = this.getAllNewRows();


  /////////////////////////////////////////////////////////////////////////////////////////////

  //numlinea: string = (this.asientoService.getAllNewRows().length + 1).toString();

  proveedorControl = this.proveedorService.getControl();
  cuentaControl = this.cuentaService.getControl();

  proveedores: Proveedor[] = this.proveedorService.allProveedores();
  cuentas: Cuenta[] = this.cuentaService.allCuentas();


  //AsientoRows: LineaAsiento[] = this.asientoService.getAllNewRows();
  //consecutivo: string = this.newConsecutivo();

  Columns: string[] = ['numlinea', 'cuenta', 'debito', 'credito', 'descripcion', 'impuesto', 'proveedor', 'fechabanco', 'accion'];
  //Columns: string[] = ['numlinea', 'cuenta', 'debito', 'credito', 'descripcion', 'impuesto', 'proveedor', 'fechabanco', 'accion'];

  dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoRows);


  constructor(public dialog: MatDialog, private asientoService: AsientoService, private cuentaService: CuentaService, private proveedorService: ProveedorService, private router: Router) { }

  ngOnInit(): void {

    this.asientoService.getAsientos().subscribe(data => {
      this.Asientos = data as Asiento[];
    })
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  getAllNewRows() {
    return this.allNewRows;
  }

  /*
  editRow(numero: string, cuenta: string, debito: string, credito: string, impuesto: string, proveedor: string, descripcion: string, fechabanco: string) {
    for (let row of this.getAllNewRows()) {
      if (row.numero == numero) {
        row.cuenta = cuenta;
        row.debito = debito;
        row.credito = credito;
        row.impuesto = impuesto;
        row.proveedor = proveedor
        row.descripcion = descripcion;
        row.fechabanco = fechabanco;
      }
    }
  }
  */

  consecutivo() {
    return (this.Asientos.length + 1).toString();
  }

  getProveedor(proveedor: Proveedor): string {
    return proveedor.nombre;
  }

  getCuenta(cuenta: Cuenta): string {
    //return cuenta.banco;
    return 'Hola soy un errorsh'
  }

  editRow(numero: string, cuenta: string, debito: string, credito: string, impuesto: string, proveedor: string, descripcion: string, fechabanco: string): void {
    const dialogRef = this.dialog.open(FormAsientoComponent, {
      //height: '400px',
      //width: '600px',
      data: { numero: numero, cuenta: cuenta, debito: debito, credito: credito, impuesto: impuesto, proveedor: proveedor, descripcion: descripcion, fechabanco: fechabanco }
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.openDialog()
      //this.animal = result;
      this.upDate();
    });
  }


  deleteRow(numero: string) {
    //this.AsientoRows.splice(+numero-1, 1);
    //this.AsientoRows = this.asientoService.reorderRows(this.AsientoRows);
    //this.asientoService.deleteRow(numero);
    this.allNewRows.splice(+numero - 1, 1);
    this.allNewRows = this.reorderRows(this.allNewRows);

    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoRows);
    this.dataSource.paginator = this.paginator;
  }

  reorderRows(rows: LineaAsiento[]) {
    let numRow: number = 1;
    for (let row of rows) {
      row.numero = (numRow).toString();
      numRow++
    }
    return rows;
  }

  addRow(debito: string, credito: string, impuesto: string, descripcion: string, fechabanco: string) {
    let newRow: LineaAsiento = { numero: this.numlinea, cuenta: newCuenta, debito: debito, credito: credito, descripcion: descripcion, impuesto: impuesto, proveedor: newProveedor, fechabanco: fechabanco };

    //this.asientoService.addNewRow(newRow);
    this.allNewRows.push(newRow);
    this.allNewRows = this.reorderRows(this.allNewRows);

    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoRows);
    this.dataSource.paginator = this.paginator;
  }


  upDate() {
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoRows);
    this.dataSource.paginator = this.paginator;
  }

  setProveedor(proveedor: string) {
    newProveedor = proveedor;
  }

  setCuenta(cuenta: string) {
    newCuenta = cuenta;
  }
  toDashboard() {
    this.router.navigate(['/dashboard']);
  }
  toAllAsientos() {
    this.router.navigate(['/allasientos']);
  }


}


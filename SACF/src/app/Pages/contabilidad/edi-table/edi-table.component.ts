import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cuenta } from 'src/app/Models/Cuenta';
import { LineaAsiento } from 'src/app/Models/LineaAsiento';
import { Proveedor } from 'src/app/Models/Proveedor';
import { CuentaService } from 'src/app/Services/Cuenta/cuenta.service';
import { ProveedorService } from 'src/app/Services/Proveedor/proveedor.service';



@Component({
  selector: 'app-edi-table',
  templateUrl: './edi-table.component.html',
  styleUrls: ['./edi-table.component.scss']
})

export class EdiTableComponent {
  AsientoData: LineaAsiento[] = [
    { numero_linea: 1, cuenta: '', debito: 0, credito: 0, descripcion: '', impuesto: '', fecha_emision_factura: new Date('01-01-2000'), proveedor: '' }
  ];

  dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);

  today = new Date(new Date().getTime());

  more_rows: number = 1;

  numero_linea: number = 0;
  cuenta: string = '';
  debito: number = 0;
  credito: number = 0;
  descripcion: string = '';
  impuesto: string = '';
  fecha_emision_factura: Date = new Date();
  proveedor: string = '';


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  cuentaControl = this.cuentaService.getControl();
  proveedorControl = this.proveedorService.getControl();


  cuentas: Cuenta[] = this.cuentaService.allCuentas();
  proveedores: Proveedor[] = this.proveedorService.allProveedores();


  Columns: string[] = ['numero_linea', 'cuenta', 'debito', 'credito', 'descripcion', 'impuesto', 'fecha_emision_factura', 'proveedor', 'accion'];

  constructor(private cuentaService: CuentaService, private proveedorService: ProveedorService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addNewRows(more_rows: number) {
    for (let i = 0; i < more_rows; i++) {
      let newRow: LineaAsiento = { numero_linea: (this.AsientoData.length + 1), cuenta: '', debito: 0, credito: 0, descripcion: '', impuesto: '', fecha_emision_factura: new Date('01-01-2000'), proveedor: '' };
      this.AsientoData.push(newRow);
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
    this.dataSource.paginator = this.paginator;
    this.more_rows = 1;
  }

  addNewRow() {
    let newRow: LineaAsiento = { numero_linea: (this.AsientoData.length + 1), cuenta: '', debito: 0, credito: 0, descripcion: '', impuesto: '', fecha_emision_factura: new Date('01-01-2000'), proveedor: '' };
    this.AsientoData.push(newRow);
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
    this.dataSource.paginator = this.paginator;
  }

  deleteRow(rowNum: string) {
    if (this.AsientoData.length == 1) {
      this.AsientoData.pop();
      this.addNewRow();
    }
    else {
      let index: number = 1;
      let AsientoData_aux: LineaAsiento[] = [];
      let row_aux: LineaAsiento;
      for (let row of this.AsientoData) {
        if (row.numero_linea != +rowNum) {
          row_aux = row;
          row_aux.numero_linea = index;
          AsientoData_aux.push(row_aux);
          index++;
        }
      }
      this.AsientoData = AsientoData_aux;
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
    this.dataSource.paginator = this.paginator;
  }


  setFecha_emision_factura(event: { value: any; }, rowNum: string) {
    let fecha: Date = event.value;
    let index: number = +rowNum - 1;

    console.log(this.AsientoData)

    if (this.AsientoData[index].cuenta != '' && this.AsientoData[index].descripcion != '' && this.AsientoData[index].impuesto != '' && this.AsientoData[index].proveedor != '') {
      if (((this.AsientoData[index].debito != 0) && (this.AsientoData[index].credito == 0)) || ((this.AsientoData[index].debito == 0) && (this.AsientoData[index].credito != 0))) {

        this.AsientoData[index].fecha_emision_factura = fecha;

        //this.addNewRow();


        let newEmptyRow: number = 1;
        for (let row of this.AsientoData) {
          if ((row.cuenta == '' || row.proveedor == '' || row.impuesto == '' || row.descripcion == '' || (row.credito == 0 && row.debito == 0))) {
            newEmptyRow = 0;
          }
        }

        if (this.AsientoData.length == 0) {
          this.addNewRow();
        }

      }
      else {
        this.AsientoData[index].fecha_emision_factura = fecha;
      }
    }
    else {
      this.AsientoData[index].fecha_emision_factura = fecha;
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setCuenta(cuenta: string, rowNum: string) {
    let index: number = +rowNum;
    if (this.AsientoData[index].fecha_emision_factura != null && this.AsientoData[index].descripcion != '' && this.AsientoData[index].impuesto != '' && this.AsientoData[index].proveedor != '') {
      if (((this.AsientoData[index].debito != 0) && (this.AsientoData[index].credito == 0)) || ((this.AsientoData[index].debito == 0) && (this.AsientoData[index].credito != 0))) {

        this.AsientoData[index].cuenta = cuenta;
        //this.addNewRow();


        let newEmptyRow: number = 1;
        for (let row of this.AsientoData) {
          if ((row.proveedor == '' || row.impuesto == '' || row.descripcion == '' || row.fecha_emision_factura == null) || (row.credito == 0 && row.debito == 0)) {
            newEmptyRow = 0;
          }
        }
        if (newEmptyRow == 1) {
          this.addNewRow();
        }


      }
      else {
        this.AsientoData[index].cuenta = cuenta;
      }
    }
    else {
      this.AsientoData[index].cuenta = cuenta;
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }


  setProveedor(proveedor: string, rowNum: string) {
    let index: number = +rowNum;
    if (this.AsientoData[index].fecha_emision_factura != null && this.AsientoData[index].descripcion != '' && this.AsientoData[index].impuesto != '' && this.AsientoData[index].cuenta != '') {
      if (((this.AsientoData[index].debito != 0) && (this.AsientoData[index].credito == 0)) || ((this.AsientoData[index].debito == 0) && (this.AsientoData[index].credito != 0))) {

        this.AsientoData[index].proveedor = proveedor;
        //this.addNewRow();


        let newEmptyRow: number = 1;
        for (let row of this.AsientoData) {
          if ((row.cuenta == '' || row.impuesto == '' || row.descripcion == '' || row.fecha_emision_factura == null) || (row.credito == 0 && row.debito == 0)) {
            newEmptyRow = 0;
          }
        }
        if (newEmptyRow == 1) {
          this.addNewRow();
        }

      }
      else {
        this.AsientoData[index].proveedor = proveedor;
      }
    }
    else {
      this.AsientoData[index].proveedor = proveedor;
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setImpuesto(impuesto: string, rowNum: string) {
    let index: number = +rowNum;
    if (this.AsientoData[index].fecha_emision_factura != null && this.AsientoData[index].descripcion != '' && this.AsientoData[index].proveedor != '' && this.AsientoData[index].cuenta != '') {
      if (((this.AsientoData[index].debito != 0) && (this.AsientoData[index].credito == 0)) || ((this.AsientoData[index].debito == 0) && (this.AsientoData[index].credito != 0))) {

        this.AsientoData[index].impuesto = impuesto;
        //this.addNewRow();


        let newEmptyRow: number = 1;
        for (let row of this.AsientoData) {
          if ((row.cuenta == '' || row.proveedor == '' || row.descripcion == '' || row.fecha_emision_factura == null) || (row.credito == 0 && row.debito == 0)) {
            newEmptyRow = 0;
          }
        }
        if (newEmptyRow == 1) {
          this.addNewRow();
        }

      }
      else {
        this.AsientoData[index].impuesto = impuesto;
      }
    }
    else {
      this.AsientoData[index].impuesto = impuesto;
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setDescripcion(descripcion: string, rowNum: string) {
    let index: number = +rowNum;
    if (this.AsientoData[index].fecha_emision_factura != null && this.AsientoData[index].impuesto != '' && this.AsientoData[index].proveedor != '' && this.AsientoData[index].cuenta != '') {
      if (((this.AsientoData[index].debito != 0) && (this.AsientoData[index].credito == 0)) || ((this.AsientoData[index].debito == 0) && (this.AsientoData[index].credito != 0))) {

        this.AsientoData[index].descripcion = descripcion;
        //this.addNewRow();


        let newEmptyRow: number = 1;
        for (let row of this.AsientoData) {
          if ((row.cuenta == '' || row.proveedor == '' || row.impuesto == '' || row.fecha_emision_factura == null) || (row.credito == 0 && row.debito == 0)) {
            newEmptyRow = 0;
          }
        }
        if (newEmptyRow == 1) {
          this.addNewRow();
        }

      }
      else {
        this.AsientoData[index].descripcion = descripcion;
      }
    }
    else {
      this.AsientoData[index].descripcion = descripcion;
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setDebito(debito: string, rowNum: string) {
    let index: number = +rowNum;

    if (this.AsientoData[index].fecha_emision_factura != null && this.AsientoData[index].descripcion != '' && this.AsientoData[index].impuesto != '' && this.AsientoData[index].proveedor != '' && this.AsientoData[index].cuenta != '') {
      if (this.AsientoData[index].credito == 0) {
        this.AsientoData[index].debito = +debito;
        //this.addNewRow();


        let newEmptyRow: number = 1;
        for (let row of this.AsientoData) {
          if ((row.cuenta == '' || row.proveedor == '' || row.impuesto == '' || row.fecha_emision_factura == null)) {
            newEmptyRow = 0;
          }
        }
        if (newEmptyRow == 1) {
          this.addNewRow();
        }

      }
      else {
        this.AsientoData[index].debito = 0;
        console.log('la fila no puede tener credito y debito, solo 1');
      }
    }
    else {
      if (this.AsientoData[index].credito == 0) {
        this.AsientoData[index].debito = +debito;
      }
      else {
        this.AsientoData[index].debito = 0;
        console.log('la fila no puede tener credito y debito, solo 1');
      }
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setCredito(credito: string, rowNum: string) {
    let index: number = +rowNum;
    if (this.AsientoData[index].fecha_emision_factura != null && this.AsientoData[index].descripcion != '' && this.AsientoData[index].impuesto != '' && this.AsientoData[index].proveedor != '' && this.AsientoData[index].cuenta != '') {
      if (this.AsientoData[index].debito == 0) {
        this.AsientoData[index].credito = +credito;


        let newEmptyRow: number = 1;
        for (let row of this.AsientoData) {
          if ((row.cuenta == '' || row.proveedor == '' || row.impuesto == '' || row.fecha_emision_factura == null)) {
            newEmptyRow = 0;
          }
        }
        if (newEmptyRow == 1) {
          this.addNewRow();
        }

      }
      else {
        this.AsientoData[index].credito = 0;
        console.log('la fila no puede tener credito y debito, solo 1');
      }
    }
    else {
      if (this.AsientoData[index].debito == 0) {
        this.AsientoData[index].credito = +credito;
      }
      else {
        console.log('la fila no puede tener credito y debito, solo 1');
        this.AsientoData[index].credito = 0;
      }
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

}

import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cuenta } from 'src/app/Models/Cuenta';
import { LineaAsiento } from 'src/app/Models/LineaAsiento';
import { LineaAsientoGraph } from 'src/app/Models/LineaAsientoGraph';
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
    //{ numero_linea: 1, cuenta: '', debito: 0, credito: 0, descripcion: '', impuesto: '', fecha_emision_factura: new Date('01-01-2000'), proveedor: '' }
  ];

  AsientoDataGraph: LineaAsientoGraph[] = [
    { numero_linea: 1, cuenta: '', debito_cantidad: 0, debito_deshabilitado: false, credito_cantidad: 0, credito_deshabilitado: false, descripcion: '', impuesto: '', fecha_emision_factura: new Date('01-01-2000'), proveedor: '' }
  ];

  dataSource = new MatTableDataSource<LineaAsientoGraph>(this.AsientoDataGraph);

  today = new Date(new Date().getTime());

  more_rows: number = 1;

  totalCreditos: number = 0;
  totalDebitos: number = 0;

  diferenciaDC: number = this.totalDebitos - this.totalCreditos;

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

  sendAsiento() {
    let lineaAsiento: LineaAsiento = { numero_linea: 1, cuenta: '', debito: 0, credito: 0, descripcion: '', impuesto: '', fecha_emision_factura: new Date('01-01-2000'), proveedor: '' };
    this.AsientoData = [];
    for (let row of this.AsientoDataGraph) {
      lineaAsiento.numero_linea = row.numero_linea;
      lineaAsiento.cuenta = row.cuenta;
      lineaAsiento.debito = row.debito_cantidad;
      lineaAsiento.credito = row.credito_cantidad;
      lineaAsiento.descripcion = row.descripcion;
      lineaAsiento.impuesto = row.impuesto;
      lineaAsiento.fecha_emision_factura = row.fecha_emision_factura;
      lineaAsiento.proveedor = row.proveedor;

      this.AsientoData.push(lineaAsiento);

      //logica para hacer post
      //
      //
      //

    }
  }

  addNewRows(more_rows: number) {
    for (let i = 0; i < more_rows; i++) {
      let newRow: LineaAsientoGraph = { numero_linea: (this.AsientoData.length + 1), cuenta: '', debito_cantidad: 0, debito_deshabilitado: false, credito_cantidad: 0, credito_deshabilitado: false, descripcion: '', impuesto: '', fecha_emision_factura: new Date('01-01-2000'), proveedor: '' };
      this.AsientoDataGraph.push(newRow);
    }
    this.dataSource = new MatTableDataSource<LineaAsientoGraph>(this.AsientoDataGraph);
    this.dataSource.paginator = this.paginator;
    this.more_rows = 1;

    this.suma_creditos();
    this.suma_debitos();
  }

  addNewRow() {
    let newRow: LineaAsientoGraph = { numero_linea: (this.AsientoData.length + 1), cuenta: '', debito_cantidad: 0, debito_deshabilitado: false, credito_cantidad: 0, credito_deshabilitado: false, descripcion: '', impuesto: '', fecha_emision_factura: new Date('01-01-2000'), proveedor: '' };
    this.AsientoDataGraph.push(newRow);
    this.dataSource = new MatTableDataSource<LineaAsientoGraph>(this.AsientoDataGraph);
    this.dataSource.paginator = this.paginator;

    this.suma_creditos();
    this.suma_debitos();
  }

  deleteRow(rowNum: string) {
    if (this.AsientoDataGraph.length == 1) {
      this.AsientoDataGraph.pop();
      this.addNewRow();
    }
    else {
      let index: number = 1;
      let AsientoDataGraph_aux: LineaAsientoGraph[] = [];
      let row_aux: LineaAsientoGraph;
      for (let row of this.AsientoDataGraph) {
        if (row.numero_linea != +rowNum) {
          row_aux = row;
          row_aux.numero_linea = index;
          AsientoDataGraph_aux.push(row_aux);
          index++;
        }
      }
      this.AsientoDataGraph = AsientoDataGraph_aux;
    }
    this.dataSource = new MatTableDataSource<LineaAsientoGraph>(this.AsientoDataGraph);
    this.dataSource.paginator = this.paginator;

    this.suma_creditos();
    this.suma_debitos();
  }


  deleteAllRows() {
    while (this.AsientoDataGraph.length > 0) {
      this.AsientoDataGraph.pop();
    }
  }



  suma_debitos() {
    this.totalDebitos = 0;
    for (let row of this.AsientoDataGraph) {
      this.totalDebitos += row.debito_cantidad
    }
    this.diferenciaDC = this.totalDebitos - this.totalCreditos;
  }

  suma_creditos() {
    this.totalCreditos = 0;
    for (let row of this.AsientoDataGraph) {
      this.totalCreditos += row.credito_cantidad;
    }
    this.diferenciaDC = this.totalDebitos - this.totalCreditos;
  }

  setFecha_emision_factura(event: { value: any; }, rowNum: string) {
    let fecha: Date = event.value;
    let index: number = +rowNum - 1;

    //console.log(this.AsientoData)

    if (this.AsientoDataGraph[index].cuenta != '' && this.AsientoDataGraph[index].descripcion != '' && this.AsientoDataGraph[index].impuesto != '' && this.AsientoDataGraph[index].proveedor != '') {
      if (((this.AsientoDataGraph[index].debito_cantidad != 0) && (this.AsientoDataGraph[index].credito_cantidad == 0)) || ((this.AsientoDataGraph[index].debito_cantidad == 0) && (this.AsientoDataGraph[index].credito_cantidad != 0))) {

        this.AsientoDataGraph[index].fecha_emision_factura = fecha;

        //this.addNewRow();


        let newEmptyRow: number = 1;
        for (let row of this.AsientoDataGraph) {
          if ((row.cuenta == '' || row.proveedor == '' || row.impuesto == '' || row.descripcion == '' || (row.credito_cantidad == 0 && row.debito_cantidad == 0))) {
            newEmptyRow = 0;
          }
        }

        if (this.AsientoDataGraph.length == 0) {
          this.addNewRow();
        }

      }
      else {
        this.AsientoDataGraph[index].fecha_emision_factura = fecha;
      }
    }
    else {
      this.AsientoDataGraph[index].fecha_emision_factura = fecha;
    }
    this.dataSource = new MatTableDataSource<LineaAsientoGraph>(this.AsientoDataGraph);
  }

  setCuenta(cuenta: string, rowNum: string) {
    let index: number = +rowNum - 1;
    if (this.AsientoDataGraph[index].fecha_emision_factura != null && this.AsientoDataGraph[index].descripcion != '' && this.AsientoDataGraph[index].impuesto != '' && this.AsientoDataGraph[index].proveedor != '') {
      if (((this.AsientoDataGraph[index].debito_cantidad != 0) && (this.AsientoDataGraph[index].credito_cantidad == 0)) || ((this.AsientoDataGraph[index].debito_cantidad == 0) && (this.AsientoDataGraph[index].credito_cantidad != 0))) {

        this.AsientoDataGraph[index].cuenta = cuenta;

        let newEmptyRow: number = 1;
        for (let row of this.AsientoDataGraph) {
          if ((row.proveedor == '' || row.impuesto == '' || row.descripcion == '' || row.fecha_emision_factura == null) || (row.credito_cantidad == 0 && row.debito_cantidad == 0)) {
            newEmptyRow = 0;
          }
        }
        if (newEmptyRow == 1) {
          this.addNewRow();
        }


      }
      else {
        this.AsientoDataGraph[index].cuenta = cuenta;
      }
    }
    else {
      this.AsientoDataGraph[index].cuenta = cuenta;
    }
    this.dataSource = new MatTableDataSource<LineaAsientoGraph>(this.AsientoDataGraph);
  }


  setProveedor(proveedor: string, rowNum: string) {
    let index: number = +rowNum - 1;
    if (this.AsientoDataGraph[index].fecha_emision_factura != null && this.AsientoDataGraph[index].descripcion != '' && this.AsientoDataGraph[index].impuesto != '' && this.AsientoDataGraph[index].cuenta != '') {
      if (((this.AsientoDataGraph[index].debito_cantidad != 0) && (this.AsientoDataGraph[index].credito_cantidad == 0)) || ((this.AsientoDataGraph[index].debito_cantidad == 0) && (this.AsientoDataGraph[index].credito_cantidad != 0))) {

        this.AsientoDataGraph[index].proveedor = proveedor;
        //this.addNewRow();


        let newEmptyRow: number = 1;
        for (let row of this.AsientoDataGraph) {
          if ((row.cuenta == '' || row.impuesto == '' || row.descripcion == '' || row.fecha_emision_factura == null) || (row.credito_cantidad == 0 && row.debito_cantidad == 0)) {
            newEmptyRow = 0;
          }
        }
        if (newEmptyRow == 1) {
          this.addNewRow();
        }

      }
      else {
        this.AsientoDataGraph[index].proveedor = proveedor;
      }
    }
    else {
      this.AsientoDataGraph[index].proveedor = proveedor;
    }
    this.dataSource = new MatTableDataSource<LineaAsientoGraph>(this.AsientoDataGraph);
  }

  setImpuesto(impuesto: string, rowNum: string) {
    let index: number = +rowNum - 1;
    if (this.AsientoDataGraph[index].fecha_emision_factura != null && this.AsientoDataGraph[index].descripcion != '' && this.AsientoDataGraph[index].proveedor != '' && this.AsientoDataGraph[index].cuenta != '') {
      if (((this.AsientoDataGraph[index].debito_cantidad != 0) && (this.AsientoDataGraph[index].credito_cantidad == 0)) || ((this.AsientoDataGraph[index].debito_cantidad == 0) && (this.AsientoDataGraph[index].credito_cantidad != 0))) {

        this.AsientoDataGraph[index].impuesto = impuesto;
        //this.addNewRow();


        let newEmptyRow: number = 1;
        for (let row of this.AsientoDataGraph) {
          if ((row.cuenta == '' || row.proveedor == '' || row.descripcion == '' || row.fecha_emision_factura == null) || (row.credito_cantidad == 0 && row.debito_cantidad == 0)) {
            newEmptyRow = 0;
          }
        }
        if (newEmptyRow == 1) {
          this.addNewRow();
        }

      }
      else {
        this.AsientoDataGraph[index].impuesto = impuesto;
      }
    }
    else {
      this.AsientoDataGraph[index].impuesto = impuesto;
    }
    this.dataSource = new MatTableDataSource<LineaAsientoGraph>(this.AsientoDataGraph);
  }

  setDescripcion(descripcion: string, rowNum: string) {
    let index: number = +rowNum - 1;
    if (this.AsientoDataGraph[index].fecha_emision_factura != null && this.AsientoDataGraph[index].impuesto != '' && this.AsientoDataGraph[index].proveedor != '' && this.AsientoDataGraph[index].cuenta != '') {
      if (((this.AsientoDataGraph[index].debito_cantidad != 0) && (this.AsientoDataGraph[index].credito_cantidad == 0)) || ((this.AsientoDataGraph[index].debito_cantidad == 0) && (this.AsientoDataGraph[index].credito_cantidad != 0))) {

        this.AsientoDataGraph[index].descripcion = descripcion;

        let newEmptyRow: number = 1;
        for (let row of this.AsientoDataGraph) {
          if ((row.cuenta == '' || row.proveedor == '' || row.impuesto == '' || row.fecha_emision_factura == null) || (row.credito_cantidad == 0 && row.debito_cantidad == 0)) {
            newEmptyRow = 0;
          }
        }
        if (newEmptyRow == 1) {
          this.addNewRow();
        }

      }
      else {
        this.AsientoDataGraph[index].descripcion = descripcion;
      }
    }
    else {
      this.AsientoDataGraph[index].descripcion = descripcion;
    }
    this.dataSource = new MatTableDataSource<LineaAsientoGraph>(this.AsientoDataGraph);
  }








  setDebito(debito: string, rowNum: string) {
    let index: number = +rowNum - 1;

    if (+debito == 0 && (this.AsientoDataGraph[index].credito_cantidad == 0) || this.AsientoDataGraph[index].credito_cantidad == null) {

      this.AsientoDataGraph[index].debito_cantidad = +debito;

      this.AsientoDataGraph[index].debito_deshabilitado = false;
      this.AsientoDataGraph[index].credito_deshabilitado = false;

      //this.suma_debitos();
    }

    else if (this.AsientoDataGraph[index].fecha_emision_factura != null && this.AsientoDataGraph[index].descripcion != '' && this.AsientoDataGraph[index].impuesto != '' && this.AsientoDataGraph[index].proveedor != '' && this.AsientoDataGraph[index].cuenta != '') {
      if (this.AsientoDataGraph[index].credito_cantidad == 0) {
        this.AsientoDataGraph[index].debito_cantidad = +debito;

        this.AsientoDataGraph[index].debito_deshabilitado = false;
        this.AsientoDataGraph[index].credito_deshabilitado = true;


        let newEmptyRow: number = 1;
        for (let row of this.AsientoDataGraph) {
          if ((row.cuenta == '' || row.proveedor == '' || row.impuesto == '' || row.fecha_emision_factura == null)) {
            newEmptyRow = 0;
          }
        }
        if (newEmptyRow == 1) {
          this.addNewRow();
        }

      }
      else {
        this.AsientoDataGraph[index].debito_cantidad = 0;
        console.log('la fila no puede tener credito y debito, solo 1');

        this.AsientoDataGraph[index].debito_deshabilitado = true;
        this.AsientoDataGraph[index].credito_deshabilitado = false;

      }
    }
    else {
      if (this.AsientoDataGraph[index].credito_cantidad == 0) {
        this.AsientoDataGraph[index].debito_cantidad = +debito;


        this.AsientoDataGraph[index].debito_deshabilitado = false;
        this.AsientoDataGraph[index].credito_deshabilitado = true;


      }
      else {
        this.AsientoDataGraph[index].debito_cantidad = 0;
        console.log('la fila no puede tener credito y debito, solo 1');


        this.AsientoDataGraph[index].debito_deshabilitado = true;
        this.AsientoDataGraph[index].credito_deshabilitado = false;

      }
    }

    this.suma_debitos();
    this.dataSource = new MatTableDataSource<LineaAsientoGraph>(this.AsientoDataGraph);
  }



  setCredito(credito: string, rowNum: string) {
    let index: number = +rowNum - 1;

    if (+credito == 0 && this.AsientoDataGraph[index].debito_cantidad == 0) {

      this.AsientoDataGraph[index].credito_cantidad = +credito;

      this.AsientoDataGraph[index].debito_deshabilitado = false;
      this.AsientoDataGraph[index].credito_deshabilitado = false;
    }

    else if (this.AsientoDataGraph[index].fecha_emision_factura != null && this.AsientoDataGraph[index].descripcion != '' && this.AsientoDataGraph[index].impuesto != '' && this.AsientoDataGraph[index].proveedor != '' && this.AsientoDataGraph[index].cuenta != '') {
      if (this.AsientoDataGraph[index].debito_cantidad == 0) {
        this.AsientoDataGraph[index].credito_cantidad = +credito;

        this.AsientoDataGraph[index].debito_deshabilitado = true;
        this.AsientoDataGraph[index].credito_deshabilitado = false;


        let newEmptyRow: number = 1;
        for (let row of this.AsientoDataGraph) {
          if ((row.cuenta == '' || row.proveedor == '' || row.impuesto == '' || row.fecha_emision_factura == null)) {
            newEmptyRow = 0;
          }
        }
        if (newEmptyRow == 1) {
          this.addNewRow();
        }

      }
      else {
        this.AsientoDataGraph[index].credito_cantidad = 0;
        console.log('la fila no puede tener credito y debito, solo 1');


        this.AsientoDataGraph[index].debito_deshabilitado = false;
        this.AsientoDataGraph[index].credito_deshabilitado = true;

      }
    }
    else {
      if (this.AsientoDataGraph[index].debito_cantidad == 0) {
        this.AsientoDataGraph[index].credito_cantidad = +credito;


        this.AsientoDataGraph[index].debito_deshabilitado = true;
        this.AsientoDataGraph[index].credito_deshabilitado = false;



      }
      else {
        console.log('la fila no puede tener credito y debito, solo 1');
        this.AsientoDataGraph[index].credito_cantidad = 0;

        this.AsientoDataGraph[index].debito_deshabilitado = false;
        this.AsientoDataGraph[index].credito_deshabilitado = true;
      }
    }


    this.suma_creditos();
    this.dataSource = new MatTableDataSource<LineaAsientoGraph>(this.AsientoDataGraph);
  }

}

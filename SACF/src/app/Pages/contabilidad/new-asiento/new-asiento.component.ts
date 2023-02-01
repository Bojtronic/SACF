import { Component } from '@angular/core';
import { AsientoService } from 'src/app/Services/Asiento/asiento.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CuentaService } from 'src/app/Services/Cuenta/cuenta.service';
import { Asiento } from 'src/app/Models/Asiento';
import { DateAdapter } from '@angular/material/core';
import { Cuenta } from 'src/app/Models/Cuenta';
import { LineaAsiento } from 'src/app/Models/LineaAsiento';
import { LineaAsientoGraph } from 'src/app/Models/LineaAsientoGraph';
import { MatTableDataSource } from '@angular/material/table';
import { ProveedorService } from 'src/app/Services/Proveedor/proveedor.service';
import { Proveedor } from 'src/app/Models/Proveedor';
import { NewCuentaComponent } from '../new-cuenta/new-cuenta.component';
//import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-asiento',
  templateUrl: './new-asiento.component.html',
  styleUrls: ['./new-asiento.component.scss']
})



export class NewAsientoComponent {

  consecutivo_asiento: number = 1;
  today = new Date(new Date().getTime());
  divisa: string = '';

 

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////EDI-TABLE///////////////////////////////////////////////////////////////////////////////


  defaultDate = new Date('01-01-2000');

  lineasAsiento: LineaAsiento[] = [
    { numero_asiento: 0, numero_linea: 0, id_cuenta: 0, debito: 0, credito: 0, descripcion: '', impuesto: '', fecha_factura: new Date('01-01-2000'), proveedor: '' }
  ];

  AsientoDataGraph: LineaAsientoGraph[] = [
    { numero_linea: 1, cuenta: '', debito_cantidad: 0, debito_deshabilitado: false, credito_cantidad: 0, credito_deshabilitado: false, descripcion: '', impuesto: '', fecha_emision_factura: this.defaultDate, proveedor: '' },
    { numero_linea: 2, cuenta: '', debito_cantidad: 0, debito_deshabilitado: false, credito_cantidad: 0, credito_deshabilitado: false, descripcion: '', impuesto: '', fecha_emision_factura: this.defaultDate, proveedor: '' }
  ];

  dataSource = new MatTableDataSource<LineaAsientoGraph>(this.AsientoDataGraph);


  more_rows: number = 1;

  totalCreditos: number = 0;
  totalDebitos: number = 0;

  diferenciaDC: number = this.totalDebitos - this.totalCreditos;

  cuentaControl = this.cuentaService.getControl();
  proveedorControl = this.proveedorService.getControl();

  cuentas: Cuenta[] = [];
  //cuentas: Cuenta[] = [{ id_cuenta: 0, numero: 0, nombre: '', tipo: '', tipo_detalle: '', descripcion: '', saldo: 0, divisa: '', fecha_registro: new Date('01/01/2000') }];
  //nombreCuentas: string[] = this.cuentaService.nombreCuentas();

  proveedores: Proveedor[] = this.proveedorService.allProveedores();


  Columns: string[] = ['numero_linea', 'cuenta', 'debito', 'credito', 'descripcion', 'impuesto', 'fecha_emision_factura', 'proveedor', 'eliminar'];




  //////////////////////////////EDI-TABLE///////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






  constructor(private dateAdapter: DateAdapter<Date>, private asientoService:AsientoService, private cuentaService: CuentaService, private router: Router, private proveedorService: ProveedorService, public dialog: MatDialog) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }

  ngOnInit(): void {
    let asientos: Asiento[] = [];
    let cuentas_aux: Cuenta[] = [];
    this.cuentas = [];
    let cuenta_aux: Cuenta = { id_cuenta: 0, numero: 0, nombre: '', tipo: '', tipo_detalle: '', descripcion: '', saldo: 0, divisa: '', fecha_registro: new Date('01/01/2000') };


    this.cuentaService.getCuentas().subscribe((data: Cuenta[]) => {
      cuentas_aux = data as Cuenta[]
      for (let cuenta of cuentas_aux) {

        
        cuenta_aux.id_cuenta = cuenta.id_cuenta;
        cuenta_aux.numero = cuenta.numero;
        cuenta_aux.nombre = cuenta.nombre;
        cuenta_aux.tipo = cuenta.tipo;
        cuenta_aux.tipo_detalle = cuenta.tipo_detalle;
        cuenta_aux.descripcion = cuenta.descripcion;
        cuenta_aux.saldo = cuenta.saldo;
        cuenta_aux.divisa = cuenta.divisa;
        cuenta_aux.fecha_registro = cuenta.fecha_registro;

        this.cuentas.push(cuenta_aux);
      }
    });

    this.asientoService.getAsientos().subscribe((data: Asiento[]) => {
      asientos = data as Asiento[]
      for (let asiento of asientos) {
        this.consecutivo_asiento += 1;
      }
    });
  }

  toDashboard() {
    this.router.navigate(['/dashboard']);
  }

  toAllAsientos() {
    this.router.navigate(['/allasientos']);
  }

  toAudit() {
    this.router.navigate(['/audit']);
  }

  reloadPage(){
    this.router.navigate(['/newasiento']);
  }

  guardarCerrar(){
    this.sendAsiento();
    this.toDashboard();
  }

  guardarCrear(){
    this.sendAsiento();
    this.reloadPage();
  }

  setDivisa(divisa: string){
    this.divisa = divisa;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////EDI-TABLE///////////////////////////////////////////////////////////////////////////////


  sendAsiento() {
    let Asiento: Asiento = { numero: this.consecutivo_asiento, fecha_creacion: this.today, divisa: this.divisa };
    let lineaAsiento: LineaAsiento = { numero_asiento: 0, numero_linea: 0, id_cuenta: 0, debito: 0, credito: 0, descripcion: '', impuesto: '', fecha_factura: this.defaultDate, proveedor: '' };
    this.lineasAsiento = [];
    for (let row of this.AsientoDataGraph) {
      
      lineaAsiento.numero_asiento = this.consecutivo_asiento;
      lineaAsiento.numero_linea = row.numero_linea;
      lineaAsiento.id_cuenta = +row.cuenta;
      lineaAsiento.debito = row.debito_cantidad;
      lineaAsiento.credito = row.credito_cantidad;
      lineaAsiento.descripcion = row.descripcion;
      lineaAsiento.impuesto = row.impuesto;
      lineaAsiento.fecha_factura = row.fecha_emision_factura;
      lineaAsiento.proveedor = row.proveedor;

      this.lineasAsiento.push(lineaAsiento);

      this.asientoService.addLineaAsiento(lineaAsiento).subscribe(data => {
        //this.toastr.success("linea del asiento "+lineaAsiento.numero_linea+" se ha guardado");
      });
      
      lineaAsiento = { numero_asiento: 0, numero_linea: 0, id_cuenta: 0, debito: 0, credito: 0, descripcion: '', impuesto: '', fecha_factura: this.defaultDate, proveedor: '' };
    
    }
    //console.log(this.lineasAsiento);
    //console.log(this.AsientoDataGraph);

      //logica para hacer post
      //
      

      this.asientoService.addAsiento(Asiento).subscribe(data => {
        //this.toastr.success("asiento "+this.consecutivo_asiento+" se ha guardado");
      });
  }




  getCuentas() {
    let lista: Cuenta[] = [];
    this.cuentas = [];
    let cuenta_aux: Cuenta = { id_cuenta: 0, numero: 0, nombre: '', tipo: '', tipo_detalle: '', descripcion: '', saldo: 0, divisa: '', fecha_registro: new Date('01/01/2000') };


    this.cuentaService.getCuentas().subscribe((data: Cuenta[]) => {
      lista = data as Cuenta[]
      for (let cuenta of lista) {

        cuenta_aux.id_cuenta = cuenta.id_cuenta,
        this.cuentas.push(cuenta);
      }
    });
    console.log(cuenta_aux.id_cuenta);
    return this.cuentas;
  }


  openNewCuenta(): void {
    this.dialog.open(NewCuentaComponent);
  }

  

  addNewRows(more_rows: number) {
    let debito: number = 0;
    let credito: number = 0;
    let deb_deshabilitado: boolean = false;
    let cred_deshabilitado: boolean = false;

    if (this.diferenciaDC > 0) {
      credito = this.diferenciaDC;
      deb_deshabilitado = true;
    }
    else if (this.diferenciaDC < 0) {
      debito = -(this.diferenciaDC);
      cred_deshabilitado = true;
    }

    let cuadrar_asiento: number = this.AsientoDataGraph.length;

    for (let i = 0; i < more_rows; i++) {
      let newRow: LineaAsientoGraph = { numero_linea: (this.AsientoDataGraph.length + 1), cuenta: '', debito_cantidad: 0, debito_deshabilitado: false, credito_cantidad: 0, credito_deshabilitado: false, descripcion: '', impuesto: '', fecha_emision_factura: this.defaultDate, proveedor: '' };
      this.AsientoDataGraph.push(newRow);
    }
    this.AsientoDataGraph[cuadrar_asiento].debito_cantidad = debito;
    this.AsientoDataGraph[cuadrar_asiento].debito_deshabilitado = deb_deshabilitado;
    this.AsientoDataGraph[cuadrar_asiento].credito_cantidad = credito;
    this.AsientoDataGraph[cuadrar_asiento].credito_deshabilitado = cred_deshabilitado;

    this.dataSource = new MatTableDataSource<LineaAsientoGraph>(this.AsientoDataGraph);
    //this.dataSource.paginator = this.paginator;
    this.more_rows = 1;

    this.suma_creditos();
    this.suma_debitos();
  }

  addNewRow() {
    let debito: number = 0;
    let credito: number = 0;
    let deb_deshabilitado: boolean = false;
    let cred_deshabilitado: boolean = false;

    if (this.diferenciaDC > 0) {
      credito = this.diferenciaDC;
      deb_deshabilitado = true;
    }
    else if (this.diferenciaDC < 0) {
      debito = -(this.diferenciaDC);
      cred_deshabilitado = true;
    }

    let newRow: LineaAsientoGraph = { numero_linea: (this.AsientoDataGraph.length + 1), cuenta: '', debito_cantidad: debito, debito_deshabilitado: deb_deshabilitado, credito_cantidad: credito, credito_deshabilitado: cred_deshabilitado, descripcion: '', impuesto: '', fecha_emision_factura: this.defaultDate, proveedor: '' };
    this.AsientoDataGraph.push(newRow);
    this.dataSource = new MatTableDataSource<LineaAsientoGraph>(this.AsientoDataGraph);
    //this.dataSource.paginator = this.paginator;

    this.suma_creditos();
    this.suma_debitos();
  }

  deleteRow(rowNum: string) {
    if (this.AsientoDataGraph.length == 1) {
      this.AsientoDataGraph.pop();
      this.totalCreditos = 0;
      this.totalDebitos = 0;
      this.diferenciaDC = 0;
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
    //this.dataSource.paginator = this.paginator;

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

        if (newEmptyRow == 1) {
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

  setCuenta(id_cuenta: number, rowNum: string) {
    let cuenta: string = id_cuenta.toString();
    let index: number = +rowNum - 1;
    if (this.AsientoDataGraph[index].fecha_emision_factura != this.defaultDate && this.AsientoDataGraph[index].descripcion != '' && this.AsientoDataGraph[index].impuesto != '' && this.AsientoDataGraph[index].proveedor != '') {
      if (((this.AsientoDataGraph[index].debito_cantidad != 0) && (this.AsientoDataGraph[index].credito_cantidad == 0)) || ((this.AsientoDataGraph[index].debito_cantidad == 0) && (this.AsientoDataGraph[index].credito_cantidad != 0))) {

        this.AsientoDataGraph[index].cuenta = cuenta;

        let newEmptyRow: number = 1;
        for (let row of this.AsientoDataGraph) {
          if ((row.proveedor == '' || row.impuesto == '' || row.descripcion == '' || row.fecha_emision_factura == this.defaultDate) || (row.credito_cantidad == 0 && row.debito_cantidad == 0)) {
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
    if (this.AsientoDataGraph[index].fecha_emision_factura != this.defaultDate && this.AsientoDataGraph[index].descripcion != '' && this.AsientoDataGraph[index].impuesto != '' && this.AsientoDataGraph[index].cuenta != '') {
      if (((this.AsientoDataGraph[index].debito_cantidad != 0) && (this.AsientoDataGraph[index].credito_cantidad == 0)) || ((this.AsientoDataGraph[index].debito_cantidad == 0) && (this.AsientoDataGraph[index].credito_cantidad != 0))) {

        this.AsientoDataGraph[index].proveedor = proveedor;
        //this.addNewRow();


        let newEmptyRow: number = 1;
        for (let row of this.AsientoDataGraph) {
          if ((row.cuenta == '' || row.impuesto == '' || row.descripcion == '' || row.fecha_emision_factura == this.defaultDate) || (row.credito_cantidad == 0 && row.debito_cantidad == 0)) {
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
    if (this.AsientoDataGraph[index].fecha_emision_factura != this.defaultDate && this.AsientoDataGraph[index].descripcion != '' && this.AsientoDataGraph[index].proveedor != '' && this.AsientoDataGraph[index].cuenta != '') {
      if (((this.AsientoDataGraph[index].debito_cantidad != 0) && (this.AsientoDataGraph[index].credito_cantidad == 0)) || ((this.AsientoDataGraph[index].debito_cantidad == 0) && (this.AsientoDataGraph[index].credito_cantidad != 0))) {

        this.AsientoDataGraph[index].impuesto = impuesto;
        //this.addNewRow();


        let newEmptyRow: number = 1;
        for (let row of this.AsientoDataGraph) {
          if ((row.cuenta == '' || row.proveedor == '' || row.descripcion == '' || row.fecha_emision_factura == this.defaultDate) || (row.credito_cantidad == 0 && row.debito_cantidad == 0)) {
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
    if (this.AsientoDataGraph[index].fecha_emision_factura != this.defaultDate && this.AsientoDataGraph[index].impuesto != '' && this.AsientoDataGraph[index].proveedor != '' && this.AsientoDataGraph[index].cuenta != '') {
      if (((this.AsientoDataGraph[index].debito_cantidad != 0) && (this.AsientoDataGraph[index].credito_cantidad == 0)) || ((this.AsientoDataGraph[index].debito_cantidad == 0) && (this.AsientoDataGraph[index].credito_cantidad != 0))) {

        this.AsientoDataGraph[index].descripcion = descripcion;

        let newEmptyRow: number = 1;
        for (let row of this.AsientoDataGraph) {
          if ((row.cuenta == '' || row.proveedor == '' || row.impuesto == '' || row.fecha_emision_factura == this.defaultDate) || (row.credito_cantidad == 0 && row.debito_cantidad == 0)) {
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

    if ((+debito == 0) && (this.AsientoDataGraph[index].credito_cantidad == 0 || this.AsientoDataGraph[index].credito_cantidad == null)) {

      //this.AsientoDataGraph[index].debito_cantidad = +debito;
      this.AsientoDataGraph[index].debito_cantidad = 0;

      this.AsientoDataGraph[index].debito_deshabilitado = false;
      this.AsientoDataGraph[index].credito_deshabilitado = false;

      //this.suma_debitos();
    }

    else if (this.AsientoDataGraph[index].fecha_emision_factura != this.defaultDate && this.AsientoDataGraph[index].descripcion != '' && this.AsientoDataGraph[index].impuesto != '' && this.AsientoDataGraph[index].proveedor != '' && this.AsientoDataGraph[index].cuenta != '') {
      if (this.AsientoDataGraph[index].credito_cantidad == 0 || this.AsientoDataGraph[index].credito_cantidad == null) {
        this.AsientoDataGraph[index].debito_cantidad = +debito;

        this.AsientoDataGraph[index].debito_deshabilitado = false;
        this.AsientoDataGraph[index].credito_deshabilitado = true;


        let newEmptyRow: number = 1;
        for (let row of this.AsientoDataGraph) {
          if ((row.cuenta == '' || row.proveedor == '' || row.impuesto == '' || row.fecha_emision_factura == this.defaultDate)) {
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
      if (this.AsientoDataGraph[index].credito_cantidad == 0 || this.AsientoDataGraph[index].credito_cantidad == null) {
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

    if ((+credito == 0) && (this.AsientoDataGraph[index].debito_cantidad == 0 || this.AsientoDataGraph[index].debito_cantidad == null)) {

      //this.AsientoDataGraph[index].credito_cantidad = +credito;
      this.AsientoDataGraph[index].credito_cantidad = 0;

      this.AsientoDataGraph[index].debito_deshabilitado = false;
      this.AsientoDataGraph[index].credito_deshabilitado = false;
    }
    else if (this.AsientoDataGraph[index].fecha_emision_factura != this.defaultDate && this.AsientoDataGraph[index].descripcion != '' && this.AsientoDataGraph[index].impuesto != '' && this.AsientoDataGraph[index].proveedor != '' && this.AsientoDataGraph[index].cuenta != '') {
      if (this.AsientoDataGraph[index].debito_cantidad == 0 || this.AsientoDataGraph[index].debito_cantidad == null) {
        this.AsientoDataGraph[index].credito_cantidad = +credito;

        this.AsientoDataGraph[index].debito_deshabilitado = true;
        this.AsientoDataGraph[index].credito_deshabilitado = false;


        let newEmptyRow: number = 1;
        for (let row of this.AsientoDataGraph) {
          if ((row.cuenta == '' || row.proveedor == '' || row.impuesto == '' || row.fecha_emision_factura == this.defaultDate)) {
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
      if (this.AsientoDataGraph[index].debito_cantidad == 0 || this.AsientoDataGraph[index].debito_cantidad == null) {
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




  //////////////////////////////EDI-TABLE///////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



}


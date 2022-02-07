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
export class EdiTableComponent{
  AsientoData: LineaAsiento[] = [
    { numero: '1', cuenta: '', debito: '', credito: '', descripcion: '', impuesto: '', proveedor: '', fechabanco: ''}
  ];
  

  cuenta:string='';
  proveedor:string='';
  debito:string='';
  credito:string='';
  descripcion:string='';
  impuesto:string='';
  fechabanco:string='';
  cuentaControl = this.cuentaService.getControl();
  proveedorControl = this.proveedorService.getControl();
  cuentas: Cuenta[] = this.cuentaService.allCuentas();
  proveedores: Proveedor[] = this.proveedorService.allProveedores();
  dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  Columns: string[] = ['numero', 'cuenta', 'debito', 'credito', 'descripcion', 'impuesto', 'proveedor', 'fechabanco', 'accion'];
  
  constructor(private cuentaService:CuentaService, private proveedorService:ProveedorService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  addNewRow(){
    let newRow: LineaAsiento = { numero: (this.AsientoData.length+1).toString(), cuenta: '', debito: '', credito: '', descripcion: '', impuesto: '', proveedor: '', fechabanco: ''};
    this.AsientoData.push(newRow);
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
    this.dataSource.paginator = this.paginator;
  }
  deleteRow(){
    this.AsientoData.pop();
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
    this.dataSource.paginator = this.paginator;
  }

  setFechabanco(event: { value: any; }, rowNum:string){
    let index:number = +rowNum-1
    let fb:Date = event.value;
    if(this.proveedor!='' && this.impuesto!='' && this.cuenta!=''){
      if(this.debito!='' || this.credito!=''){
        //let newRow: LineaAsiento = { numero: 'x', cuenta: this.titular, debito: this.debito, credito: this.credito, descripcion: this.descripcion, impuesto: this.impuesto, proveedor: this.proveedor, fechabanco: fb.toString()};
        this.AsientoData[index].cuenta = this.cuenta;
        this.AsientoData[index].debito = this.debito;
        this.AsientoData[index].credito = this.credito;
        this.AsientoData[index].descripcion = this.descripcion;
        this.AsientoData[index].impuesto = this.impuesto;
        this.AsientoData[index].proveedor = this.proveedor;
        this.AsientoData[index].fechabanco = fb.toString();


        //this.AsientoData.push(newRow); 
        this.cuenta='';
        this.proveedor='';
        this.debito='';
        this.credito='';
        this.descripcion='';
        this.impuesto='';
        this.fechabanco='';
        this.addNewRow();
      }
      else{
        this.fechabanco = fb.toString();
      }
    }
    else{
      this.fechabanco = fb.toString();
    }  
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setCuenta(cuenta: string, rowNum:string){
    let index:number = +rowNum-1
    if(this.proveedor!='' && this.impuesto!='' && this.fechabanco!=''){
      if(this.debito!='' || this.credito!=''){
        this.AsientoData[index].cuenta = cuenta;
        this.AsientoData[index].debito = this.debito;
        this.AsientoData[index].credito = this.credito;
        this.AsientoData[index].descripcion = this.descripcion;
        this.AsientoData[index].impuesto = this.impuesto;
        this.AsientoData[index].proveedor = this.proveedor;
        this.AsientoData[index].fechabanco = this.fechabanco;
        //let newRow: LineaAsiento = { numero: 'x', cuenta: cuenta, debito: this.debito, credito: this.credito, descripcion: this.descripcion, impuesto: this.impuesto, proveedor: this.proveedor, fechabanco: this.fechabanco};
        //this.AsientoData.pop();
        //this.AsientoData.push(newRow); 
        this.cuenta='';
        this.proveedor='';
        this.debito='';
        this.credito='';
        this.descripcion='';
        this.impuesto='';
        this.fechabanco='';
        this.addNewRow();
      }
      else{
        this.cuenta=cuenta;
      } 
    }
    else{
      this.cuenta=cuenta;
    }  
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setProveedor(proveedor: string, rowNum:string){
    let index:number = +rowNum-1
    if(this.cuenta!='' && this.impuesto!='' && this.fechabanco!=''){
      if(this.debito!='' || this.credito!=''){
        this.AsientoData[index].cuenta = this.cuenta;
        this.AsientoData[index].debito = this.debito;
        this.AsientoData[index].credito = this.credito;
        this.AsientoData[index].descripcion = this.descripcion;
        this.AsientoData[index].impuesto = this.impuesto;
        this.AsientoData[index].proveedor = proveedor;
        this.AsientoData[index].fechabanco = this.fechabanco;
        //let newRow: LineaAsiento = { numero: 'x', cuenta: this.titular, debito: this.debito, credito: this.credito, descripcion: this.descripcion, impuesto: this.impuesto, proveedor: proveedor, fechabanco: this.fechabanco};
        //this.AsientoData.pop();
        //this.AsientoData.push(newRow); 
        this.cuenta='';
        this.proveedor='';
        this.debito='';
        this.credito='';
        this.descripcion='';
        this.impuesto='';
        this.fechabanco='';
        this.addNewRow();
      }
      else{
        this.proveedor=proveedor;
      }
    }
    else{
      this.proveedor=proveedor;
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setImpuesto(impuesto:string, rowNum:string){
    let index:number = +rowNum-1
    if(this.cuenta!='' && this.proveedor!='' && this.fechabanco!=''){
      if(this.debito!='' || this.credito!=''){
        this.AsientoData[index].cuenta = this.cuenta;
        this.AsientoData[index].debito = this.debito;
        this.AsientoData[index].credito = this.credito;
        this.AsientoData[index].descripcion = this.descripcion;
        this.AsientoData[index].impuesto = impuesto;
        this.AsientoData[index].proveedor = this.proveedor;
        this.AsientoData[index].fechabanco = this.fechabanco;
        //let newRow: LineaAsiento = { numero: 'x', cuenta: this.titular, debito: this.debito, credito: this.credito, descripcion: this.descripcion, impuesto: impuesto, proveedor: this.proveedor, fechabanco: this.fechabanco};
        //this.AsientoData.pop();
        //this.AsientoData.push(newRow); 
        this.cuenta='';
        this.proveedor='';
        this.debito='';
        this.credito='';
        this.descripcion='';
        this.impuesto='';
        this.fechabanco='';
        this.addNewRow();
      }
      else{
        this.impuesto=impuesto;
      }
    }
    else{
      this.impuesto=impuesto;
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setDescripcion(descripcion:string, rowNum:string){
    let index:number = +rowNum-1
    if(this.cuenta!='' && this.proveedor!='' && this.fechabanco!='' && this.impuesto!=''){
      if(this.debito!='' || this.credito!=''){
        //let newRow: LineaAsiento = { numero: 'x', cuenta: this.titular, debito: this.debito, credito: this.credito, descripcion: descripcion, impuesto: this.impuesto, proveedor: this.proveedor, fechabanco: this.fechabanco};
        //this.AsientoData.pop();
        //this.AsientoData.push(newRow); 
        this.AsientoData[index].cuenta = this.cuenta;
        this.AsientoData[index].debito = this.debito;
        this.AsientoData[index].credito = this.credito;
        this.AsientoData[index].descripcion = descripcion;
        this.AsientoData[index].impuesto = this.impuesto;
        this.AsientoData[index].proveedor = this.proveedor;
        this.AsientoData[index].fechabanco = this.fechabanco;
        this.cuenta='';
        this.proveedor='';
        this.debito='';
        this.credito='';
        this.descripcion='';
        this.impuesto='';
        this.fechabanco='';
        this.addNewRow();
      }
      else{
        this.descripcion=descripcion;
      }
    }
    else{
      this.descripcion=descripcion;
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setDebito(debito:string, rowNum:string){
    let index:number = +rowNum-1
    if(this.cuenta!='' && this.proveedor!='' && this.fechabanco!='' && this.impuesto!=''){
      if(this.credito==''){
        this.AsientoData[index].cuenta = this.cuenta;
        this.AsientoData[index].debito = debito;
        this.AsientoData[index].credito = this.credito;
        this.AsientoData[index].descripcion = this.descripcion;
        this.AsientoData[index].impuesto = this.impuesto;
        this.AsientoData[index].proveedor = this.proveedor;
        this.AsientoData[index].fechabanco = this.fechabanco;
        //let newRow: LineaAsiento = { numero: 'x', cuenta: this.titular, debito: debito, credito: this.credito, descripcion: this.descripcion, impuesto: this.impuesto, proveedor: this.proveedor, fechabanco: this.fechabanco};
        //this.AsientoData.pop();
        //this.AsientoData.push(newRow); 
        this.cuenta='';
        this.proveedor='';
        this.debito='';
        this.credito='';
        this.descripcion='';
        this.impuesto='';
        this.fechabanco='';
        this.addNewRow();
      }
      else{
        this.debito='';
        console.log('la fila no puede tener credito y debito, solo 1');
      }
    }
    else{
      if(this.credito==''){
      this.debito=debito;
      }
      else{
        this.debito='';
        console.log('la fila no puede tener credito y debito, solo 1');
      }
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setCredito(credito:string, rowNum:string){
    let index:number = +rowNum-1
    if(this.cuenta!='' && this.proveedor!='' && this.fechabanco!='' && this.impuesto!=''){
      if(this.debito==''){
        this.AsientoData[index].cuenta = this.cuenta;
        this.AsientoData[index].debito = this.debito;
        this.AsientoData[index].credito = credito;
        this.AsientoData[index].descripcion = this.descripcion;
        this.AsientoData[index].impuesto = this.impuesto;
        this.AsientoData[index].proveedor = this.proveedor;
        this.AsientoData[index].fechabanco = this.fechabanco;
        //let newRow: LineaAsiento = { numero: 'x', cuenta: this.titular, debito: this.debito, credito: credito, descripcion: this.descripcion, impuesto: this.impuesto, proveedor: this.proveedor, fechabanco: this.fechabanco};
        //this.AsientoData.pop();
        //this.AsientoData.push(newRow); 
        this.cuenta='';
        this.proveedor='';
        this.debito='';
        this.credito='';
        this.descripcion='';
        this.impuesto='';
        this.fechabanco='';
        this.addNewRow();
      }
      else{
        this.credito='';
        console.log('la fila no puede tener credito y debito, solo 1');
      }
    }
    else{
      if(this.debito==''){
        this.credito=credito;
      }
      else{
        console.log('la fila no puede tener credito y debito, solo 1');
        this.credito='';
      }
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  x(){
    //this.addNewRow();
    console.log(this.AsientoData);
  }
}

import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cuenta } from 'src/app/Models/Cuenta';
import { LineaAsiento } from 'src/app/Models/LineaAsiento';
import { Proveedor } from 'src/app/Models/Proveedor';
import { CuentaService } from 'src/app/Services/Cuenta/cuenta.service';
import { ProveedorService } from 'src/app/Services/Proveedor/proveedor.service';

const AsientoData: LineaAsiento[] = [
  { numero: '1', cuenta: '', debito: '', credito: '', descripcion: '', impuesto: '', proveedor: '', fechabanco: ''}
];

@Component({
  selector: 'app-edi-table',
  templateUrl: './edi-table.component.html',
  styleUrls: ['./edi-table.component.scss']
})
export class EdiTableComponent{

  titular:string='';
  proveedor:string='';
  debito:string='';
  credito:string='';
  descripcion:string='';
  impuesto:string='';
  fechabanco:string='';
  cuentaControl = new FormControl('', Validators.required);
  proveedorControl = this.proveedorService.getControl();
  cuentas: Cuenta[] = this.cuentaService.allCuentas();
  proveedores: Proveedor[] = this.proveedorService.allProveedores();
  dataSource = new MatTableDataSource<LineaAsiento>(AsientoData);
  Columns: string[] = ['numero', 'cuenta', 'debito', 'credito', 'descripcion', 'impuesto', 'proveedor', 'fechabanco', 'accion'];
  
  constructor(private cuentaService:CuentaService, private proveedorService:ProveedorService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  x(){
    let newRow: LineaAsiento = { numero: 'x', cuenta: 'xyz', debito: 'xyz', credito: 'xyz', descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book', impuesto: 'xyz', proveedor: '', fechabanco: ''};
    AsientoData.push(newRow);
    this.dataSource = new MatTableDataSource<LineaAsiento>(AsientoData);
    this.dataSource.paginator = this.paginator;
  }
  y(){
    AsientoData.pop();
    this.dataSource = new MatTableDataSource<LineaAsiento>(AsientoData);
    this.dataSource.paginator = this.paginator;
  }

  setCuenta(cuenta: string){
    if(this.proveedor!='' && this.impuesto!='' && this.fechabanco!=''){
      if(this.debito!='' || this.credito!=''){
        let newRow: LineaAsiento = { numero: 'x', cuenta: cuenta, debito: this.debito, credito: this.credito, descripcion: this.descripcion, impuesto: this.impuesto, proveedor: this.proveedor, fechabanco: this.fechabanco};
        AsientoData.pop();
        AsientoData.push(newRow); 
        this.titular='';
        this.proveedor='';
        this.debito='';
        this.credito='';
        this.descripcion='';
        this.impuesto='';
        this.fechabanco='';
        console.log(1);
      }
    }
    else{
      this.titular=cuenta;
      console.log(2);
    }  
    this.dataSource = new MatTableDataSource<LineaAsiento>(AsientoData);
    console.log('debito '+this.debito);
  }

  setProveedor(proveedor: string){
    if(this.titular!='' && this.impuesto!='' && this.fechabanco!=''){
      if(this.debito!='' || this.credito!=''){
        let newRow: LineaAsiento = { numero: 'x', cuenta: this.titular, debito: this.debito, credito: this.credito, descripcion: this.descripcion, impuesto: this.impuesto, proveedor: proveedor, fechabanco: this.fechabanco};
        AsientoData.pop();
        AsientoData.push(newRow); 
        this.titular='';
        this.proveedor='';
        this.debito='';
        this.credito='';
        this.descripcion='';
        this.impuesto='';
        this.fechabanco='';
        console.log(4);
      }
    }
    else{
      this.proveedor=proveedor;
      console.log(5);
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(AsientoData);
    console.log(6);
  }
}

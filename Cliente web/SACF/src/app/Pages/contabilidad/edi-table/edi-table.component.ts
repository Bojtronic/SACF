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
  

  //cuenta:string='';
  //proveedor:string='';
  //debito:string='';
  //credito:string='';
  //descripcion:string='';
  //impuesto:string='';
  //fechabanco:string='';
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
    if(this.AsientoData[index].proveedor!='' && this.AsientoData[index].impuesto!='' && this.AsientoData[index].cuenta!=''){
      if(this.AsientoData[index].debito!='' || this.AsientoData[index].credito!=''){
       
        this.AsientoData[index].fechabanco = fb.toString();

        let newEmptyRow:number=1;
        for (let row of this.AsientoData){
          if((row.cuenta=='' || row.proveedor=='' || row.impuesto=='' || row.fechabanco=='') || (row.credito=='' && row.debito=='')){
            newEmptyRow=0; 
          }
        }
        if(newEmptyRow==1){
          this.addNewRow();
        }
      }
      else{
        this.AsientoData[index].fechabanco = fb.toString();
      }
    }
    else{
      this.AsientoData[index].fechabanco = fb.toString();
    }  
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setCuenta(cuenta: string, rowNum:string){
    let index:number = +rowNum-1
    if(this.AsientoData[index].proveedor!='' && this.AsientoData[index].impuesto!='' && this.AsientoData[index].fechabanco!=''){
      if(this.AsientoData[index].debito!='' || this.AsientoData[index].credito!=''){
        this.AsientoData[index].cuenta=cuenta;

        let newEmptyRow:number=1;
        for (let row of this.AsientoData){
          if((row.cuenta=='' || row.proveedor=='' || row.impuesto=='' || row.fechabanco=='') || (row.credito=='' && row.debito=='')){
            newEmptyRow=0; 
          }
        }
        if(newEmptyRow==1){
          this.addNewRow();
        }
      }
      else{
        this.AsientoData[index].cuenta=cuenta;
      } 
    }
    else{
      this.AsientoData[index].cuenta=cuenta;
    }  
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setProveedor(proveedor: string, rowNum:string){
    let index:number = +rowNum-1
    if(this.AsientoData[index].cuenta!='' && this.AsientoData[index].impuesto!='' && this.AsientoData[index].fechabanco!=''){
      if(this.AsientoData[index].debito!='' || this.AsientoData[index].credito!=''){
        this.AsientoData[index].proveedor = proveedor;

        let newEmptyRow:number=1;
        for (let row of this.AsientoData){
          if((row.cuenta=='' || row.proveedor=='' || row.impuesto=='' || row.fechabanco=='') || (row.credito=='' && row.debito=='')){
            newEmptyRow=0; 
          }
        }
        if(newEmptyRow==1){
          this.addNewRow();
        }
      }
      else{
        this.AsientoData[index].proveedor=proveedor;
      }
    }
    else{
      this.AsientoData[index].proveedor=proveedor;
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setImpuesto(impuesto:string, rowNum:string){
    let index:number = +rowNum-1
    if(this.AsientoData[index].cuenta!='' && this.AsientoData[index].proveedor!='' && this.AsientoData[index].fechabanco!=''){
      if(this.AsientoData[index].debito!='' || this.AsientoData[index].credito!=''){
        this.AsientoData[index].impuesto = impuesto;

        let newEmptyRow:number=1;
        for (let row of this.AsientoData){
          if((row.cuenta=='' || row.proveedor=='' || row.impuesto=='' || row.fechabanco=='') || (row.credito=='' && row.debito=='')){
            newEmptyRow=0; 
          }
        }
        if(newEmptyRow==1){
          this.addNewRow();
        }
      }
      else{
        this.AsientoData[index].impuesto=impuesto;
      }
    }
    else{
      this.AsientoData[index].impuesto=impuesto;
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setDescripcion(descripcion:string, rowNum:string){
    let index:number = +rowNum-1
    if(this.AsientoData[index].cuenta!='' && this.AsientoData[index].proveedor!='' && this.AsientoData[index].fechabanco!='' && this.AsientoData[index].impuesto!=''){
      if(this.AsientoData[index].debito!='' || this.AsientoData[index].credito!=''){
        this.AsientoData[index].descripcion = descripcion;

        let newEmptyRow:number=1;
        for (let row of this.AsientoData){
          if((row.cuenta=='' || row.proveedor=='' || row.impuesto=='' || row.fechabanco=='') || (row.credito=='' && row.debito=='')){
            newEmptyRow=0; 
          }
        }
        if(newEmptyRow==1){
          this.addNewRow();
        } 
      }
      else{
        this.AsientoData[index].descripcion=descripcion;
      }
    }
    else{
      this.AsientoData[index].descripcion=descripcion;
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setDebito(debito:string, rowNum:string){
    let index:number = +rowNum-1
    if(this.AsientoData[index].cuenta!='' && this.AsientoData[index].proveedor!='' && this.AsientoData[index].fechabanco!='' && this.AsientoData[index].impuesto!=''){
      if(this.AsientoData[index].credito==''){
        this.AsientoData[index].debito = debito;

        let newEmptyRow:number=1;
        for (let row of this.AsientoData){
          if((row.cuenta=='' || row.proveedor=='' || row.impuesto=='' || row.fechabanco=='') || (row.credito=='' && row.debito=='')){
            newEmptyRow=0; 
          }
        }
        if(newEmptyRow==1){
          this.addNewRow();
        }
        
      }
      else{
        this.AsientoData[index].debito='';
        console.log('la fila no puede tener credito y debito, solo 1');
      }
    }
    else{
      if(this.AsientoData[index].credito==''){
        this.AsientoData[index].debito=debito;
      }
      else{
        this.AsientoData[index].debito='';
        console.log('la fila no puede tener credito y debito, solo 1');
      }
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  setCredito(credito:string, rowNum:string){
    let index:number = +rowNum-1
    if(this.AsientoData[index].cuenta!='' && this.AsientoData[index].proveedor!='' && this.AsientoData[index].fechabanco!='' && this.AsientoData[index].impuesto!=''){
      if(this.AsientoData[index].debito==''){
        this.AsientoData[index].credito = credito;

        let newEmptyRow:number=1;
        for (let row of this.AsientoData){
          if((row.cuenta=='' || row.proveedor=='' || row.impuesto=='' || row.fechabanco=='') || (row.credito=='' && row.debito=='')){
            newEmptyRow=0; 
          }
        }
        if(newEmptyRow==1){
          this.addNewRow();
        }
      }
      else{
        this.AsientoData[index].credito='';
        console.log('la fila no puede tener credito y debito, solo 1');
      }
    }
    else{
      if(this.AsientoData[index].debito==''){
        this.AsientoData[index].credito=credito;
      }
      else{
        console.log('la fila no puede tener credito y debito, solo 1');
        this.AsientoData[index].credito='';
      }
    }
    this.dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);
  }

  x(){
    //this.addNewRow();
    console.log(this.AsientoData);
  }
}

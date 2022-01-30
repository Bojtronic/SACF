import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Cuenta } from 'src/app/Models/Cuenta';
import { LineaAsiento } from 'src/app/Models/LineaAsiento';
import { Proveedor } from 'src/app/Models/Proveedor';
import { CuentaService } from 'src/app/Services/Cuenta/cuenta.service';
import { ProveedorService } from 'src/app/Services/Proveedor/proveedor.service';

const AsientoData: LineaAsiento[] = [
  { numero: 'x', cuenta: 'x', debito: 'x', credito: 'x', descripcion: 'x', impuesto: 'x', proveedor: 'x', fechabanco: 'x'},
  { numero: 'x', cuenta: 'x', debito: 'x', credito: 'x', descripcion: 'x', impuesto: 'x', proveedor: 'x', fechabanco: 'x'}
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
  Columns: string[] = ['numero', 'cuenta', 'debito', 'credito', 'descripcion', 'impuesto', 'proveedor', 'fechabanco', 'eliminar'];
  
  constructor(private cuentaService:CuentaService, private proveedorService:ProveedorService) { }

  setCuenta(cuenta: string){
    if(this.proveedor==''){
      this.titular=cuenta;
    }
    else if(this.proveedor!='' && this.impuesto!='' && this.fechabanco!=''){
      if(this.debito!='' || this.credito!=''){
        AsientoData.push(); 
      }
      
    }

    
  }
  setProveedor(proveedor: string){
    this.proveedor=proveedor;
  }
  x(x:string){
    console.log(x);
  }

}

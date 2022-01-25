import { Component, Inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Cuenta } from "src/app/Models/Cuenta";
import { LineaAsiento } from "src/app/Models/LineaAsiento";
import { Proveedor } from "src/app/Models/Proveedor";
import { AsientoService } from "src/app/Services/Asiento/asiento.service";
import { CuentaService } from "src/app/Services/Cuenta/cuenta.service";
import { ProveedorService } from "src/app/Services/Proveedor/proveedor.service";


@Component({
  selector: 'app-form-asiento',
  templateUrl: './form-asiento.component.html',
  styleUrls: ['./form-asiento.component.scss']
})
export class FormAsientoComponent{
  //constructor(public dialogRef: MatDialogRef<FormAsientoComponent>) { }
/*
  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
*/
  numlinea: string = '';
  cuenta: string = '';
  debito: string = ''; 
  credito: string = ''; 
  impuesto: string = ''; 
  proveedor: string = ''; 
  descripcion: string = ''; 
  fechabanco: string = '';

  constructor(
    private asientoService:AsientoService,
    private cuentaService:CuentaService, 
    private proveedorService:ProveedorService,
    public dialogRef: MatDialogRef<FormAsientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {numlinea: string}
  ) {
    this.numlinea=data.numlinea;
  }

  addRow(debito: string, credito: string, descripcion: string, impuesto: string, fechabanco: string){
    let numero: string = (this.asientoService.getAllNewRows.length + 1).toString();
    //let newRow: LineaAsiento = this.asientoService.editRow(numero, this.cuenta, debito, credito, descripcion, impuesto, this.proveedor, fecha);
    let newRow: LineaAsiento = {numero: numero, cuenta: this.cuenta, debito: debito, credito: credito, descripcion: descripcion, impuesto: impuesto, proveedor: this.proveedor, fechabanco: fechabanco}
    this.asientoService.addNewRow(newRow);
    this.dialogRef.close();
  }
  

  closeDialog(): void {
    this.dialogRef.close();
  }
  
  proveedorControl = this.proveedorService.getControl();
  cuentaControl = this.cuentaService.getControl();

  proveedores: Proveedor[] = this.proveedorService.allProveedores();
  cuentas: Cuenta[] = this.cuentaService.allCuentas();
  
  setProveedor(proveedor: string){
    this.proveedor = proveedor;
  }

  setCuenta(cuenta: string){
    this.cuenta = cuenta;
  }
}

import { Component, Inject } from "@angular/core";
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
export class FormAsientoComponent {
  numlinea: string = '';
  banco: string = '';
  debito: string = '';
  credito: string = '';
  impuesto: string = '';
  proveedor: string = '';
  descripcion: string = '';
  fechabanco: string = '';

  getDebito(): string {
    return this.debito;
  }
  getCredito(): string {
    return this.credito;
  }
  getImpuesto(): string {
    return this.impuesto;
  }
  getDescripcion(): string {
    return this.descripcion;
  }
  getCuenta(): string {
    return this.banco;
  }
  getProveedor(): string {
    return this.proveedor;
  }
  getFechabanco() {
    return this.fechabanco;
  }
  setProveedor(proveedor: string) {
    this.proveedor = proveedor;
  }
  setCuenta(cuenta: string) {
    this.banco = cuenta;
  }


  constructor(
    private asientoService: AsientoService,
    private cuentaService: CuentaService,
    private proveedorService: ProveedorService,
    public dialogRef: MatDialogRef<FormAsientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { numero: string, cuenta: string, debito: string, credito: string, impuesto: string, proveedor: string, descripcion: string, fechabanco: string }
  ) {
    this.numlinea = data.numero;
    this.banco = data.cuenta;
    this.debito = data.debito;
    this.credito = data.credito;
    this.impuesto = data.impuesto;
    this.proveedor = data.proveedor;
    this.descripcion = data.descripcion;
    this.fechabanco = data.fechabanco;
  }

  /*
  addRow(debito: string, credito: string, descripcion: string, impuesto: string, fechabanco: string){
    let numero: string = (this.asientoService.getAllNewRows.length + 1).toString();
    let newRow: LineaAsiento = {numero: numero, cuenta: this.banco, debito: debito, credito: credito, descripcion: descripcion, impuesto: impuesto, proveedor: this.proveedor, fechabanco: fechabanco}
    this.asientoService.addNewRow(newRow);
    this.dialogRef.close();
  }

  editRow(numero:string, debito:string, credito:string, impuesto:string, descripcion:string, fechabanco:string){
    this.asientoService.editRow(numero, this.getCuenta(), debito, credito, impuesto, this.getProveedor(), descripcion, fechabanco)
    this.dialogRef.close();
  }

  */

  closeDialog(): void {
    this.dialogRef.close();
  }

  proveedorControl = this.proveedorService.getControl();
  cuentaControl = this.cuentaService.getControl();

  proveedores: Proveedor[] = this.proveedorService.allProveedores();
  //cuentas: Cuenta[] = this.cuentaService.allCuentas();

}

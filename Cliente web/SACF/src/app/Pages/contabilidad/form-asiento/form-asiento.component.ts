import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Cuenta } from "src/app/Models/Cuenta";
import { Proveedor } from "src/app/Models/Proveedor";
import { CuentaService } from "src/app/Services/Cuenta/cuenta.service";
import { ProveedorService } from "src/app/Services/Proveedor/proveedor.service";


@Component({
  selector: 'app-form-asiento',
  templateUrl: './form-asiento.component.html',
  styleUrls: ['./form-asiento.component.scss']
})
export class FormAsientoComponent{

  newProveedor: string = '';
  newCuenta: string = '';

  constructor(
    public dialogRef: MatDialogRef<FormAsientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cuenta,
    private cuentaService:CuentaService, 
    private proveedorService:ProveedorService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  proveedorControl = this.proveedorService.getControl();
  cuentaControl = this.cuentaService.getControl();

  proveedores: Proveedor[] = this.proveedorService.allProveedores();
  cuentas: Cuenta[] = this.cuentaService.allCuentas();

  setProveedor(proveedor: string){
    this.newProveedor = proveedor;
  }

  setCuenta(cuenta: string){
    this.newCuenta = cuenta;
  }
}

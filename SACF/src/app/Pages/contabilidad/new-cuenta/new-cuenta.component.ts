import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CuentaService } from 'src/app/Services/Cuenta/cuenta.service';

@Component({
  selector: 'app-new-cuenta',
  templateUrl: './new-cuenta.component.html',
  styleUrls: ['./new-cuenta.component.scss']
})
export class NewCuentaComponent implements OnInit {

  tipoCuenta: string[] = this.cuentaService.getTipos();

  divisas: string[] = this.cuentaService.getDivisas()

  constructor(public dialogRef: MatDialogRef<NewCuentaComponent>, private cuentaService: CuentaService) { }

  ngOnInit(): void {
  }

}

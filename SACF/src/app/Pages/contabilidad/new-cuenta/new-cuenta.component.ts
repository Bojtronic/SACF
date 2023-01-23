import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Cuenta } from 'src/app/Models/Cuenta';
import { CuentaService } from 'src/app/Services/Cuenta/cuenta.service';

@Component({
  selector: 'app-new-cuenta',
  templateUrl: './new-cuenta.component.html',
  styleUrls: ['./new-cuenta.component.scss']
})
export class NewCuentaComponent implements OnInit {

  tipoCuenta: string[] = this.cuentaService.getTipos();

  divisas: string[] = this.cuentaService.getDivisas();

  numero: number = 0;
  nombre: string = '';
  tipo: string = '';
  tipo_detalle: string = '';
  descripcion: string = '';
  saldo: number = 0;
  divisa: string = '';
  fecha_registro: Date = new Date('01-01-2000');

  constructor(public dialogRef: MatDialogRef<NewCuentaComponent>, private cuentaService: CuentaService) { }

  ngOnInit(): void {
  }

  addCuenta(cuenta: Cuenta) {
    this.cuentaService.addCuenta(cuenta).subscribe(data => {
    });
  }

  createCuenta() {
    let cuenta: Cuenta = { numero: this.numero, nombre: this.nombre, tipo: this.tipo, tipo_detalle: this.tipo_detalle, descripcion: this.descripcion, saldo: this.saldo, divisa: this.divisa, fecha_registro: this.fecha_registro };
    this.addCuenta(cuenta);
    //console.log(cuenta);
  }

  setNumero(numero: string) {
    this.numero = +numero;
  }

  setNombre(nombre: string) {
    this.nombre = nombre;
  }

  setTipo(tipo: string) {
    this.tipo = tipo;
  }

  setTipo_detalle(tipo_detalle: string) {
    this.tipo_detalle = tipo_detalle;
  }

  setDescripcion(descripcion: string) {
    this.descripcion = descripcion;
  }

  setSaldo(saldo: string) {
    this.saldo = +saldo;
  }

  setDivisa(divisa: string) {
    this.divisa = divisa;
  }

  setFecha_registro(event: { value: any; }) {
    this.fecha_registro = event.value;
  }

}

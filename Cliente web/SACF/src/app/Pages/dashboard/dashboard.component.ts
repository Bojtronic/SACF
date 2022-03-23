import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class ErrorOfEmptyOrInvalidInput implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isChecked: boolean = false
  fecha: string = "00/00/0000"

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toNewAsiento() { 
    this.router.navigate(['/newasiento']); 
  }
  toAllAsientos() {
    this.router.navigate(['/allasientos']);
  }
  toNewDeposito() {
    this.router.navigate(['/newdeposito']);
  }
  toAllDepositos() {
    this.router.navigate(['/alldepositos']);
  }
  toNewTransferencia() {
    this.router.navigate(['/newtransferencia']);
  }
  toAllTransferencias(){
    this.router.navigate(['/alltransferencias']);
  }
  toAllCuentas() {
    this.router.navigate(['/allcuentas']);
  }
  toCuentasXCobrar() {
    this.router.navigate(['/cuentasxcobrar']);
  }
  toNewCuenta(){
    this.router.navigate(['/newcuenta']);
  }
  toCuentasXPagar(){
    this.router.navigate(['/cuentasxpagar']);
  }
  toNewConciliacion() {
    this.router.navigate(['/newconciliacion']);
  }
  toAllConciliaciones(){
    this.router.navigate(['/allconciliaciones']);
  }
  toInventarios(){
    this.router.navigate(['/inventarios']);
  }
  toReportes(){
    this.router.navigate(['/reportes']);
  }


  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  matcher = new ErrorOfEmptyOrInvalidInput();

}

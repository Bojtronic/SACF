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
  toDeposito() {
    this.router.navigate(['/deposito']);
  }
  toTransferencia() {
    this.router.navigate(['/transferencia']);
  }
  toAllCuentas() {
    this.router.navigate(['/allcuentas']);
  }

  x (){
    console.log("No se ha creado la ruta al componente");
  }

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  matcher = new ErrorOfEmptyOrInvalidInput();

}

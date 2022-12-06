import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/Models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor() { }

  proveedorControl = new FormControl('', Validators.required);

  proveedores: Proveedor[] = [
    {nombre: 'Felix el gato', correo: 'xyz@catmail.com'},
    {nombre: 'Buckethead', correo: 'oioi@metal.com'},
    {nombre: 'Ryan Williams', correo: 'nitrocircus@au.com'},
    {nombre: 'Goku', correo: 'dragonball@anime.com'}
  ];

  allProveedores(){
    return this.proveedores;
  }

  getControl(){
    return this.proveedorControl;
  }
}

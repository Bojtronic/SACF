/*
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Cuenta } from 'src/app/Models/Cuenta';
import { Proveedor } from 'src/app/Models/Proveedor';

@Component({
  selector: 'app-form-asiento',
  templateUrl: './form-asiento.component.html',
  styleUrls: ['./form-asiento.component.scss']
})
export class FormAsientoComponent implements OnInit {
  proveedorControl = new FormControl('', Validators.required);
  cuentaControl = new FormControl('', Validators.required);


  proveedores: Proveedor[] = [
    {nombre: 'Felix el gato', correo: 'xyz@catmail.com'},
    {nombre: 'Buckethead', correo: 'oioi@metal.com'},
    {nombre: 'Ryan Williams', correo: 'nitrocircus@au.com'},
    {nombre: 'Goku', correo: 'dragonball@anime.com'}
  ];
  
  newCuenta: Cuenta = {titular: '', banco: '', descripcion: ''};

  cuentas: Cuenta[] = [
    {titular: 'Mechudin', banco: 'BAC', descripcion: 'cuenta para el vicio'},
    {titular: 'Cory', banco: 'BCR', descripcion: 'cuenta para comida'},
    {titular: 'Alissa', banco: 'Scotiabank', descripcion: 'cuenta para viajes'},
    {titular: 'Simone', banco: 'Cathay', descripcion: 'cuenta para instrumentos'}
  ];

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px' /*,
      data: {name: this.name, animal: this.animal},*/

      /*
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-form-asiento',
  templateUrl: './form-asiento.component.html',
  styleUrls: ['./new-asiento.component.scss']
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

*/
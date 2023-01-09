import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-cuenta',
  templateUrl: './new-cuenta.component.html',
  styleUrls: ['./new-cuenta.component.scss']
})
export class NewCuentaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewCuentaComponent>) { }

  ngOnInit(): void {
  }

}

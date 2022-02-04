import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const Data:string[]=[]
@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {
  dataSource = new MatTableDataSource<string>(Data);

  Columns: string[] = ['fila', 'cuenta_que_paga', 'cuenta_que_cobra', 'divisa', 'monto', 'fecha', 'notas'];

  constructor() { }

  ngOnInit(): void {
  }

}

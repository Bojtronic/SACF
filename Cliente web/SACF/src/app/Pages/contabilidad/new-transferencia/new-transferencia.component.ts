import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

const Data:string[]=[]
@Component({
  selector: 'app-transferencia',
  templateUrl: './new-transferencia.component.html',
  styleUrls: ['./new-transferencia.component.scss']
})
export class NewTransferenciaComponent implements OnInit {
  dataSource = new MatTableDataSource<string>(Data);

  Columns: string[] = ['fila', 'cuenta_que_paga', 'cuenta_que_cobra', 'divisa', 'monto', 'fecha', 'notas'];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toDashboard(){
    this.router.navigate(['/dashboard']);
  }

}

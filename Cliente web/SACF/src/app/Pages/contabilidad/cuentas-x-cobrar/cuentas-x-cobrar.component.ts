import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cuentas-x-cobrar',
  templateUrl: './cuentas-x-cobrar.component.html',
  styleUrls: ['./cuentas-x-cobrar.component.scss']
})
export class CuentasXCobrarComponent implements AfterViewInit {
  clientes: Cliente[] = [
    {codigo: '666', nombre: 'Cliente 1', finca: '1', total: '1000', pendiente: '999'},
    {codigo: '333', nombre: 'Cliente 2', finca: '2', total: '2000', pendiente: '666'},
    {codigo: '999', nombre: 'Cliente 3', finca: '3', total: '3000', pendiente: '333'}
  ]

  dataSource = new MatTableDataSource<Cliente>(this.clientes);
  Columns: string[] = ['codigo', 'nombre', 'finca', 'total', 'pendiente'];
  constructor() { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
}

export interface Cliente {
  codigo: string;
  nombre: string;
  finca: string;
  total: string;
  pendiente: string;
}

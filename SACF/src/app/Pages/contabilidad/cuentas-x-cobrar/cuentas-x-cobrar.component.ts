import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, startWith } from 'rxjs';


export interface User {
  name: string;
}

@Component({
  selector: 'app-cuentas-x-cobrar',
  templateUrl: './cuentas-x-cobrar.component.html',
  styleUrls: ['./cuentas-x-cobrar.component.scss']
})
export class CuentasXCobrarComponent implements AfterViewInit {

  myControl = new FormControl();
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<User[]> | undefined;


  presupuesto: string = "0.0"
  sin_facturar: string = "0.0"
  vencido: string = "0.0"
  facturas_pendientes: string = "0.0"

  clientes: Cliente[] = [
    {codigo: '666', nombre: 'Cliente 1', finca: '1', total: '1000', pendiente: '999'},
    {codigo: '333', nombre: 'Cliente 2', finca: '2', total: '2000', pendiente: '666'},
    {codigo: '999', nombre: 'Cliente 3', finca: '3', total: '3000', pendiente: '333'}
  ]

  dataSource = new MatTableDataSource<Cliente>(this.clientes);
  Columns: string[] = ['codigo', 'nombre', 'finca', 'total', 'pendiente'];
  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

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

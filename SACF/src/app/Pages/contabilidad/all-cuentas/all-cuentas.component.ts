import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cuenta } from 'src/app/Models/Cuenta';
import { CuentaService } from 'src/app/Services/Cuenta/cuenta.service';
import { MatDialog } from '@angular/material/dialog';
import { NewCuentaComponent } from '../new-cuenta/new-cuenta.component';

@Component({
  selector: 'app-all-cuentas',
  templateUrl: './all-cuentas.component.html',
  styleUrls: ['./all-cuentas.component.scss']
})
export class AllCuentasComponent implements AfterViewInit {

  dataSource = new MatTableDataSource<Cuenta>(this.cuentaService.allCuentas());
  Columns: string[] = ['numero', 'nombre', 'tipo', 'detalle', 'descripcion', 'saldo', 'divisa'];

  constructor(private cuentaService: CuentaService, public dialog: MatDialog) { }


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openNewCuenta(): void {
    this.dialog.open(NewCuentaComponent);
  }

}

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
export class AllCuentasComponent implements AfterViewInit, OnInit {

  cuentas: Cuenta[] = [];
  dataSource = new MatTableDataSource<Cuenta>(this.cuentas);
  Columns: string[] = ['numero', 'nombre', 'tipo', 'tipo_detalle', 'descripcion', 'saldo', 'divisa', 'fecha_registro', 'eliminar'];

  constructor(private cuentaService: CuentaService, public dialog: MatDialog) { }


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    let lista: Cuenta[] = [];
    this.cuentaService.getCuentas().subscribe((data: Cuenta[]) => {
      lista = data
      for (let cuenta of lista) {
        this.cuentas.push(cuenta);
      }
      this.dataSource = new MatTableDataSource<Cuenta>(this.cuentas);
    });
  }

  openNewCuenta(): void {
    this.dialog.open(NewCuentaComponent);
  }

  deleteRow(id_cuenta: number) {
    this.cuentaService.deleteCuenta(id_cuenta).subscribe((data) => {
      console.log(data);
    });
  }

}

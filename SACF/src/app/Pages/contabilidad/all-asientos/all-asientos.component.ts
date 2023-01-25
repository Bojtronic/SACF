import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Asiento } from 'src/app/Models/Asiento';
import { LineaAsiento } from 'src/app/Models/LineaAsiento';
import { AsientoService } from 'src/app/Services/Asiento/asiento.service';

@Component({
  selector: 'app-all-asientos',
  templateUrl: './all-asientos.component.html',
  styleUrls: ['./all-asientos.component.scss']
})
export class AllAsientosComponent implements AfterViewInit {

  asientos: Asiento[] = [];
  lineasAsiento: LineaAsiento[] = [];

  /*
  asientos: Asiento[] = [{ numero: 1, fecha_creacion: new Date('01-01-2001') }, { numero: 2, fecha_creacion: new Date('02-02-2002') }];

  lineasAsiento: LineaAsiento[] = [{ numero_asiento: 1, numero_linea: 1, id_cuenta: 'id 1223', debito: 3, credito: 0, descripcion: 'descripcion 1', impuesto: 'tipo de impuesto', fecha_factura: new Date('09-11-2000'), proveedor: 'proveedor 1' },
  { numero_asiento: 1, numero_linea: 2, id_cuenta: 'id 42423', debito: 0, credito: 2, descripcion: 'descripcion 2', impuesto: 'tipo de impuesto', fecha_factura: new Date('11-09-2000'), proveedor: 'proveedor 2' },
  { numero_asiento: 1, numero_linea: 3, id_cuenta: 'id 642', debito: 0, credito: 1, descripcion: 'descripcion 3', impuesto: 'tipo de impuesto', fecha_factura: new Date('03-12-2000'), proveedor: 'proveedor 3' },
  { numero_asiento: 2, numero_linea: 1, id_cuenta: 'id 1853', debito: 75, credito: 0, descripcion: 'descripcion 1', impuesto: 'impuesto', fecha_factura: new Date('07-02-2001'), proveedor: 'proveedor 1' },
  { numero_asiento: 2, numero_linea: 2, id_cuenta: 'id 925721', debito: 0, credito: 75, descripcion: 'descripcion 2', impuesto: 'impuesto', fecha_factura: new Date('06-06-2001'), proveedor: 'proveedor 2' }];
  */


  dataSource_Asientos = new MatTableDataSource<Asiento>(this.asientos);
  dataSource_LineasAsiento = new MatTableDataSource<LineaAsiento>(this.lineasAsiento);

  Columns: string[] = ['numero', 'cuenta', 'debito', 'credito', 'descripcion', 'impuesto', 'fecha_factura', 'proveedor'];



  constructor(private asientoService: AsientoService) { }

  ngOnInit(): void {
    let lista_asiento: Asiento[] = [];
    let lista_lineasAsiento: LineaAsiento[] = [];

    this.asientoService.getAsientos().subscribe((data: Asiento[]) => {
      lista_asiento = data
      for (let asiento of lista_asiento) {
        this.asientos.push(asiento);
      }
      //this.dataSource_Asientos = new MatTableDataSource<Asiento>(this.asientos);
    });


    this.asientoService.getLineasAsiento().subscribe((data: LineaAsiento[]) => {
      lista_lineasAsiento = data
      for (let linea of lista_lineasAsiento) {
        this.lineasAsiento.push(linea);
      }
      //this.dataSource_LineasAsiento = new MatTableDataSource<LineaAsiento>(this.lineasAsiento);
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource_Asientos.paginator = this.paginator;
  }
}


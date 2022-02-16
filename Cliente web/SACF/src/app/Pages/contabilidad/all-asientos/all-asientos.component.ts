import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Asiento } from 'src/app/Models/Asiento';
import { LineaAsiento } from 'src/app/Models/LineaAsiento';
import { AsientoService } from 'src/app/Services/Asiento/asiento.service';

@Component({
  selector: 'app-all-asientos',
  templateUrl: './all-asientos.component.html',
  styleUrls: ['./all-asientos.component.scss']
})
export class AllAsientosComponent implements AfterViewInit{
  AsientoData: LineaAsiento[] = this.asientoService.asientoRows('0');

  dataSource = new MatTableDataSource<LineaAsiento>(this.AsientoData);

  Columns: string[] = ['numero', 'cuenta', 'debito', 'credito', 'descripcion', 'impuesto', 'proveedor', 'fechabanco'];

  constructor(private asientoService: AsientoService) { }

  ngOnInit(): void {
  }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


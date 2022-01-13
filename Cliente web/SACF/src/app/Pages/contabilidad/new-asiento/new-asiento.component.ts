import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Asiento {
  consecutivo: string;
  debitos: string;
  creditos: string;
  descripcion: string;
  nombre: string;
  impuesto: string;
}

const AsientosData: Asiento[] = [
  {consecutivo: '1', debitos: '1000', creditos: '1000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '2', debitos: '2000', creditos: '2000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '3', debitos: '3000', creditos: '3000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '4', debitos: '4000', creditos: '4000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '5', debitos: '5000', creditos: '5000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '6', debitos: '6000', creditos: '6000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '7', debitos: '7000', creditos: '7000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '8', debitos: '8000', creditos: '8000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '9', debitos: '9000', creditos: '9000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '10', debitos: '10000', creditos: '10000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '11', debitos: '11000', creditos: '11000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '12', debitos: '12000', creditos: '12000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '13', debitos: '13000', creditos: '13000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '14', debitos: '14000', creditos: '14000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '15', debitos: '15000', creditos: '15000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '16', debitos: '16000', creditos: '16000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '17', debitos: '17000', creditos: '17000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '18', debitos: '18000', creditos: '18000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '19', debitos: '19000', creditos: '19000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
  {consecutivo: '20', debitos: '20000', creditos: '20000', descripcion: 'H', nombre: 'H', impuesto: 'H'},
];

/*
const nuevo_asiento: Asiento[] = [
  {consecutivo: '', debitos: '', creditos: '', descripcion: '', nombre: '', impuesto: '' }
];
*/

@Component({
  selector: 'app-new-asiento',
  templateUrl: './new-asiento.component.html',
  styleUrls: ['./new-asiento.component.scss']
})



export class NewAsientoComponent implements AfterViewInit{
  
  Columns: string[] = ['consecutivo', 'debitos', 'creditos', 'descripcion', 'nombre', 'impuesto'];
  //dataSource = [''];

  dataSource = new MatTableDataSource<Asiento>(AsientosData);

  constructor(){

  }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  newAsiento(consecutivo: string, debitos: string, creditos: string, descripcion: string, nombre: string, impuesto: string){
    if(consecutivo=='' || debitos=='' || creditos=='' || descripcion=='' || nombre=='' || impuesto==''){
      console.log("Faltan datos");
    }
    else{
      console.log("consecutivo: "+consecutivo);
      console.log("debitos: "+debitos);
      console.log("creditos: "+creditos);
      console.log("descripcion: "+descripcion);
      console.log("nombre: "+nombre);
      console.log("impuesto: "+impuesto);
    }
  }
  
}



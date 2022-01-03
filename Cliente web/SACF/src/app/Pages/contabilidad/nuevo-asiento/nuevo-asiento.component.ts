import { Component } from '@angular/core';

export interface PeriodicElement {
  consecutivo: number;
  debitos: number;
  creditos: number;
  descripcion: string;
  nombre: string;
  impuesto: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {consecutivo: 1, debitos: 1, creditos: 1, descripcion: 'H', nombre: 'nombre', impuesto: 1 }
];

@Component({
  selector: 'app-nuevo-asiento',
  templateUrl: './nuevo-asiento.component.html',
  styleUrls: ['./nuevo-asiento.component.scss']
})



export class NuevoAsientoComponent {
  
  displayedColumns: string[] = ['consecutivo', 'debitos', 'creditos', 'descripcion', 'nombre', 'impuesto'];
  dataSource = ELEMENT_DATA;

  constructor(){

  }

  ngOnInit(): void {
  }
  
}





import { Component } from '@angular/core';

export interface Asiento {
  consecutivo: string;
  debitos: string;
  creditos: string;
  descripcion: string;
  nombre: string;
  impuesto: string;
}

const nuevo_asiento: Asiento[] = [
  {consecutivo: '', debitos: '', creditos: '', descripcion: '', nombre: '', impuesto: '' }
];

@Component({
  selector: 'app-nuevo-asiento',
  templateUrl: './nuevo-asiento.component.html',
  styleUrls: ['./nuevo-asiento.component.scss']
})



export class NuevoAsientoComponent {
  
  displayedColumns: string[] = ['consecutivo', 'debitos', 'creditos', 'descripcion', 'nombre', 'impuesto'];
  dataSource = [''];

  constructor(){

  }

  ngOnInit(): void {
  }

  crearAsiento(consecutivo: string){
    console.log(consecutivo);
  }
  
}



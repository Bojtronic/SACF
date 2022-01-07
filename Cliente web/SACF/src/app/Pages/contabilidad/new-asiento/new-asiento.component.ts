import { Component, Input } from '@angular/core';

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
  selector: 'app-new-asiento',
  templateUrl: './new-asiento.component.html',
  styleUrls: ['./new-asiento.component.scss']
})



export class NewAsientoComponent {
  
  displayedColumns: string[] = ['consecutivo', 'debitos', 'creditos', 'descripcion', 'nombre', 'impuesto'];
  dataSource = [''];

  constructor(){

  }

  ngOnInit(): void {
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



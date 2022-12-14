
/*export interface LineaAsiento {
    numero: string;
    cuenta: string;
    debito: string;
    credito: string;
    descripcion: string;
    impuesto: string;
    proveedor: string;
    fechabanco: string;
}
*/

export interface LineaAsiento {
  numero_linea: number;
  cuenta: string;
  debito: number;
  credito: number;
  descripcion: string;
  impuesto: string;
  fecha_emision_factura: Date;
  proveedor: string;
}

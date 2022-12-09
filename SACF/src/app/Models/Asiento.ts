import { LineaAsiento } from "./LineaAsiento";

export interface Asiento {
  consecutivo: string;
  fecha: string;
  numlinea: LineaAsiento[];
}
/*
export interface Asiento {
  id_asiento: number;
  num_asiento: number;
  num_cuenta: string;
  cuenta: string;
  debitos: number;
  creditos: number;
  descripcion: string;
  impuestos: string;
  fecha_creacion: Date;
  fecha_emision_factura: Date;
  proveedor: string;
}
*/
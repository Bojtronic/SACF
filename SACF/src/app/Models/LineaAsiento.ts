export interface LineaAsiento {
  numero_asiento: number;
  numero_linea: number;
  id_cuenta: number;
  debito: number;
  credito: number;
  descripcion: string;
  impuesto: string;
  fecha_factura: Date;
  proveedor: string;
}
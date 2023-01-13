export interface LineaAsientoGraph {
    numero_linea: number;
    cuenta: string;
    debito_cantidad: number;
    debito_deshabilitado: boolean;
    credito_cantidad: number;
    credito_deshabilitado: boolean;
    descripcion: string;
    impuesto: string;
    fecha_emision_factura: Date;
    proveedor: string;
}
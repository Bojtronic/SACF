export interface Cuenta {
  id_cuenta?: number;
  numero: number;
  nombre: string;
  tipo: string;
  tipo_detalle: string;
  descripcion: string;
  saldo: number;
  divisa: string;
  fecha_registro: Date;
}
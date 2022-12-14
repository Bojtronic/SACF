import { LineaAsiento } from "./LineaAsiento";

export interface Asiento {
  num_asiento: string;
  fecha_creacion: Date;
  Filas: LineaAsiento[];
}

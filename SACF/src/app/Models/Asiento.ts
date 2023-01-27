import { LineaAsiento } from "./LineaAsiento";

export interface Asiento {
  numero: number;
  fecha_creacion: Date;
  divisa: string;
  //Filas: LineaAsiento[];
}

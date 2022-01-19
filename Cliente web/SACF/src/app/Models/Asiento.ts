import { LineaAsiento } from "./LineaAsiento";

export interface Asiento {
    consecutivo: string;
    fecha: string;
    numlinea: LineaAsiento[];
  }
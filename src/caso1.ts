import { Reserva } from "./modelo";
import { ReservaBase } from "./clase-padre";

//Caso 1

export class PrecioTotal extends ReservaBase {
  precio: { [tipoHabitacion: string]: number };
  iva: number;
  pax: number;
  constructor(reservas: Reserva[]) {
    super(reservas);
    this.precio = {
      standard: 100,
      suite: 150,
    };
    this.iva = 21;
    this.pax = 40;
  }
  calcularSubtotal(): number {
    return this.calcularPrecioSubtotal();
  }
  calcularTotal(): number {
    const subtotal = this.calcularSubtotal();
    return subtotal + subtotal * (this.iva / 100);
  }
}

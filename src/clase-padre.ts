import { Reserva } from "./modelo";

export class ReservaBase {
  reservas: Reserva[];
  precio: { [tipoHabitacion: string]: number };
  pax: number;

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
    this.precio = {};
    this.pax = 0;
  }

  calcularPrecioSubtotal(): number {
    return this.reservas.reduce((subtotal, reserva) => {
      const precioBase = this.precio[reserva.tipoHabitacion];
      const personasExtra = reserva.pax > 1 ? (reserva.pax - 1) * this.pax : 0;
      const precioPorNoche = precioBase + personasExtra;
      return subtotal + precioPorNoche * reserva.noches;
    }, 0);
  }
}

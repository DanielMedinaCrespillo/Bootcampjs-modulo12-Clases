import { Reserva } from "./modelo";
import { ReservaBase } from "./clase-padre";

export class Descuento extends ReservaBase {
  descuento: number;
  iva: number;

  constructor(reservas: Reserva[], descuento: number) {
    super(reservas);
    this.precio = {
      standard: 100,
      suite: 100,
    };
    this.descuento = descuento;
    this.iva = 21;
    this.pax = 40;
  }

  calcularSubtotalDescuento() {
    const subtotal = this.calcularPrecioSubtotal();
    const calcularDescuento = (subtotal * this.descuento) / 100;
    const subtotalConDescuento = subtotal - calcularDescuento;
    return subtotalConDescuento;
  }

  calcularTotalDescuento() {
    const subtotalConDescuento = this.calcularSubtotalDescuento();
    const totalConIva =
      subtotalConDescuento + subtotalConDescuento * (this.iva / 100);
    return totalConIva;
  }
}

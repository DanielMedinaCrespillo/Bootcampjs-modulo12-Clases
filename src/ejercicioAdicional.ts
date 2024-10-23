import { Reserva } from "./modelo";
import { ReservaBase } from "./clase-padre";

export class DesayunoParticular extends ReservaBase {
  desayuno: number;
  iva: number;

  constructor(reservas: Reserva[]) {
    super(reservas);
    this.precio = {
      standard: 100,
      suite: 150,
    };
    this.iva = 21;
    this.pax = 40;
    this.desayuno = 15;
  }

  calcularSubtotalDesayunoParticular(): number {
    const subtotal = this.calcularPrecioSubtotal();
    const costoDesayuno = this.reservas.reduce((totalDesayuno, reserva) => {
      const precioDesayuno = reserva.desayuno
        ? reserva.pax * this.desayuno * reserva.noches
        : 0;
      return totalDesayuno + precioDesayuno;
    }, 0);
    return subtotal + costoDesayuno;
  }

  calcularTotalDesayunoParticular(): number {
    const subtotalConDesayuno = this.calcularSubtotalDesayunoParticular();
    return subtotalConDesayuno + subtotalConDesayuno * (this.iva / 100);
  }
}

export class DesayunoTourOperador extends ReservaBase {
  desayuno: number;
  iva: number;
  descuento: number;

  constructor(reservas: Reserva[], descuento: number) {
    super(reservas);
    this.precio = {
      standard: 100,
      suite: 100,
    };
    this.iva = 21;
    this.pax = 40;
    this.desayuno = 15;
    this.descuento = descuento;
  }

  calcularSubtotalDesayunoTourOperador(): number {
    const subtotal = this.calcularPrecioSubtotal();
    const costoDesayuno = this.reservas.reduce((totalDesayuno, reserva) => {
      const precioDesayuno = reserva.desayuno
        ? reserva.pax * this.desayuno * reserva.noches
        : 0;
      return totalDesayuno + precioDesayuno;
    }, 0);
    const subtotalConDesayuno = subtotal + costoDesayuno;
    const calcularDescuento = (subtotalConDesayuno * this.descuento) / 100;
    const subtotalConDescuento = subtotalConDesayuno - calcularDescuento;
    return subtotalConDescuento;
  }

  calcularTotalDesayunoTourOperador(): number {
    const subtotalConDesayuno = this.calcularSubtotalDesayunoTourOperador();
    return subtotalConDesayuno + subtotalConDesayuno * (this.iva / 100);
  }
}

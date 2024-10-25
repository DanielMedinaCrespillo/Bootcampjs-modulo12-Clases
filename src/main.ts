import { PrecioTotal } from "./caso1";
import { Descuento } from "./caso2";
import { DesayunoParticular, DesayunoTourOperador } from "./ejercicioAdicional";
import { reservas } from "./reservas";

//Caso 1

const precioHabitacion = new PrecioTotal(reservas);

console.log(
  "Subtotal sin iva: ",
  precioHabitacion.calcularSubtotal().toFixed(2)
);

console.log("Total con iva: ", precioHabitacion.calcularTotal().toFixed(2));

//Caso 2

const precioConDescuento = new Descuento(reservas, 15);

console.log(
  "Subtotal de tour operador: ",
  precioConDescuento.calcularSubtotalDescuento().toFixed(2)
);
console.log(
  "Total de tour operador: ",
  precioConDescuento.calcularTotalDescuento().toFixed(2)
);

//Ejercicio Adicional

const precioConDesayunoParticular = new DesayunoParticular(reservas);

console.log(
  "Subtotal con desayuno incluido a particulares: ",
  precioConDesayunoParticular.calcularSubtotalDesayunoParticular().toFixed(2)
);

console.log(
  "Total con desayuno a particulares: ",
  precioConDesayunoParticular.calcularTotalDesayunoParticular().toFixed(2)
);

const PrecioConDesayunoTourOperador = new DesayunoTourOperador(reservas, 15);

console.log(
  "Subtotal con desayuno incluido a Tour Operador: ",
  PrecioConDesayunoTourOperador.calcularSubtotalDesayunoTourOperador().toFixed(
    2
  )
);

console.log(
  "Total con desayuno a Tour Operador: ",
  PrecioConDesayunoTourOperador.calcularTotalDesayunoTourOperador().toFixed(2)
);

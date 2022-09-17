let horas_pago = 15300;
let nombre = prompt("Ingrese el nombre del trabajor");
let horas = parseFloat(prompt("Ingrese las horas que a trabajado"));

let pago = horas * horas_pago;

document.write("el pago de :" + nombre + " es de :" + pago);
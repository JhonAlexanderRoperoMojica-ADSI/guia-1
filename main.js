let minuto = 355;
let cantidad = parseInt(prompt("Ingrese la cantidad de minutos a cobrar"));

let resultado = cantidad * 355;
let iva = resultado * 0.19;
let total = resultado+iva;

document.getElementById('iva').innerHTML = iva;
document.getElementById('total').innerHTML = total;

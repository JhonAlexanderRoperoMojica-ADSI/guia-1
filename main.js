let descuento = 0.10;
let precio = parseFloat(prompt("Ingrese el precio de los medicamentos"));

let precio_descuento = precio * descuento;
let total = precio - precio_descuento;

document.getElementById('precio_descuento').innerHTML = precio_descuento;
document.getElementById('total').innerHTML = total;

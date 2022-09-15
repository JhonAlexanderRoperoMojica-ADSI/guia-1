let A = parseInt(prompt("ingrese el valor de A"));
let B = parseInt(prompt("ingrese el valor de B"));
let C = parseInt(prompt("ingrese el valor de C"));

let operacion = (A + 7 * C)/(B + 2 * A) + 2 * B;

document.getElementById('operacion').innerHTML = operacion;
let pi = Math.PI;
let Radio = parseFloat(prompt("Ingrese el radio del circulo"));

let area = pi * Math.pow(Radio, 2);
let longitud = 2 * Math.PI * Radio;

document.getElementById('area').innerHTML = area;
document.getElementById('longitud').innerHTML = longitud;
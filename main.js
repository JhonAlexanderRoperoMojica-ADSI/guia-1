let pi = Math.PI;
let radio = parseFloat(prompt("ingrese el radio del cilindro"));
let altura = parseFloat(prompt("Ingrese la altura del cilindro"));

let area = (2 *(pi * Math.pow(radio, 2)) + (2 * pi * radio)* altura);
let volumen = (pi * Math.pow(radio, 2)) * altura;

document.getElementById('area').innerHTML = area;
document.getElementById('volumen').innerHTML = volumen;
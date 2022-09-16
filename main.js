let pi = Math.PI;
let a = parseInt(prompt("Ingrese el número"));
let b = parseInt(prompt("Ingrese el número"));
let c = parseInt(prompt("Ingrese el número"));

let volumen = (4/3) * pi * a * b *c;

document.getElementById("volumen").innerHTML=volumen;
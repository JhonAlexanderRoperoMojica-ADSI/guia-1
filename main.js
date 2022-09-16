let km = parseInt(prompt("Ingrese los kilometros"));
let hr = parseInt(prompt("Ingrese las horas"));

let mm= km * 1000;
let seg = hr* 3600;
let velocidad = mm/seg;

document.getElementById('velocidad').innerHTML = velocidad + "m/s";
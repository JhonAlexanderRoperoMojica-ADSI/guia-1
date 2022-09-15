let metros, segundos;
let kilometros = parseFloat(prompt("Ingrese los kilometros a convertir"));
let minutos = parseFloat(prompt("Ingrese los minutos a convertir"));

metros = kilometros * 1000;
segundos = minutos * 60;

document.getElementById('metros').innerHTML = metros;
document.getElementById('segundos').innerHTML = segundos;

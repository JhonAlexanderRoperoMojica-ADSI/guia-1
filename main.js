let grados = parseFloat(prompt("Ingrese los grados a comvertir"));

let Fahrenheit = (grados * (9/5)) + 32;

document.getElementById('Fahrenheit').innerHTML = Fahrenheit;
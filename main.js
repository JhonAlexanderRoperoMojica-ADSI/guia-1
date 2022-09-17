let nota1 = parseFloat(prompt("Ingrese las primera nota"));
let nota2 = parseFloat(prompt("Ingrese las segunda nota"));
let nota3 = parseFloat(prompt("Ingrese las tercera nota"));
let nota4 = parseFloat(prompt("Ingrese las cuarta nota"));

let promedio = (nota1 + nota2 + nota3 + nota4) / 4;

document.getElementById('promedio').innerHTML = promedio;

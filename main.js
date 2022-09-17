let nota1 = parseFloat(prompt("Ingrese la primera nota"));
let nota2 = parseFloat(prompt("Ingrese la segudna nota"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota"));
let examen_final = parseFloat(prompt("Ingrese la nota del examen final"));
let trabajo_final = parseFloat(prompt("Ingrese la nota del trabajo final"));

let parciales = ((nota1 + nota2 + nota3) / 3) * 0.55;
let promedio_fin = examen_final * 0.3;
let promedio_fin2 = trabajo_final * 0.15;
let nota_final = (parciales + promedio_fin + promedio_fin2) / 3;

document.getElementById('parciales').innerHTML = parciales;
document.getElementById('promedio_fin').innerHTML = promedio_fin;
document.getElementById('promedio_fin2').innerHTML = promedio_fin2;
document.getElementById('nota_final').innerHTML = nota_final;
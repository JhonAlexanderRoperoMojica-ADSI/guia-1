let numero1, numero2;
let suma, resta, multiplicacion, division;

numero1 = prompt("Ingrese el primer numero", '');
numero2 = prompt("Ingrese el segundo el numero", '');

suma = parseInt(numero1) + parseInt(numero2);
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2;

document.getElementById('suma').innerHTML = suma;
document.write("<br>");
document.getElementById('resta').innerHTML = resta;
document.write("<br>");
document.getElementById('multiplicacion').innerHTML = multiplicacion;
document.write("<br>");
document.getElementById('division').innerHTML = division;
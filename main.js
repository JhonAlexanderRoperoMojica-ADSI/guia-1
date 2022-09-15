let x = 5;
let  A  =  parseInt ( prompt ( "ingrese el valor de A" ) );
let  B  =  parseInt ( prompt ( "ingrese el valor de B " ) );
let  C  =  parseInt ( prompt ( " ingresar el valor de C " ) );

let operacion = A * Math.pow(x, 2) + B * x + C;

document.getElementById('operacion').innerHTML = operacion;
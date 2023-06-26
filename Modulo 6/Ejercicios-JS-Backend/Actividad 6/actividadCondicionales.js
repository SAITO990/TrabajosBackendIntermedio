//1

let num1 = 23;
let num2 = 12;
let num3 = 45;

if(num1 > num2 && num1 > num3){ 
    console.log(`El numero ${num1}, es el numero mayor`);
}else if(num2 > num1 && num2 > num3){
    console.log(`El numero ${num2}, es el numero mayor`);
}else{
    console.log(`El numero ${num3}, es el numero mayor`);
}

//2

let a = 40;

if(a % 2 === 0){
    console.log(`El numero ${a} es par`);
}else{
    console.log(`El numero ${a} es impar`);
}

//3

let precioDocena = 60000;

let cantidadDocenas = 12;

let descuento;
if (cantidadDocenas > 10) {
  descuento = 0.2;
} else if (cantidadDocenas >= 5) {
  descuento = 0.15;
} else if (cantidadDocenas > 1) {
  descuento = 0.1;
}
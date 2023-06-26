// 1 

let a= 19, b = 2, c = 4;

let op1 = (a * b) / c;
let op2 = (b + c) * a;
let op3 = (a / b) - (a + c);

console.log(`El resultado de la primera operacion es ${op1}, el de la segunda es ${op2} y el de la ultima es ${op3}`);

//2 

let num1 = 23;
let num2 = 5;
let resto = num1 % num2;

console.log(`El resto de dividir ${num1} entre ${num2} es ${resto}`);

//3

let x = 4
x += 3;

console.log("Aumentamos el valor de x es 4 y ahora es de " + x );

//4
let valor1 = true;
let valor2 = false;

console.log(`Tabla de verdad de AND:
${valor1} && ${valor2} = ${valor1 && valor2}
${valor1} && ${valor1} = ${valor1 && valor1}
${valor2} && ${valor2} = ${valor2 && valor2}`);

console.log(`Tabla de verdad de OR:
${valor1} || ${valor2} = ${valor1 || valor2}
${valor1} || ${valor1} = ${valor1 || valor1}
${valor2} || ${valor2} = ${valor2 || valor2}`);

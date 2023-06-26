//1  A
for(i = 10 ; i >= 1; i--){
    console.log(i)
}

//1  B
let cantNumerosPares = 40;
for(i = 0; i <= cantNumerosPares; i += 2){
    console.log(i)
}

//2
let suma = 0;

for (let i = 1; i <= 5; i++) {
  suma += i;
}

console.log("La suma es: " + suma);

//3
let cont = 1;
let resultado;
while(cont <= 10){
    resultado = cont * 7;
    console.log(`7 * ${cont} = ${resultado}`)
    cont ++
}
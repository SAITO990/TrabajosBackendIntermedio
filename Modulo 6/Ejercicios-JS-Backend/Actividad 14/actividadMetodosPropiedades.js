//1

let numero = [];

for(let i = 0; i <= 100; i++){
    numero.push(i);
    console.log(numero[i]);
}

//2

let numerosPares = [];

for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        numerosPares.push(i);
    }
}

console.log(numerosPares);

//3

let numeros = [23, 45, 89];

numeros.sort(function(a,b){
    return a - b;
})

console.log(numeros);

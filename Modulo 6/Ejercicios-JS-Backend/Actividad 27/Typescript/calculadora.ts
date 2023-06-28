class calculadora {
    sumar(a:number, b:number){
        return a + b;
    }

    restar(a:number, b:number){
        return a - b;
    }

    multiplicar(a:number, b:number){
        return a * b;
    }

    divir(a:number, b:number){
        return a / b;
    }
}

const calc= new calculadora;

console.log(calc.sumar(3, 4));
console.log(calc.restar(23, 50));
console.log(calc.multiplicar(577, 89));
console.log(calc.divir(284, 78));
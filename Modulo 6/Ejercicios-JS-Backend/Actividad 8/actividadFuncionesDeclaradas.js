//1 - Suma
function suma(a,b){
    return a + b;
}

//1 - Resta 
function resta(a,b){
    return a - b;
}

//1 - Multiplicacion
function multiplicacion(a,b){
    return a * b;
}

//1 - Division
function division(a,b){    
    if(b === 0){
        return "No se puede dividir entre 0";
    }else{
        return a / b;
    }
}

//2 - Dolares a pesos colombianos
function conversionDolares (dolares){
    const factorConversion = 4515;
    const pesos = dolares * factorConversion;
    return pesos;
}

//2 - Pesos colombianos a Dolares
function conversionPesos(pesos) {
    const factorConversion = 1 / 4515;
    const dolares = pesos * factorConversion;
    return dolares;
}

//3 - Area de un cuadrado
function areaCuadrado(lado){
    return lado * lado;
}

//3 - Area de un circulo
function areaCirculo(radio){
    return Math.PI * (radio**2);
}

//3 - Area de un triangulo
function areaTriangulo(base, altura){
    return (base * altura) / 2
}
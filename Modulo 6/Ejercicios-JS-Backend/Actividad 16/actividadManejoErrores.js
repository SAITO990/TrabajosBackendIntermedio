//1
function valorNumerico(num) {
    try {
      if (typeof num !== "number") {
        throw new Error("¡Cuidado! No se reciben datos no numéricos.");
      } else {
        console.log("El valor ingresado es un número.");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log("Análisis de datos terminado.");
    }
}
  
let number = 4;
valorNumerico(number);


//2

function calculadoraCientifica(a, b, operacion) {
    try {
      if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("La calculadora solo acepta entradas numéricas.");
      } else {
        switch (operacion) {
          case "suma":
            let sum = a + b;
            console.log("Suma:", sum);
            break;
  
          case "resta":
            let rest = a - b;
            console.log("Resta:", rest);
            break;
  
          case "multiplicacion":
            let mult = a * b;
            console.log("Multiplicación:", mult);
            break;
  
          case "division":
            if (b === 0) {
              throw new Error("La división por cero no es posible.");
            } else {
              let div = a / b;
              console.log("División:", div);
            }
            break;
  
          case "potencia":
            let pot = Math.pow(a, b);
            console.log("Potencia:", pot);
            break;
  
          case "raizCuadrada":
            if (a < 0) {
              throw new Error("No es posible la raíz cuadrada de números negativos.");
            } else {
              let raiz = Math.sqrt(a);
              console.log("Raíz Cuadrada:", raiz);
            }
            break;
  
          default:
            throw new Error("Operación no válida.");
        }
      }
    } catch (err) {
      console.log("Error:", err.message);
    }
  }

calculadoraCientifica(5, 3, "suma");
calculadoraCientifica(5, 3, "resta");
calculadoraCientifica(5, 3, "multiplicacion");
calculadoraCientifica(5, 0, "division");
calculadoraCientifica(2, 3, "potencia");
calculadoraCientifica(-4, 0, "raizCuadrada");
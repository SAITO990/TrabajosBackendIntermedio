//1 relacion numeros

let relacion = function(a,b){
    if (a > b){
        return 1;
    }else if (a < b){
        return -1;
    }else{
        return  0
    }
}

//2 Funciones autoejecutables 
(function(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " es un número par");
    } else {
      console.log(numero + " no es un número par");
    }
  })(7);
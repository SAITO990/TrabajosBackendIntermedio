let car = {
    marca:"Ford",
    modelo:"Mustang gt350",
    year:"2017",
    color:"blanco",
    descripcion: function(){
        console.log(`“Hola! Mi marca es ${this.marca}, soy modelo ${this.modelo} ${this.year} y mi color es ${this.color}`);
    }
}

for(propiedad in car){
    console.log(`Llave: ${propiedad}, Valor: ${car[propiedad]}`);
}

car.descripcion();

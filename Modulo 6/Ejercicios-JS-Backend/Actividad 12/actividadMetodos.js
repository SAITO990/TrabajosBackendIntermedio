class Persona{
    constructor(){
        this._nombre = null;
        this._apellido = null;
        this._edad = null;
        this._nacionalidad = null
    }

    set nombre(valor){
        this._nombre = valor;
    }

    get nombre(){
        return this._nombre;
    }

    set apellido(valor){
        this._apellido = valor;
    }

    get apellido(){
        return this._apellido
    }

    set edad(valor){
        this._edad = valor;
    }

    get edad(){
        return this._edad;
    }

    set nacionalidad(valor){
        this._nacionalidad = valor;
    }

    get nacionalidad(){
        return this._nacionalidad
    }

    static numPersonas(){
        console.log("Hay 8.010.359.063 personas en el mundo");
    }
}

const andres = new Persona();
andres.nombre = "Andres";
andres.apellido = "Rolon";
andres.edad = 21;
andres.nacionalidad = "Colombiano";

console.log("Nombre: ", andres.nombre);
console.log("Apellido: ", andres.apellido);
console.log("Edad: ", andres.edad);
console.log("Nacionalidad: ", andres.nacionalidad);
Persona.numPersonas();


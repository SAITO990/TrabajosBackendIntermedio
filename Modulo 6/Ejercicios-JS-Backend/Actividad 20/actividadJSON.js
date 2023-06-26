let datosPersonales = {
    Persona1: {
        nombre: "Andres",
        apellido: "Rolon",
        correo: "andresrolonreyes@gmail.com",
        telefono: "3023083883",
        nacionalidad: "Colombiano"
    },
    Persona2: {
        nombre: "John",
        apellido: "Doe",
        correo: "john.doe@example.com",
        telefono: "123456789",
        nacionalidad: "Estados Unidos"
    },
    Persona3: {
        nombre: "María",
        apellido: "García",
        correo: "maria.garcia@example.com",
        telefono: "987654321",
        nacionalidad: "España"
    },
    Persona4: {
        nombre: "Mohamed",
        apellido: "Ali",
        correo: "mohamed.ali@example.com",
        telefono: "555555555",
        nacionalidad: "Egipto"
    },
    Persona5: {
        nombre: "Sakura",
        apellido: "Tanaka",
        correo: "sakura.tanaka@example.com",
        telefono: "999888777",
        nacionalidad: "Japón"
    }
}

const datoPersonalesJson = JSON.stringify(datosPersonales);
console.log(datoPersonalesJson);
console.log(datosPersonales);


let peliculasJSON = `{
    "Pelicula 1": "Kimi no Na Wa",
    "Pelicula 2": "Avengers Infinity War",
    "Pelicula 3": "Transformers",
    "Pelicula 4": "Alien vs Depredador",
    "Pelicula 5": "John wick"
}`;

const peliculasObjecct = JSON.parse(peliculasJSON);
console.log(peliculasJSON);
console.log(peliculasObjecct);
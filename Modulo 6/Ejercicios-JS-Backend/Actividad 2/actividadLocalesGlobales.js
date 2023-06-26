var nombre = "Andres";
var apellido = "Reyes";

{
    let edad = 21;
    let comidaFavorita = "Carne";
    console.log(`Hola, mi nombre es ${nombre} ${apellido} tengo ${edad} años y mi comida favorita es la ${comidaFavorita}`);
}

console.log(`Hola, mi nombre es ${nombre} ${apellido} tengo ${edad} años y mi comida favorita es la ${comidaFavorita}`);



//¿En qué casos resulta mejor usar let o var para definir variables?

/*
Let resulta mucho mas util cuando debbemos de crear variables que tengan un ambito de bloque o funcion, sin embargo var 
es mucho mas util cuando debemos crear variables globales, debamos de hacer hoisted o redeclarar variables.
*/
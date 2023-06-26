//1 

let things = ["edificio", "perla", "estrella", "pescado","salero", "biblioteca", "guitarra", "dinero", "música"];

things.forEach(function(palabra){
    let expReg = /^a/i;

    if(expReg.test(palabra)){
        console.log(`La palabra ${palabra} es un sustantivo femenino`);
    }else{
        console.log(`La palabra ${palabra} es un sustantivo masculino`);
    }
})

//2

let email = "andresrolonreyes@gmail.com"
let regular =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

if(regular.test(email)){
    console.log("El correo electronico es valido")
}else{
    console.log("El correo electronico es invalido, ingrese otro correo")
}


//1

let comparacion=(a,b) =>{
    if(a !== b){
        return 1;
    }
    else if(a === b){
        return 0;
    }
}

//2

let segundosMinutos = (segundos) =>{
    let minutos = segundos / 60;
    console.log(`Los ${segundos} segundos son equivalentes a ${minutos} minutos`);
}

let minutosHoras = (minutos) =>{
    let horas = minutos / 60;
    console.log(`Los ${minutos} minutos son equivalentes a ${horas} horas`);
}

let horasDias = (horas) =>{
    let dias = horas / 24;
    console.log(`Las ${horas} horas son equivalentes a ${dias} días`);
}
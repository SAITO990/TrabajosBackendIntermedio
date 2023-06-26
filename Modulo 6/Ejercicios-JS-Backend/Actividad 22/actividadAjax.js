const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", (e) =>{
    if(xhr.readyState !== 4) return;
        console.log(xhr)
        console.log(xhr.responseText)
        console.log(`La URL de la peticion es: ${xhr.responseURL}`)

    switch (xhr.readyState) {
        case 1:
            console.log("Petición no inicializada.")
            break;
    
        case 2:
            console.log("Cargando petición.")
            break;
        case 3:
            console.log("Petición cargada.")
            break;
        case 4:
            console.log("responseText tiene datos parciales")
            break;
        case 5:
            console.log('¡Completado!')
            break;
    }

    switch (xhr.status) {
        case 200:
          console.log("Status 200: respuesta correcta");
          break;
        case 404:
          console.log("Status 404: no encontrado");
          break;
        case 500:
          console.log("Status 500: error interno del servidor");
          break;
      }
})





//Se abre la peticion
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/26");

//Se envia la peticion
xhr.send();
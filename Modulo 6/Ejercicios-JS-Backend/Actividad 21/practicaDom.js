const $descripcionGetElement = document.getElementById("descripcion");
const $descripcionQuerySelector = document.querySelector("#descripcion");
const $allElementsLi = document.querySelectorAll("li");
const $contenedor = document.getElementById('descripcion');
const $ul = document.createElement('ul')

console.log($descripcionGetElement);
console.log($descripcionQuerySelector);
console.log($allElementsLi);
console.log(`Hay ${$allElementsLi.length} elementos en la lista`)

for(let i = 0; i < $allElementsLi.length; i++){
    const item = $allElementsLi[i];
    console.log(item);
}

const parrafo = document.createElement('p');
parrafo.textContent = "En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad de Reading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programas finalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seis programas tuvieron que interactuar con los 12 jueces manteniendo una conversación mediante un computador durante cinco minutos en donde se plantean una serie de preguntas con el fin de determinar si es un computador o un humano. En la edición del 2008 ninguno logré pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programa Elbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12 jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano.";
$contenedor.appendChild(parrafo);

const enlace = document.createElement('a');
enlace.innerHTML = '<a href="#">Enlace principal</a>';
$contenedor.appendChild(enlace);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
const listaNoOrdenada = document.createElement('ul');
document.write("<h3>Meses del año</h3>")
document.body.appendChild($ul);

meses.forEach((elemento) => {
    const $li = document.createElement("li");
    $li.textContent = elemento;
    $ul.appendChild($li);
});



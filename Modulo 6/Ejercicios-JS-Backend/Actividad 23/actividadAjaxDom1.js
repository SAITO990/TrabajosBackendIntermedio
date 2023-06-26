const xhr = new XMLHttpRequest();
const $lista = document.getElementById("lista");
$fragmento = document.createDocumentFragment();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState !== 4) return;

  const json = JSON.parse(xhr.responseText);
  
  if (xhr.status >= 200 && xhr.status < 300){
    for(const key in json){
      console.log(`Llave: ${key}, Valor: ${json[key]}`);
      const $li = document.createElement("li");
      $li.innerHTML = `${key}: ${json[key]}`;
      $fragmento.appendChild($li);
  
    }
      $lista.appendChild($fragmento);
  }else{
    let message = xhr.statusText || "Ocurrió un error";
    $lista.innerHTML = `Error ${xhr.status}: ${message}`;
  }
  
});

xhr.open("GET", "https://jsonplaceholder.typicode.com/comments/63");
xhr.send();
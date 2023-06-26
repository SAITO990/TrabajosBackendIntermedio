const ajax = new XMLHttpRequest();
const lista = document.getElementById("users");

ajax.addEventListener("readystatechange", (e) => {
  if (ajax.readyState !== 4) return;

  const response = JSON.parse(ajax.responseText);

  if (ajax.status >= 200 && ajax.status < 300){

    response.forEach((elemento, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${elemento.name} -- ${elemento.username} -- ${elemento.website}`;
      lista.appendChild(li);
    });
  }
});

ajax.open("GET", "https://jsonplaceholder.typicode.com/users");
ajax.send();
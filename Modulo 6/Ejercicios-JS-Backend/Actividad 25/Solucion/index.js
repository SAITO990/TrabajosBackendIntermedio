const d = document;

d.addEventListener("submit", (e) =>{
    e.preventDefault();
    alert("Enviando Formulario");

    const $response = d.querySelector(".contact-form-response")
    $form = d.querySelector(".form")

    fetch("https://formsubmit.co/andresrolonreyes@gmail.com",{
        method:"POST",
        body: new FormData(e.target)
    })
    .then(res=>res.ok ? res.json(): Promise.reject(res))
    .then(json => {
        console.log(json)
        $response.classList.remove("none")
        $form.reset()
    })
    .catch(err => {
        console.log(err);
    });
})
const desplegable = document.querySelectorAll('.desplegable');
desplegable.forEach(elemento => {
    const titulo = elemento.querySelector(".titulo");
    const oculto = elemento.querySelector(".oculto");
    const icono = titulo.querySelector("img");
    let mostrandoMas = true;
    titulo.addEventListener("click", () => {
        oculto.classList.toggle("oculto");
        if (mostrandoMas) {
            icono.src = "images/icon-minus.svg";
            mostrandoMas = false;
        } else {
            icono.src = "images/icon-plus.svg";
        }
        
    })
})



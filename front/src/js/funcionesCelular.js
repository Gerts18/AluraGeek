const botonAgregar = document.querySelector("#add");
const seccion = document.querySelector("#agregar-prod");
const botonCerrar = document.querySelector("#close");
const botonEnviar = document.querySelector("#send");

botonAgregar.addEventListener('click', () => {
    seccion.classList.remove("oculto");
    seccion.classList.add("mostrar");

    botonAgregar.classList.remove('unpop')
    botonAgregar.classList.add("pop")
    
    botonAgregar.addEventListener('animationend', () => {
        botonAgregar.classList.add('oculto');

    }, { once: true });
})

botonCerrar.addEventListener('click', () => {
    seccion.classList.add("ocultar");
    botonAgregar.classList.add('unpop');

    seccion.addEventListener('animationend', () => {
        botonAgregar.classList.remove('oculto', 'pop');
        seccion.classList.add("oculto");
        seccion.classList.remove("mostrar", "ocultar");
    }, { once: true });
})

botonEnviar.addEventListener('click', () => {
   if(checarTamano()){
        seccion.style.display = "none";
        botonAgregar.style.display = "block";
    } 
    
})

function checarTamano(){
    var tamanoVentana = window.innerWidth;

    var max = 790; 

    return (tamanoVentana <= max) 
}

checarTamano();

window.addEventListener("resize", checarTamano);



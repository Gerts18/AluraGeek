const botonAgregarProducto = document.querySelector("#add");
const seccionAgregarProducto = document.querySelector("#agregar-prod");
const botonCerrar = document.querySelector("#close");

botonAgregarProducto.addEventListener('click', () => {
    seccionAgregarProducto.style.display = "block";
    botonAgregarProducto.style.display = "none";
})

botonCerrar.addEventListener('click', () => {
    seccionAgregarProducto.style.display = "none";
    botonAgregarProducto.style.display = "block";
})


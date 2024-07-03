import { conexiones } from "./conexion.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto (evento) {
    evento.preventDefault();

    const nombre= document.querySelector("[data-nombre]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const precio = document.querySelector("[data-precio]").value;

    try{
        await conexiones.enviarProducto(imagen, nombre, precio);
        /*Mensaje de producto creado */
        
    }catch (evento) {
        /*Mensaje personalizado*/
    }
}


formulario.addEventListener('submit', (evento) => {
    crearProducto(evento);
})

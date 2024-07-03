import { conexiones } from "./conexion.js";

const formulario = document.querySelector("[data-formulario]");

const nombre= document.querySelector("[data-nombre]");
const imagen = document.querySelector("[data-imagen]");
const precio = document.querySelector("[data-precio]");

async function crearProducto (evento) {
    evento.preventDefault();

    try{
        await conexiones.enviarProducto(imagen.value, nombre.value, precio.value);
        /*Mensaje de producto creado */
        
    }catch (evento) {
        /*Mensaje personalizado*/
    }
}


formulario.addEventListener('submit', (evento) => {
    crearProducto(evento);

})

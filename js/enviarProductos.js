import { conexiones } from "./conexion.js";
import mostrarMensajePersonalizado from "./mensajesCustom.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto (e) {

    const nombre= document.querySelector("[data-nombre]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const precio = document.querySelector("[data-precio]").value;

    try{   
        await conexiones.enviarProducto(imagen, nombre, precio);
        await mostrarMensajePersonalizado("productoCreado", e) 
        formulario.reset();
        e.preventDefault();
    }catch (error) {
        await mostrarMensajePersonalizado('errorCrearProducto', error);
    }
}

formulario.addEventListener('submit', (e) => {
    crearProducto(e);
    e.preventDefault();
})

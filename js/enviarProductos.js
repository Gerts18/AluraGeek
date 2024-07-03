import { conexiones } from "./conexion.js";
import mostrarMensajePersonalizado from "./mensajesCustom.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto (evento) {
    evento.preventDefault();

    const nombre= document.querySelector("[data-nombre]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const precio = document.querySelector("[data-precio]").value;

    try{   
        await conexiones.enviarProducto(imagen, nombre, precio);
        await mostrarMensajePersonalizado("productoCreado", evento) 
        formulario.reset();
    }catch (error) {
        await mostrarMensajePersonalizado('errorCrearProducto', error);
    }
}

formulario.addEventListener('submit', (evento) => {
    crearProducto(evento);
})

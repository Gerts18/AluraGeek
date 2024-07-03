import { conexiones } from "./conexion.js   ";
import mostrarMensajePersonalizado from "./mensajesCustom.js";

const listaProductos = document.querySelector("[data-productos]");

async function eliminarProducto(id){
    try{
        await conexiones.eliminarProducto(id);
        await mostrarMensajePersonalizado('productoEliminado');
    }catch{
        await mostrarMensajePersonalizado('errorEliminar');
    };
} 

listaProductos.addEventListener('click', async (evento) => {
    if(evento.target.classList.contains("icono-eliminar")){
        evento.preventDefault();
        const idProducto = evento.target.parentNode.id;
        const eliminar = await mostrarMensajePersonalizado('eliminarProducto');
        if(eliminar){
            await eliminarProducto(idProducto)
        }  
    }
})

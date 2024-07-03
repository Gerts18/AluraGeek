import { conexiones } from "./conexion.js   ";

const listaProductos = document.querySelector("[data-productos]");

async function eliminarProducto(id){
    try{
        await conexiones.eliminarProducto(id);
        /*Mensaje de producto eliminado */
    }catch{
        /*Error personalizado */
    };
} 

listaProductos.addEventListener('click', (evento) => {
    if(evento.target.classList.contains("icono-eliminar")){
        const idProducto = evento.target.parentNode.id;
        eliminarProducto(idProducto)
    }
})
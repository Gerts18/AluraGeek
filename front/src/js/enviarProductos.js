import { conexiones } from "./conexion.js";
import mostrarMensajePersonalizado from "./mensajesCustom.js";
import crearProducto from "./mostrarProductos.js";

const formulario = document.querySelector("[data-formulario]");
const listaProductos = document.querySelector("[data-productos]");

async function crearProd(e) {
    e.preventDefault();
    const nombre= document.querySelector("[data-nombre]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const precio = document.querySelector("[data-precio]").value;

    try{   
        const producto = await conexiones.enviarProducto(imagen, nombre, precio);
        formulario.reset();
        listaProductos.appendChild(crearProducto(producto.imagen,producto.nombre,producto.precio, producto.id));
        await mostrarMensajePersonalizado("productoCreado", e) 
        
    }catch (error) {
        await mostrarMensajePersonalizado('errorCrearProducto', error);
    }
}

formulario.addEventListener('submit', (e) => {
    crearProd(e);
})

import { conexiones } from "./conexion.js";

const listaProductos = document.querySelector("[data-productos]");
const mensaje = document.querySelector("#mensaje");

function crearProducto(imagen,nombre,precio){
    const producto = document.createElement("li");
    producto.className = "producto";
    producto.innerHTML = 
    `
    <img class="imagen-producto" src=${imagen} alt="">
    <h2 class="nombre-producto">${nombre} </h2>
    <div class="info">
        <p class="precio">${precio}</p>
        <img class="icono-eliminar" src="./imagenes/icon_trash.svg" alt="">
    </div>  
    `;

    return producto;
}

async function mostrarProductos (){
    try{
        const productos = await conexiones.obtenerProductos();

        mensaje.style.display = "none";

        productos.forEach(producto => {
            listaProductos.appendChild(crearProducto(producto.imagen,producto.nombre,producto.precio));
        });

    }catch{
        mensaje.style.display = "block";

        /*Mostrar mensaje de error personalizado */
    }
}

mostrarProductos();
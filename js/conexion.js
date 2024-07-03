const endpoint ="http://localhost:3001/productos";

async function obtenerProductos(){
    const conexion = await fetch(endpoint); //Creando una conexion para solicitar los datos

    const datos = conexion.json();

    return datos;

}

export const conexiones = {
    obtenerProductos
};


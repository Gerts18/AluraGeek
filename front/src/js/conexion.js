const endpoint = import.meta.env.VITE_end_point;

async function obtenerProductos(){
    const conexion = await fetch(endpoint); //Creando una conexion para solicitar los datos

    const datos = conexion.json();

    return datos;

}

async function enviarProducto(imagen, nombre, precio){
    const conexion = await fetch(endpoint, { //Creando conexion para enviar datos
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            nombre: nombre,
            imagen: imagen,
            precio: `$ ${precio} MXN`
        })
    });

    const datos = conexion.json();

    return datos;
}

async function eliminarProducto(id){
    const conexion = await fetch(`${endpoint}/${id}`, { //Creando conexion para eliminar datos
        method: "DELETE"
    })

    const datos = conexion.json();

    return datos;
}

export const conexiones = {
    obtenerProductos, enviarProducto, eliminarProducto
};


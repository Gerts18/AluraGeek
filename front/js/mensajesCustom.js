
export default async function mostrarMensajePersonalizado(caso, evento){
    switch(caso){
        case "bienvenida":
            await Swal.fire({
                title: '<div style="display: flex; flex-direction: row; justify-content: center; align-items: center;"> <img src="imagenes/corazones.svg" alt=""> <h1 class="titulo">Bienvenido</h1> </div>',
                html: '<p class="mensaje-error"> Alura Geek te ofrece una manera sencilla de administrar tus productos, pudiendo agregarlos, eliminarlos y enlistarlos en una interfaz facil de usar y bien diseñada.</p>',
                confirmButtonText: '<p class="texto">Continuar</p>',
            });
            break;

        case "errorServidor":
            await Swal.fire({
                title: '<h1 class="titulo">Error!</h1>',
                html: '<p class="mensaje-error"> Parece ser que hubo un error con la conexion al servidor :( <br> Intenta de nuevo mas tarde. </p>',
                confirmButtonText: '<p class="texto">Continuar</p>',
            });
            break;

        case "productoCreado":
            await Swal.fire({
                title: '<h1 class="titulo" style="font-size:16px">Producto Creado con Exito</h1>',
                html: '<p class="mensaje-error"> Haz añadido un nuevo producto a tu lista. </p>',
                confirmButtonText: '<p class="texto">Continuar</p>',
            });
            break;

        case 'errorCrearProducto':
            await Swal.fire({
                title: '<h1 class="titulo">Error!</h1>',
                html: `<p class="mensaje-error"> Parece que hubo un problema al crear el producto. <br> Intenta de nuevo mas tarde.</p>`,
                confirmButtonText: '<p class="texto">Continuar</p>',
                footer: `<p class="mensaje-error"> ${evento} </p>`
            });
            break;

        case 'eliminarProducto':
            const result = await Swal.fire({
                title: '<h1 class="titulo" style="font-size:16px">¿Estas seguro de querer eliminar este producto?</h1>',
                html: '<p class="mensaje-error">Esta accion es irreversible.</p>',
                confirmButtonText: '<p class="texto">Continuar</p>',
                showDenyButton: true,
                denyButtonText: '<p class="texto">Cancelar</p>',
            });
            return result.isConfirmed;
            
        case 'productoEliminado':
            await Swal.fire({
                title: '<h1 class="titulo" style="font-size:16px">Producto Eliminado con Exito</h1>',
                html: '<p class="mensaje-error"> Haz quitado un producto de tu lista. </p>',
                confirmButtonText: '<p class="texto">Continuar</p>',
            });
            break;
        case 'errorEliminar':
            await Swal.fire({
                title: '<h1 class="titulo" style="font-size:16px">Error!</h1>',
                html: '<p class="mensaje-error"> Parece que hubo un problema al eliminar el producto.</p>',
                confirmButtonText: '<p class="texto">Continuar</p>',
            });
            break;
    }

}   

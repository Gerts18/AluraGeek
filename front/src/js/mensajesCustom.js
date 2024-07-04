import Swal from 'sweetalert2';

export default async function mostrarMensajePersonalizado(caso, evento){
    switch(caso){
        case "bienvenida":
            await Swal.fire({
                title: '<div style="display: flex; flex-direction: row; justify-content: center; align-items: center;"> <img src="imagenes/corazones.svg" alt=""> <h1 class="titulo">Bienvenido</h1> </div>',
                html: '<p class="mensaje-error"> Alura Geek te proporciona una forma sencilla y eficiente de gestionar tus productos. Con una interfaz intuitiva y bien diseñada, puedes agregar, eliminar y listar productos fácilmente.</p>',
                confirmButtonText: '<p class="texto">Continuar</p>',
            });
            break;

        case "errorServidor":
            await Swal.fire({
                title: '<h1 class="titulo">Error!</h1>',
                html: '<p class="mensaje-error"> Parece ser que hubo un error con la conexion al servidor :( <br> Intenta de nuevo en un minuto. </p>',
                confirmButtonText: '<p class="texto">Continuar</p>',
                icon: "error"
            });
            break;

        case "productoCreado":
            await Swal.fire({
                title: '<h1 class="titulo" style="font-size:16px">Producto Creado con Exito</h1>',
                html: '<p class="mensaje-error"> Haz añadido un nuevo producto a tu lista. </p>',
                confirmButtonText: '<p class="texto">Continuar</p>',
                icon:"success"
            });
            break;

        case 'errorCrearProducto':
            await Swal.fire({
                title: '<h1 class="titulo">Error!</h1>',
                html: `<p class="mensaje-error"> Parece que hubo un problema al crear el producto. <br> Intenta de nuevo mas tarde.</p>`,
                confirmButtonText: '<p class="texto">Continuar</p>',
                footer: `<p class="mensaje-error"> ${evento} </p>`,
                icon: "error"
            });
            break;

        case 'eliminarProducto':
            const result = await Swal.fire({
                title: '<h1 class="titulo" style="font-size:16px">¿Estás seguro de que deseas eliminar este producto?</h1>',
                html: '<p class="mensaje-error">Esta acción no se puede deshacer.</p>',
                confirmButtonText: '<p class="texto">Continuar</p>',
                showDenyButton: true,
                denyButtonText: '<p class="texto">Cancelar</p>',
                icon: "question"
            });
            return result.isConfirmed;
            
        case 'productoEliminado':
            await Swal.fire({
                title: '<h1 class="titulo" style="font-size:16px">Producto Eliminado con Exito</h1>',
                html: '<p class="mensaje-error"> Haz quitado un producto de tu lista. </p>',
                confirmButtonText: '<p class="texto">Continuar</p>',
                icon: "success"
            });
            break;
        case 'errorEliminar':
            await Swal.fire({
                title: '<h1 class="titulo" style="font-size:16px">Error!</h1>',
                html: '<p class="mensaje-error"> Parece que hubo un problema al eliminar el producto.</p>',
                confirmButtonText: '<p class="texto">Continuar</p>',
                footer: `<p class="mensaje-error"> ${evento} </p>`,
                icon: "error"
            });
            break;
    }

}   

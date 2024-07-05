![logo1](https://github.com/Gerts18/AluraGeek/assets/105231388/871f3e4e-526a-42c7-82a4-30170db91bd9)<svg width="374" height="56" viewBox="0 0 374 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

<h1>Pagina Web para Administración de Productos - AluraGeek</h1>
<p>
Este proyecto es una página web para la administración de productos, desarrollada con Vite, JavaScript vanilla, HTML y CSS. La aplicación sigue una lógica REST API para manejar productos a través de un servidor. Incluye funcionalidades para mostrar, agregar y eliminar productos, además de validaciones y notificaciones personalizadas.
</p>

![Screenshot 2024-07-05 110003](https://github.com/Gerts18/AluraGeek/assets/105231388/e08d21b6-0b1d-4f2a-8e6e-e30bcc2e0ea4)

<h2>Pruebas</h2>
<p>Puedes acceder a la pagina muestra subida con el siguiente link: <a href="https://alura-geek-five-psi.vercel.app/">Alura Geek</a> </p>
<p>Tambien puedes acceder al album usado para proporcionar las imagenes de los productos de este proyecto: <a href="https://ibb.co/album/C6kd6X">imgbb de Alura Geek</a> </p>

<h2>Características</h2>
<ul>
    <li><strong>Mostrar Productos</strong>: Los productos se muestran desde el servidor utilizando <code>fetch</code>.</li>
    <li><strong>Agregar Productos</strong>: Formulario para agregar nuevos productos con validaciones JavaScript.</li>
    <li><strong>Eliminar Productos</strong>: Opción para eliminar productos existentes.</li>
    <li><strong>Validaciones</strong>: Validaciones en el formulario para asegurar que los productos cumplan ciertas especificaciones.</li>
    <li><strong>Mensajes Personalizados</strong>: Uso de SweetAlert2 para mostrar mensajes personalizados al usuario.</li>
    <li><strong>Responsivo</strong>: Diseño adaptado para dispositivos móviles con transiciones animadas.</li>
    <li><strong>Servidor</strong>: Uso de <code>json-server</code> para simular un servidor REST API.</li>
    <li><strong>Almacenamiento de Imágenes</strong>: Las imágenes de los productos fueron alojadas en <a href="https://imgbb.com/">imgbb</a>.</li>
</ul>

 <h2>Tecnologías Utilizadas</h2>
<ul>
    <li><strong>Vite</strong>: Herramienta de desarrollo rápido.</li>
    <li><strong>JavaScript Vanilla</strong>: Para la lógica del front-end.</li>
    <li><strong>HTML</strong>: Estructura de la página.</li>
    <li><strong>CSS</strong>: Estilos de la página.</li>
    <li><strong>SweetAlert2</strong>: Librería para alertas y notificaciones personalizadas.</li>
    <li><strong>json-server</strong>: Servidor simulado para manejar datos.</li>
    <li><strong>imgbb</strong>: Plataforma para alojar imágenes.</li>
</ul>

  <h2>Instalación</h2>
    <ol>
        <li>Clona el repositorio:
            <pre><code>git clone https://github.com/tu-usuario/AluraGeek.git</code></pre>
        </li>
        <li>Instala las dependencias:
            <pre><code>
                cd servidor/front
                npm install
            </code></pre>
        </li>
        <li>Inicia el servidor json-server:
            <pre><code>
                cd servidor
                npx json-server --watch datos.json --port 3001
            </code></pre>
        </li>
        <li>Inicia el proyecto con Vite:
            <pre><code>
                cd front
                npm run dev
            </code></pre>
        </li>
    </ol>

<h2>Uso</h2>
<ol>
    <li><strong>Mostrar Productos</strong>: La página principal muestra una lista de productos obtenidos del servidor.</li>
    <li><strong>Agregar Productos</strong>: Usa el formulario para agregar nuevos productos. De preferencia usa imagenes alojadas en un sitio dedicado como imgbb, esto para asegurar que se carguen correctamente y     proporciona la URL de la imagen.</li>
    <li><strong>Eliminar Productos</strong>: Haz clic en el icono de eliminar para eliminar un producto.</li>
</ol>

<h2>Validaciones</h2>
<p>El formulario de creación de productos incluye las siguientes validaciones:</p>
<ul>
    <li>Nombre del producto no vacío y que sea de minimo 5 caracteres, maximo 20.</li>
    <li>Precio del producto pueden ser unicamente numeros.</li>
    <li>URL de la imagen debe ser una URL válida.</li>
</ul>

<h2>Mensajes Personalizados</h2>
<ul>
    <li><strong>Éxito</strong>: Se muestra un mensaje de éxito cuando se agrega o elimina un producto correctamente, y cuando se logra la conexion al servidor.</li>
    <li><strong>Error</strong>: Se muestran mensajes de error personalizados si las validaciones fallan o si hay problemas con las operaciones del servidor.</li>
</ul>

<h2>Responsivo y Animaciones</h2>
<p>El diseño de la página es responsivo, adaptándose a dispositivos móviles y tablets. Se han añadido animaciones CSS para transiciones más fluidas.</p>

![responsive](https://github.com/Gerts18/AluraGeek/assets/105231388/a4bcfead-51f7-4f00-8d58-a5cfb4effea0)

<h2>Contribuciones</h2>
<p>Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cualquier cambio importante antes de enviar un pull request.</p>

<h2>Observaciones</h2>
<p>Es de notar que el diseño va dirigido a productos Geek y de la cultura pop en general. Puedes cambiar el diseño a tu gusto para que se adapte al tipo de productos que quieres administrar.</p>


const campos = document.querySelectorAll("[required]");

const formulario = document.querySelector('[data-formulario]');

campos.forEach((campo) => { 
    campo.addEventListener('blur', () => {
        verificarCampo(campo);
    });

    campo.addEventListener('invalid', (evento) => {
        evento.preventDefault(); 
    })
});

function verificarCampo(campo){

    const mensaje = campo.parentNode.querySelector(".mensaje-error"); 

    campo.setCustomValidity("")

    if(campo.name == "precio" && campo.value.length > 6){
        campo.setCustomValidity("El precio no puede tener mas de 6 digitos")
    }
    if(campo.name == "nombre"){
        if(campo.value == ""){
            campo.setCustomValidity("Completa este campo");
        }else if( campo.value.length < 5){
            campo.setCustomValidity("Nombre de minimo 5 caracteres");
        }
    }

    if (!campo.validity.valid) {
        mensaje.textContent = campo.validationMessage;
      } else {
        mensaje.textContent = '';
      }

   // console.log(campo.validity);
}


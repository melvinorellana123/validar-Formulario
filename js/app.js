// variables TODO:
const email  = document.getElementById('email');
const asunto  = document.getElementById('asunto');
const mensaje  = document.getElementById('mensaje');
const btnEnviar  = document.getElementById('enviar');
const btnReset  = document.getElementById('reset');
const formularioEnviar =  document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');
 
 

//event listener TODO:
eventListener();

 function eventListener() {
     //inicio de la app y deshabilitar el boton enviar
      document.addEventListener('DOMContentLoaded', inicioApp);
    //   campos del formulario
    email.addEventListener('blur', validarCampo)
    asunto.addEventListener('blur', validarCampo)
    mensaje.addEventListener('blur', validarCampo)

    //boton enviar
    formularioEnviar.addEventListener('submit', enviarEmail)

    //boton para resetear formulario
    resetBtn.addEventListener('click', resetearFormulario);
 }
  


//funciones TODO:
//inicio app
function inicioApp() {
    btnEnviar.disabled = true; 
}

//validar campo
function validarCampo() {
    // se valida la longitud del texto y que no este vacio
    validarLongitud(this); 
    let errores = document.querySelectorAll('.error');
    //validar unicamente el email
    if (this.type === 'email') {
        validarEmail(this);
    }

    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }    
}
 
//resetear  formulario
function  resetearFormulario(e) {
    formularioEnviar.reset();
    e.preventDefault();

}  


// se valida la longitud del texto y que no este vacio
function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = ' limegreen';
        campo.classList.remove('error');
    }  else{  
        campo.style.borderBottomColor = 'crimson';
        campo.classList.add('error');
    } 
} 

//validar email 
function validarEmail(campo) {
    const correo = campo.value;
    if (correo.indexOf('@' && 'gmail' && '.com' ) !== -1) {
        campo.style.borderBottomColor = ' limegreen';
        campo.classList.remove('error');  
    } else {
        campo.style.borderBottomColor = ' crimson';
        campo.classList.add('error');  
    }
}

// cuando se envia el correo
function  enviarEmail(e) {
    //gif spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block'
    //gif email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif ';
    enviado.style.display = 'block';
    // ocultar spinner y mostrat gif d enviado
    setTimeout(function (){
        spinner.style.display = 'none';
        document.querySelector("#loaders").appendChild(enviado);
        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        },2500); 
    }, 2000);
    e.preventDefault();
}   



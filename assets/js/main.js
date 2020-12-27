let boton = document.querySelector('#enviarFormulario');
let nombre = document.querySelector('#nombre');
let email = document.querySelector('#email');
let mensaje = document.querySelector('#mensaje');
boton.addEventListener('click', function(e){
    e.preventDefault();
    boton.style.backgroundColor="#4444ff";
    boton.innerText="¡Gracias por contactar!";
    let nombreContacto= document.querySelector('#nombreContacto').value;
    let emailContacto = document.querySelector('#emailContacto').value;
    let mensajeContacto = document.querySelector('#mensajeContacto').value;
    nombre.innerText=nombreContacto;
    email.innerText=emailContacto;
    mensaje.innerText=mensajeContacto;
})
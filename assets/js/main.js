let boton = document.querySelector('#enviarFormulario');
let nombre = document.querySelector('#nombre');
let email = document.querySelector('#email');
let cuerpo = document.querySelector('#cuerpo');
boton.addEventListener('click', function(e){
    nombre.innerText=document.querySelector('nombreContacto');
    email.innerText=document.querySelector('emailContacto');
    mensaje.innerText=document.querySelector('mensajeContacto');  
})
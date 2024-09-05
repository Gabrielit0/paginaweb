document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('miBoton');
    const mensaje = document.getElementById('mensaje');

    boton.addEventListener('click', function() {
        mensaje.textContent = '¡Has hecho clic en el botón!';
    });
});

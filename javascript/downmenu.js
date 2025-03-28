// Seleccionar el dropdown
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

let timeout; // Variable para controlar el tiempo

// Mostrar el menú al pasar el mouse
dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout); // Cancelar el temporizador si ya existe
    dropdownMenu.style.display = 'block'; // Mostrar el menú
});

// Ocultar el menú después de 2 segundos al quitar el mouse
dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        dropdownMenu.style.display = 'none'; // Ocultar el menú
    }, 1000); // Tiempo en milisegundos (2 segundos)
});
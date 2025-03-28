document.querySelectorAll('.dropdown-footer').forEach(dropdown => {
    let hideTimeout; // Variable para manejar el temporizador

    dropdown.addEventListener('mouseenter', () => {
        const menu = dropdown.querySelector('.dropdown-menu--footer');
        menu.style.display = 'block'; // Muestra el menú

        // Cancela cualquier temporizador previo si el mouse vuelve antes de que termine
        clearTimeout(hideTimeout);
    });

    dropdown.addEventListener('mouseleave', () => {
        const menu = dropdown.querySelector('.dropdown-menu--footer');

        // Establece un temporizador para ocultar el menú tras 2 segundos
        hideTimeout = setTimeout(() => {
            menu.style.display = 'none'; // Oculta el menú
        }, 1000); // 2000 milisegundos = 2 segundos
    });
});

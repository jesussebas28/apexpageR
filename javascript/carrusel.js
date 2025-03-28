let indice = 0;

function cambiarSlide(direccion) {
    const imagenes = document.querySelector('.imagenes');
    const totalSlides = imagenes.children.length;

    indice = (indice + direccion + totalSlides) % totalSlides;
    imagenes.style.transform = `translateX(${-indice * imagenes.offsetWidth}px)`;
}

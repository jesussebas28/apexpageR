const personajes = [

    { nombre: "Takeover Collection Bundle ", imagen: "image/productos/producto1.png" },
    { nombre: "Diamond Nessie Plush- 6th Anniversary", imagen: "image/productos/producto2.png" },
    
    { nombre: "Radar Tee", imagen: "image/productos/produto4.png" },
];

// Contenedor donde se agregarán las tarjetas
const contenedor = document.getElementById('card-charter-container');

// Generar dinámicamente las tarjetas
personajes.forEach(personaje => {
    const card = document.createElement('div');
    card.className = 'card-charter';
    
    // Contenido de la tarjeta
    card.innerHTML = `
        <img src="${personaje.imagen}" alt="${personaje.nombre}">
        <h2>${personaje.nombre}</h2>
    `;

    // Agregar tarjeta al contenedor
    contenedor.appendChild(card);
});
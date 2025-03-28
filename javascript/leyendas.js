const personajes = [
    { nombre: "Alter", imagen: "image/personajes/Apex-Legends_Alter-16x9.png" },
    { nombre: "Bangalore", imagen: "image/personajes/Apex-Legends_Bangalore-16x9.png" },
    { nombre: "Bloodhound", imagen: "image/personajes/Apex-Legends_Bloodhound-16x9.png" },
    { nombre: "Fuse", imagen: "image/personajes/Apex-Legends_Fuse-16x9.png" },
    { nombre: "Gibraltar", imagen: "image/personajes/Apex-Legends_Gibraltar-16x9.png" },
    { nombre: "Lifeline", imagen: "image/personajes/Apex-Legends_Lifeline-16x9.png" },
    { nombre: "Loba", imagen: "image/personajes/Apex-Legends_Loba-16x9.png" },
    { nombre: "Mirage", imagen: "image/personajes/Apex-Legends_Mirage-16x9.png" },
    { nombre: "Newcastle", imagen: "image/personajes/Apex-Legends_Newcastle-16x9.png" },
    { nombre: "Octane", imagen: "image/personajes/Apex-Legends_Octane-16x9.png" },
    { nombre: "Pathfinder", imagen: "image/personajes/Apex-Legends_Pathfinder-16x9.png" },
    { nombre: "Valkyrie", imagen: "image/personajes/Apex-Legends_Valkyrie-16x9.png" },
    { nombre: "Wattson", imagen: "image/personajes/Apex-Legends_Wattson-16x9.png" },
    { nombre: "Wraith", imagen: "image/personajes/Apex-Legends_Wraith-16x9.png" },
    { nombre: "Revenant", imagen: "image/personajes/Apex-Legends_Revenant-16x9.png"}
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
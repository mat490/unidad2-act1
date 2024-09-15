// Seleccionar elementos del DOM
const text = document.getElementById('resizableText');
const increaseBtn = document.getElementById('increaseFontBtn');
const decreaseBtn = document.getElementById('decreaseFontBtn');

// Tamaño de fuente inicial y paso de cambio
let fontSize = 16; // Tamaño inicial en px
const step = 2; // Cambio de tamaño en cada clic

// Función para aumentar el tamaño de la fuente
function increaseFontSize() {
    fontSize += step;
    text.style.fontSize = `${fontSize}px`;
    console.log(`Tamaño de fuente aumentado a: ${fontSize}px`);
}

// Función para disminuir el tamaño de la fuente
function decreaseFontSize() {
    if (fontSize > step) { // Evitar tamaños negativos
        fontSize -= step;
        text.style.fontSize = `${fontSize}px`;
        console.log(`Tamaño de fuente disminuido a: ${fontSize}px`);
    } else {
        console.log('No se puede disminuir más el tamaño de la fuente');
    }
}

// Agregar event listeners a los botones
increaseBtn.addEventListener('click', increaseFontSize);
decreaseBtn.addEventListener('click', decreaseFontSize);
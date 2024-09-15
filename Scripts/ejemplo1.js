const button = document.getElementById('changeImageBtn');
const image = document.querySelector('.container1 img');


const images = ["./images/JavaScript-Logo.png", "./images/css3-logo.png", "./images/HTML5_logo.png"];
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    image.src = images[currentImageIndex];
    console.log(`Imagen cambiada a: ${images[currentImageIndex]}`);  // Para depurar
}

button.addEventListener('click', changeImage);

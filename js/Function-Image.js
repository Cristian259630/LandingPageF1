// JavaScript para manejar el cambio de imagen
const image = document.getElementById('pic1');



image.addEventListener('mouseover', () => {
    image.src = 'img/image-replace/red-bull-racing-logo-1.jpg';
});

image.addEventListener('mouseout', () => {
    image.src = 'imagen-original.jpg';
});

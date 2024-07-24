const imagenes = [
    { 
        titulo: "Bariloche", 
        descripcion: "Descripción 1", 
        src: "img/bariloche.webp" 
    },
    { 
        titulo: "Chalten", 
        descripcion: "Descripción 2", 
        src: "img/chalten.webp" 
    },
    { 
        titulo: "Ushuaia", 
        descripcion: "Descripción 3", 
        src: "img/ushuaia.webp" 
    }
];
let indiceActual = 0;
function mostrarFoto(i) {
    const carruselImagenes = document.getElementById('carruselFotos');
    const carruselDescripcion = document.getElementById('carouselDescripcion');

    carruselImagenes.style.transform = `translateX(${-i * 100}%)`;
    carruselDescripcion.textContent = `${imagenes[i].titulo} - ${imagenes[i].descripcion}`;
}
function siguienteImagen() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarFoto(indiceActual);
}
function anteriorImagen() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarFoto(indiceActual);
}
document.getElementById('siguienteButton').addEventListener('click', siguienteImagen);
document.getElementById('anteriorButton').addEventListener('click', anteriorImagen);
const carruselImagenes = document.getElementById('carruselFotos');
imagenes.forEach(imagen => {
    const imgElement = document.createElement('img');
    imgElement.src = imagen.src;
    imgElement.alt = imagen.titulo;
    carruselImagenes.appendChild(imgElement);
});
mostrarFoto(indiceActual);
function moverCarrusel(direccion, idImg) {
    const img = document.getElementById(idImg);

    if (!img) return;

    const imagenes = JSON.parse(img.dataset.imagenes);
    let indice = parseInt(img.dataset.indice, 10) + direccion;
    indice = Math.max(0, Math.min(indice, imagenes.length - 1));

    img.dataset.indice = indice;
    img.src = imagenes[indice];

    const contador = document.getElementById(idImg + '-contador');
    if (contador) {
        contador.textContent = (indice + 1) + ' / ' + imagenes.length;
    }
}
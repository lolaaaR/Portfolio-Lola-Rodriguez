
        function moverCarrusel(direccion, idCarrusel) {
            const slide = document.getElementById(idCarrusel);
            
            if (!slide) return; 

            const imagen = slide.querySelector('.proyecto-img');
            
            if (imagen) {
                const anchoScroll = imagen.clientWidth; 
                slide.scrollBy({ left: direccion * anchoScroll, behavior: 'smooth' });
            }
        }

document.addEventListener('DOMContentLoaded', () => {

    //render first Image

    function fullImage() {
        const images = document.querySelectorAll('.owl-carousel__img img');
        const parent = document.getElementById('fullImg');
        renderImage(images[0].src, images[0].alt, parent);

        images.forEach((img) => {
            img.addEventListener('click', (e) => {
                const parent = document.getElementById('fullImg');
                parent.innerHTML = '';
                const src = e.target.src;
                const alt = e.target.alt;
                renderImage(src, alt, parent);
            });
        })

        function renderImage(src, alt, parent) {
            const img = document.createElement('img');
            img.src = src;
            img.alt = alt;
            parent.appendChild(img);
        }
    }

    setTimeout(fullImage, 500)
});
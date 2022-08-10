document.addEventListener('DOMContentLoaded', () => {
    const headerTop = document.getElementById("headerTop");
    const headerHeight = headerTop.clientHeight;
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    checkScroll(posTop);

    window.addEventListener('scroll', (e) => {
        posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        checkScroll(posTop);
    });

    function checkScroll(posTop) {
        posTop = posTop.toFixed(0);
        if (posTop > headerHeight) {
            headerTop.classList.add('fixed');
        } else {
            headerTop.classList.remove('fixed');
        }
    }
});
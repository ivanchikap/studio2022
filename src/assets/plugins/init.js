$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            margin: 30,
            items: 2,
            nav: true,
            dots: false,
            responsive: {
                0:  {
                    margin: 15,
                },
                768:  {
                    margin: 30,
                }
            }
        }
    );
});
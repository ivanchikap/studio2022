$(document).ready(function(){
    $("#tabsContent").owlCarousel(
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

    $("#aboutCarousel").owlCarousel(
        {
            margin: 40,
            items: 3,
            nav: false,
            dots: true,
            responsive: {
                0:  {
                    items: 1
                },
                768: {
                    margin: 20,
                    items: 2
                },
                992: {
                    margin: 30,
                },
                1200:  {
                    margin: 40,
                }
            }
        }
    );
});
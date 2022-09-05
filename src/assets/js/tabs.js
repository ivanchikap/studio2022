document.addEventListener('DOMContentLoaded', () => {
    const tabsList = document.getElementById('tabsList');
    const buttons = tabsList.querySelectorAll('[data-type]');
    const tabsContent = document.getElementById('tabsContent');
    let employee = [
        {
            img: {
                src1: 'assets/images/services/serv1.jpg',
                alt1: 'serv1',
                src2: 'assets/images/services/serv2.jpg',
                alt2: 'serv2',
            },
            dataPersonType: 'modeling'
        },
        {
            img: {
                src1: 'assets/images/services/serv2.jpg',
                alt1: 'serv2',
                src2: 'assets/images/services/serv1.jpg',
                alt2: 'serv1',
            },
            dataPersonType: 'modeling'
        },
        {
            img: {
                src1: 'assets/images/services/serv3.jpg',
                alt1: 'serv3',
                src2: 'assets/images/services/serv4.jpg',
                alt2: 'serv4',
            },
            dataPersonType: 'modeling'
        },
        {
            img: {
                src1: 'assets/images/services/serv3.jpg',
                alt1: 'serv3',
                src2: 'assets/images/services/serv4.jpg',
                alt2: 'serv4',
            },
            dataPersonType: 'corporate'
        },
        {
            img: {
                src1: 'assets/images/services/serv3.jpg',
                alt1: 'serv3',
                src2: 'assets/images/services/serv4.jpg',
                alt2: 'serv4',
            },
            dataPersonType: 'corporate'
        },
        {
            img: {
                src1: 'assets/images/services/serv3.jpg',
                alt1: 'serv3',
                src2: 'assets/images/services/serv4.jpg',
                alt2: 'serv4',
            },
            dataPersonType: 'corporate'
        },
        {
            img: {
                src1: 'assets/images/services/serv3.jpg',
                alt1: 'serv3',
                src2: 'assets/images/services/serv4.jpg',
                alt2: 'serv4',
            },
            dataPersonType: 'corporate'
        },

        {
            img: {
                src1: 'assets/images/services/serv2.jpg',
                alt1: 'serv2',
                src2: 'assets/images/services/serv1.jpg',
                alt2: 'serv1',
            },
            dataPersonType: 'acting'
        },
        {
            img: {
                src1: 'assets/images/services/serv1.jpg',
                alt1: 'serv1',
                src2: 'assets/images/services/serv2.jpg',
                alt2: 'serv2',
            },
            dataPersonType: 'acting'
        },
        {
            img: {
                src1: 'assets/images/services/serv2.jpg',
                alt1: 'serv2',
                src2: 'assets/images/services/serv1.jpg',
                alt2: 'serv1',
            },
            dataPersonType: 'acting'
        },
        {
            img: {
                src1: 'assets/images/services/serv1.jpg',
                alt1: 'serv1',
                src2: 'assets/images/services/serv2.jpg',
                alt2: 'serv2',
            },
            dataPersonType: 'acting'
        },

        {
            img: {
                src1: 'assets/images/services/serv3.jpg',
                alt1: 'serv1',
                src2: 'assets/images/services/serv4.jpg',
                alt2: 'serv2',
            },
            dataPersonType: 'business'
        },
        {
            img: {
                src1: 'assets/images/services/serv4.jpg',
                alt1: 'serv4',
                src2: 'assets/images/services/serv3.jpg',
                alt2: 'serv3',
            },
            dataPersonType: 'business'
        },
        {
            img: {
                src1: 'assets/images/services/serv3.jpg',
                alt1: 'serv1',
                src2: 'assets/images/services/serv4.jpg',
                alt2: 'serv2',
            },
            dataPersonType: 'business'
        },
        {
            img: {
                src1: 'assets/images/services/serv4.jpg',
                alt1: 'serv4',
                src2: 'assets/images/services/serv3.jpg',
                alt2: 'serv3',
            },
            dataPersonType: 'business'
        },

        {
            img: {
                src1: 'assets/images/services/serv1.jpg',
                alt1: 'serv1',
                src2: 'assets/images/services/serv2.jpg',
                alt2: 'serv2',
            },
            dataPersonType: 'professional'
        },
        {
            img: {
                src1: 'assets/images/services/serv2.jpg',
                alt1: 'serv2',
                src2: 'assets/images/services/serv1.jpg',
                alt2: 'serv1',
            },
            dataPersonType: 'professional'
        },

        {
            img: {
                src1: 'assets/images/services/serv3.jpg',
                alt1: 'serv3',
                src2: 'assets/images/services/serv4.jpg',
                alt2: 'serv4',
            },
            dataPersonType: 'company'
        },
        {
            img: {
                src1: 'assets/images/services/serv4.jpg',
                alt1: 'serv4',
                src2: 'assets/images/services/serv3.jpg',
                alt2: 'serv3',
            },
            dataPersonType: 'company'
        },
        {
            img: {
                src1: 'assets/images/services/serv1.jpg',
                alt1: 'serv1',
                src2: 'assets/images/services/serv2.jpg',
                alt2: 'serv2',
            },
            dataPersonType: 'professional'
        },
        {
            img: {
                src1: 'assets/images/services/serv2.jpg',
                alt1: 'serv2',
                src2: 'assets/images/services/serv1.jpg',
                alt2: 'serv1',
            },
            dataPersonType: 'professional'
        },

        {
            img: {
                src1: 'assets/images/services/serv3.jpg',
                alt1: 'serv3',
                src2: 'assets/images/services/serv4.jpg',
                alt2: 'serv4',
            },
            dataPersonType: 'company'
        },
        {
            img: {
                src1: 'assets/images/services/serv4.jpg',
                alt1: 'serv4',
                src2: 'assets/images/services/serv3.jpg',
                alt2: 'serv3',
            },
            dataPersonType: 'company'
        },

        {
            img: {
                src1: 'assets/images/services/serv1.jpg',
                alt1: 'serv1',
                src2: 'assets/images/services/serv2.jpg',
                alt2: 'serv2',
            },
            dataPersonType: 'group'
        },
        {
            img: {
                src1: 'assets/images/services/serv2.jpg',
                alt1: 'serv2',
                src2: 'assets/images/services/serv1.jpg',
                alt2: 'serv1',
            },
            dataPersonType: 'group'
        },
        {
            img: {
                src1: 'assets/images/services/serv1.jpg',
                alt1: 'serv1',
                src2: 'assets/images/services/serv2.jpg',
                alt2: 'serv2',
            },
            dataPersonType: 'group'
        },

        {
            img: {
                src1: 'assets/images/services/serv4.jpg',
                alt1: 'serv4',
                src2: 'assets/images/services/serv3.jpg',
                alt2: 'serv3',
            },
            dataPersonType: 'officer'
        },
        {
            img: {
                src1: 'assets/images/services/serv3.jpg',
                alt1: 'serv3',
                src2: 'assets/images/services/serv4.jpg',
                alt2: 'serv4',
            },
            dataPersonType: 'officer'
        },
        {
            img: {
                src1: 'assets/images/services/serv4.jpg',
                alt1: 'serv4',
                src2: 'assets/images/services/serv3.jpg',
                alt2: 'serv3',
            },
            dataPersonType: 'officer'
        },
        {
            img: {
                src1: 'assets/images/services/serv3.jpg',
                alt1: 'serv3',
                src2: 'assets/images/services/serv4.jpg',
                alt2: 'serv4',
            },
            dataPersonType: 'officer'
        },
    ];
    let template = '';

    employee.forEach((item) => {
        template += renderItems(item)
    });

    tabsContent.insertAdjacentHTML('afterbegin', template);

    buttons.forEach((button, i, buttons) => {
        button.addEventListener('click', (e) => {
            buttons.forEach((button) => {
                button.classList.remove('active');
            });
            const tabsContent = document.getElementById('tabsContent');
            button.classList.add('active');


            let type = button.dataset.type;

            let employeeToRender = employee.filter((item) => item.dataPersonType === type);

            tabsContent.innerHTML = '';
            template = '';

            employeeToRender.forEach((item) => {
                template += renderItems(item);
            });

            tabsContent.insertAdjacentHTML('afterbegin', template);

            $('.owl-carousel').trigger('destroy.owl.carousel');

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

            if (type === 'all') {
                tabsContent.innerHTML = '';
                template = '';

                employeeToRender = [...employee];

                employeeToRender.forEach((item) => {
                    template += renderItems(item);
                });

                tabsContent.insertAdjacentHTML('afterbegin', template);

                $('.owl-carousel').trigger('destroy.owl.carousel');

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
            }

            fullImage1();
        })
    })

    function renderItems(item) {
        return `                       
            <div class="owl-carousel__item" data-person-type=${item.dataPersonType}>
                <div class="owl-carousel__img">
                    <img src=${item.img.src1 || ""} alt=${item.img.alt1 || ""}>
                    <div class="owl-carousel__info">
                        <a class="btn btn--red btn--smallest" href="#">Company</a>
                        <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                    </div>
                </div>
                <div class="owl-carousel__img">
                    <img src=${item.img.src2 || ""} alt=${item.img.alt2 || ""}>
                    <div class="owl-carousel__info">
                        <a class="btn btn--red btn--smallest" href="#">Company</a>
                        <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                    </div>
                </div>
            </div>
            <!--/owl-carousel__item-->           
        `
    }


    function fullImage1() {
        const images = document.querySelectorAll('.owl-carousel__img img');
        const parent = document.getElementById('fullImg');
        parent.innerHTML = '';
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
});



document.addEventListener('DOMContentLoaded', () => {
    const tabsList = document.getElementById('tabsList');
    const buttons = tabsList.querySelectorAll('[data-type]');



    buttons.forEach((button, i, buttons) => {
        button.addEventListener('click', (e) => {
            buttons.forEach((button) => {
                button.classList.remove('active');
            });
            const tabsContent = document.getElementById('tabsContent');
            button.classList.add('active');
        })
    })

    function renderItems() {
        return `
                       
                        <div class="owl-carousel__item" data-person-type="modeling">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv1.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv2.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
                        <div class="owl-carousel__item" data-person-type="corporate">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv3.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv4.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
                        <div class="owl-carousel__item" data-person-type="corporate">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv3.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv4.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
                        <div class="owl-carousel__item" data-person-type="acting">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv3.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv4.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
                        <div class="owl-carousel__item" data-person-type="acting">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv3.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv4.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
                        <div class="owl-carousel__item" data-person-type="business">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv3.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv1.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
                        <div class="owl-carousel__item" data-person-type="business">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv3.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv1.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
                        <div class="owl-carousel__item" data-person-type="professional">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv2.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv1.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
                        <div class="owl-carousel__item" data-person-type="professional">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv2.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv1.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
                        <div class="owl-carousel__item" data-person-type="company">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv2.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv1.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
                        <div class="owl-carousel__item" data-person-type="company">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv2.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv1.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
                        <div class="owl-carousel__item" data-person-type="group">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv3.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv4.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
                        <div class="owl-carousel__item" data-person-type="officer">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv3.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv1.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
                        <div class="owl-carousel__item" data-person-type="officer">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv1.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv2.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
                        <div class="owl-carousel__item" data-person-type="group">
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv2.jpg" alt="serv1">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                            <div class="owl-carousel__img">
                                <img src="assets/images/services/serv1.jpg" alt="serv2">
                                <div class="owl-carousel__info">
                                    <a class="btn btn--red btn--smallest" href="#">Company</a>
                                    <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>
                                </div>
                            </div>
                        </div>
                        <!--/owl-carousel__item-->
        `
    }
});



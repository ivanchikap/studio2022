document.addEventListener("DOMContentLoaded",(()=>{const s=document.getElementById("headerTop"),e=s.clientHeight;let r=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;function t(r){(r=r.toFixed(0))>e?s.classList.add("fixed"):s.classList.remove("fixed")}t(r),window.addEventListener("scroll",(s=>{r=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,t(r)}))})),document.addEventListener("DOMContentLoaded",(()=>{setTimeout((function(){const s=document.querySelectorAll(".owl-carousel__img img"),e=document.getElementById("fullImg");function r(s,e,r){const t=document.createElement("img");t.src=s,t.alt=e,r.appendChild(t)}r(s[0].src,s[0].alt,e),s.forEach((s=>{s.addEventListener("click",(s=>{const e=document.getElementById("fullImg");e.innerHTML="",r(s.target.src,s.target.alt,e)}))}))}),500)})),document.addEventListener("DOMContentLoaded",(()=>{const s=document.getElementById("burger"),e=(document.getElementById("sidebar"),document.body),r=document.getElementById("pageMask");s.addEventListener("click",(s=>{e.classList.toggle("show-sidebar")})),r.addEventListener("click",(s=>{e.classList.remove("show-sidebar")}))})),document.addEventListener("DOMContentLoaded",(()=>{const s=document.getElementById("nav"),e=document.getElementById("sidebarLinks"),r=s.querySelectorAll(".nav__item"),t=e.querySelectorAll(".nav__item"),a=document.querySelectorAll("#footerLinks .footer__list-link");function i(s){s.forEach((e=>{e.addEventListener("click",(r=>{r.preventDefault(),s.forEach((s=>{s.classList.remove("active")})),e.classList.add("active");const a=e.getAttribute("href").substring(1);document.getElementById(a).scrollIntoView({behavior:"smooth",block:"start"}),t&&document.body.classList.remove("show-sidebar")}))}))}i(r),i(t),i(a)})),document.addEventListener("DOMContentLoaded",(()=>{const s=document.getElementById("tabsList").querySelectorAll("[data-type]"),e=document.getElementById("tabsContent");let r=[{img:{src1:"assets/images/services/serv1.jpg",alt1:"serv1",src2:"assets/images/services/serv2.jpg",alt2:"serv2"},dataPersonType:"modeling"},{img:{src1:"assets/images/services/serv2.jpg",alt1:"serv2",src2:"assets/images/services/serv1.jpg",alt2:"serv1"},dataPersonType:"modeling"},{img:{src1:"assets/images/services/serv3.jpg",alt1:"serv3",src2:"assets/images/services/serv4.jpg",alt2:"serv4"},dataPersonType:"modeling"},{img:{src1:"assets/images/services/serv3.jpg",alt1:"serv3",src2:"assets/images/services/serv4.jpg",alt2:"serv4"},dataPersonType:"corporate"},{img:{src1:"assets/images/services/serv3.jpg",alt1:"serv3",src2:"assets/images/services/serv4.jpg",alt2:"serv4"},dataPersonType:"corporate"},{img:{src1:"assets/images/services/serv3.jpg",alt1:"serv3",src2:"assets/images/services/serv4.jpg",alt2:"serv4"},dataPersonType:"corporate"},{img:{src1:"assets/images/services/serv3.jpg",alt1:"serv3",src2:"assets/images/services/serv4.jpg",alt2:"serv4"},dataPersonType:"corporate"},{img:{src1:"assets/images/services/serv2.jpg",alt1:"serv2",src2:"assets/images/services/serv1.jpg",alt2:"serv1"},dataPersonType:"acting"},{img:{src1:"assets/images/services/serv1.jpg",alt1:"serv1",src2:"assets/images/services/serv2.jpg",alt2:"serv2"},dataPersonType:"acting"},{img:{src1:"assets/images/services/serv2.jpg",alt1:"serv2",src2:"assets/images/services/serv1.jpg",alt2:"serv1"},dataPersonType:"acting"},{img:{src1:"assets/images/services/serv1.jpg",alt1:"serv1",src2:"assets/images/services/serv2.jpg",alt2:"serv2"},dataPersonType:"acting"},{img:{src1:"assets/images/services/serv3.jpg",alt1:"serv1",src2:"assets/images/services/serv4.jpg",alt2:"serv2"},dataPersonType:"business"},{img:{src1:"assets/images/services/serv4.jpg",alt1:"serv4",src2:"assets/images/services/serv3.jpg",alt2:"serv3"},dataPersonType:"business"},{img:{src1:"assets/images/services/serv3.jpg",alt1:"serv1",src2:"assets/images/services/serv4.jpg",alt2:"serv2"},dataPersonType:"business"},{img:{src1:"assets/images/services/serv4.jpg",alt1:"serv4",src2:"assets/images/services/serv3.jpg",alt2:"serv3"},dataPersonType:"business"},{img:{src1:"assets/images/services/serv1.jpg",alt1:"serv1",src2:"assets/images/services/serv2.jpg",alt2:"serv2"},dataPersonType:"professional"},{img:{src1:"assets/images/services/serv2.jpg",alt1:"serv2",src2:"assets/images/services/serv1.jpg",alt2:"serv1"},dataPersonType:"professional"},{img:{src1:"assets/images/services/serv3.jpg",alt1:"serv3",src2:"assets/images/services/serv4.jpg",alt2:"serv4"},dataPersonType:"company"},{img:{src1:"assets/images/services/serv4.jpg",alt1:"serv4",src2:"assets/images/services/serv3.jpg",alt2:"serv3"},dataPersonType:"company"},{img:{src1:"assets/images/services/serv1.jpg",alt1:"serv1",src2:"assets/images/services/serv2.jpg",alt2:"serv2"},dataPersonType:"professional"},{img:{src1:"assets/images/services/serv2.jpg",alt1:"serv2",src2:"assets/images/services/serv1.jpg",alt2:"serv1"},dataPersonType:"professional"},{img:{src1:"assets/images/services/serv3.jpg",alt1:"serv3",src2:"assets/images/services/serv4.jpg",alt2:"serv4"},dataPersonType:"company"},{img:{src1:"assets/images/services/serv4.jpg",alt1:"serv4",src2:"assets/images/services/serv3.jpg",alt2:"serv3"},dataPersonType:"company"},{img:{src1:"assets/images/services/serv1.jpg",alt1:"serv1",src2:"assets/images/services/serv2.jpg",alt2:"serv2"},dataPersonType:"group"},{img:{src1:"assets/images/services/serv2.jpg",alt1:"serv2",src2:"assets/images/services/serv1.jpg",alt2:"serv1"},dataPersonType:"group"},{img:{src1:"assets/images/services/serv1.jpg",alt1:"serv1",src2:"assets/images/services/serv2.jpg",alt2:"serv2"},dataPersonType:"group"},{img:{src1:"assets/images/services/serv4.jpg",alt1:"serv4",src2:"assets/images/services/serv3.jpg",alt2:"serv3"},dataPersonType:"officer"},{img:{src1:"assets/images/services/serv3.jpg",alt1:"serv3",src2:"assets/images/services/serv4.jpg",alt2:"serv4"},dataPersonType:"officer"},{img:{src1:"assets/images/services/serv4.jpg",alt1:"serv4",src2:"assets/images/services/serv3.jpg",alt2:"serv3"},dataPersonType:"officer"},{img:{src1:"assets/images/services/serv3.jpg",alt1:"serv3",src2:"assets/images/services/serv4.jpg",alt2:"serv4"},dataPersonType:"officer"}],t="";function a(s){return`                       \n            <div class="owl-carousel__item" data-person-type=${s.dataPersonType}>\n                <div class="owl-carousel__img">\n                    <img src=${s.img.src1||""} alt=${s.img.alt1||""}>\n                    <div class="owl-carousel__info">\n                        <a class="btn btn--red btn--smallest" href="#">Company</a>\n                        <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>\n                    </div>\n                </div>\n                <div class="owl-carousel__img">\n                    <img src=${s.img.src2||""} alt=${s.img.alt2||""}>\n                    <div class="owl-carousel__info">\n                        <a class="btn btn--red btn--smallest" href="#">Company</a>\n                        <a href="#" class="owl-carousel__info-text">Check Service &#8594;</a>\n                    </div>\n                </div>\n            </div>\n            \x3c!--/owl-carousel__item--\x3e           \n        `}r.forEach((s=>{t+=a(s)})),e.insertAdjacentHTML("afterbegin",t),s.forEach(((s,e,i)=>{s.addEventListener("click",(e=>{i.forEach((s=>{s.classList.remove("active")}));const c=document.getElementById("tabsContent");s.classList.add("active");let n=s.dataset.type,o=r.filter((s=>s.dataPersonType===n));c.innerHTML="",t="",o.forEach((s=>{t+=a(s)})),c.insertAdjacentHTML("afterbegin",t),$("#tabsContent").trigger("destroy.owl.carousel"),$("#tabsContent").owlCarousel({margin:30,items:2,nav:!0,dots:!1,responsive:{0:{margin:15},768:{margin:30}}}),"all"===n&&(c.innerHTML="",t="",o=[...r],o.forEach((s=>{t+=a(s)})),c.insertAdjacentHTML("afterbegin",t),$("#tabsContent").trigger("destroy.owl.carousel"),$("#tabsContent").owlCarousel({margin:30,items:2,nav:!0,dots:!1,responsive:{0:{margin:15},768:{margin:30}}})),function(){const s=document.querySelectorAll(".owl-carousel__img img"),e=document.getElementById("fullImg");function r(s,e,r){const t=document.createElement("img");t.src=s,t.alt=e,r.appendChild(t)}e.innerHTML="",r(s[0].src,s[0].alt,e),s.forEach((s=>{s.addEventListener("click",(s=>{const e=document.getElementById("fullImg");e.innerHTML="",r(s.target.src,s.target.alt,e)}))}))}()}))}))}));
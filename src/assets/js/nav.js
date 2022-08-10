document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    const navSidebar = document.getElementById('sidebarLinks');
    const links = nav.querySelectorAll(".nav__item");
    const sidebarLinks = navSidebar.querySelectorAll(".nav__item");

    onAnchorClick(links);
    onAnchorClick(sidebarLinks);

    function onAnchorClick(links) {
       links.forEach((link) => {
           link.addEventListener('click', (e) => {
               e.preventDefault();

               links.forEach((link) => {
                   link.classList.remove('active');
               });
               link.classList.add('active');

               const blockId = link.getAttribute('href').substring(1);

               document.getElementById(blockId).scrollIntoView({
                   behavior: "smooth",
                   block: "start"
               });

               if (sidebarLinks) {
                   const body = document.body;
                   body.classList.remove("show-sidebar");
               }
           });
       })
    }
});



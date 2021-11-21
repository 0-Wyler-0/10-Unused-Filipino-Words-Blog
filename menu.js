const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-li');
    const navLinks = document.querySelectorAll('.nav-li li');

    menu.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        nav.style.opacity = "1";

        navLinks.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.3}s`;
            }
        });

        menu.classList.toggle('menu-active');

    });

}

navSlide();
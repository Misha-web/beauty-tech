let burgerMenu = document.querySelector('.burger__menu');
let navMenu = document.querySelector('.nav__menu');
let bodyLock = document.querySelector('body')
burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    bodyLock.classList.toggle('lock');
});

window.onscroll = () => {
    const navFixed = document.querySelector('.nav');
    const navSctoll = window.scrollY;
    if (navSctoll > 70) {
        navFixed.classList.add('fixed');
    } else if (navSctoll < 10) {
        navFixed.classList.remove('fixed')
    }
}


let burgerMenu = document.querySelector('.burger__menu');
let navMenu = document.querySelector('.nav__menu');
let bodyLock = document.querySelector('body')
burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    bodyLock.classList.toggle('lock');
});

const navFixed = document.querySelector('.nav');
window.addEventListener('scroll',()=>{
    if  (window.pageYOffset > 50){
        navFixed.classList.add('fade');
    }
   
    if  (window.pageYOffset > 100){
        navFixed.classList.add('fixed');
    }
    else{
        navFixed.classList.remove('fixed')
    }
})
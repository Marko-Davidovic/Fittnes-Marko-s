const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// Diplay Mobile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
   
}
menu.addEventListener('click', mobileMenu);

// Animations

gsap.registerPlugin(ScrollTrigger);

gsap.form('animate-hero', {
    duration:0.6,
    opacity:0,
    y: -150,
    stragger: 0.3
});
gsap.form('animate-serveces', {
    ScrollTrigger:".animate-services",
    duration:0.5,
    opacity:2,
    x: -150,
    stragger: 0.12
});
gsap.form('animate-img', {
    ScrollTrigger:".animate-services",
    duration:1.2,
    opacity:0,
    x: -200,
   
});
gsap.form('animate-membership', {
    ScrollTrigger:".animate-membership",
    duration:1,
    opacity:0,
    y: -150,
    stragger: 0.3,
    delay:0.5
});
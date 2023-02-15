const head = document.querySelector('.head');
const puces = document.querySelectorAll('.puce');
const titre = document.querySelector('.titre');
const carte = document.querySelector('.carte');

window.addEventListener('load', () =>{
    const TL = gsap.timeline({paused: true});
  
    TL
    .from(titre, 1, {top: -100, opacity: 0, ease: "power2.out"})
    .from(carte, 2, {opacity: 0, ease: "power2.out"},'-=0.5')
    .staggerFrom(puces, 0.8, { opacity: 0, ease: "power2.out"}, 0.3, '-=2')

    TL.play();
})
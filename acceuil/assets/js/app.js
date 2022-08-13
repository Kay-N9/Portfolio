const head = document.querySelector('.head');
const puces = document.querySelectorAll('.puce');
const titre = document.querySelector('.titre');
const test = document.querySelector('.test');

window.addEventListener('load', () =>{
    const TL = gsap.timeline({paused: true});
  
    TL
    .from(titre, 0.9, {height: 10, opacity: 0, ease: "power2.out"})
    .staggerFrom(puces, 0.8, {opacity: 0, ease: "power2.out"}, 0.3)

    TL.play();
  })
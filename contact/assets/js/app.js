const h1 = document.querySelectorAll('h1');
const puces = document.querySelectorAll('.puce');
const form = document.querySelectorAll('.sec2');

window.addEventListener('load', () =>{

    const TL = gsap.timeline({paused: true});
  
    TL
    .from(h1, 0.9, {opacity: 0, ease: "power2.out"})
    .staggerFrom(form, 0.8, {opacity: 0, ease: "power2.out"})
    .staggerFrom(puces, 0.8, {opacity: 0, ease: "power2.out"}, 0.3,'-=0.5')

    TL.play();
})

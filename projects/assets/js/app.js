const choix = document.querySelectorAll('.choix');
const puces = document.querySelectorAll('.puce');

window.addEventListener('load', () =>{

    const TL = gsap.timeline({paused: true});
  
    TL
    .staggerFrom(choix, 1.5, {right: -150, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(puces, 0.8, {opacity: 0, ease: "power2.out"}, 0.3,'-=0.5')

    TL.play();
})

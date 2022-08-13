const logo = document.querySelector('.logo');
const titre = document.querySelector('.intro');
const btn = document.querySelector('.btn');
const test = document.querySelector('.wip-transition');

window.addEventListener('load', () =>{
  const TL = gsap.timeline({paused: true});

  TL
  .staggerFrom(logo, 0.5, { opacity: 0, ease: "power2.out"})
  .staggerFrom(titre, 1, {width: 0, opacity: 0, ease: "power2.out"})
  .staggerFrom(btn, 2, {height: 0, opacity: 0,  ease: "power2.out"})

  TL.play();
})


const puces = document.querySelectorAll('.puce'); //Selection des nav

//La fonction vas faire apparaitre mes puces à la suite à l'acctualisation.
window.addEventListener("load", () =>{

    const TL = gsap.timeline({paused: true});
  
    TL
    .staggerFrom(puces, 0.8, {opacity: 0, ease: "power2.out"}, 0.3)

    TL.play();
});


window.onload = function() {
    const sections = document.querySelectorAll("section"); //Selection des section
    const navA = document.querySelectorAll(".puce"); //Selection des puces
  
    function updateActiveSection() {
        // On initialise les deux variable qui vont nous servire de receptacle pour les section et la puces.
      let maxVisibleArea = 0;
      let activeSection = null;
  
      sections.forEach((section) => {
          const visibleArea = getVisibleArea(section);
          
          if (visibleArea > maxVisibleArea) {
              maxVisibleArea = visibleArea;
              activeSection = section.getAttribute("id");
              console.log(activeSection);
              section.classList.add("fadeIn");
            }else{
                section.classList.remove("fadeIn");

            }
        });
        
        navA.forEach((a) => {
            a.classList.remove("active");
            if (a.classList.contains(activeSection)) {
              a.classList.add("active");
        }
      });
    }
  
    function getVisibleArea(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
      return visibleHeight * visibleWidth;
    }
  
    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);
  };
  // Rest of the code
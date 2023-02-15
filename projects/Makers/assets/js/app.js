const options = {
    root: null, 
    //initialisation (la root vas verfier l'etat des target elle doit donc étre null)
    rootMargin: '0px', 
    
    threshold: 0.5 
  }
  
const callback = (entries, observer) => {
    
    entries.forEach(entry => {
      
      if (entry.isIntersecting){
        
        Motion
        .animate( entry.target, { opacity: 1, transform: "translateY(0px)"}, {duration: 1,easing: "ease-out",});
        
      }
    });
};
  
  const observer = new IntersectionObserver(callback, options);
  
  const targets = document.querySelectorAll('.appear');
  targets.forEach((target) => {
    observer.observe(target);
  });
  
  
  
  
  
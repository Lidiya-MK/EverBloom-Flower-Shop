window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.flower-section');
  const windowHeight = window.innerHeight;
  const navbar = document.querySelector('.navbar'); 
  const navbarHeight = navbar.offsetHeight; 

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;


    if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
   
      const visibleHeight = Math.min(windowHeight - sectionTop, sectionHeight);
     
      const scale = 1 + (visibleHeight / sectionHeight) * 0.5; 


      section.style.transform = `scale(${scale})`;
    } else {
    
      section.style.transform = `scale(1)`;
    }
  });
});


window.addEventListener('scroll', function() {
  const logo = document.querySelector('.logo-red');
  const scrollPosition = window.scrollY;
  const rotationDegree = scrollPosition * 0.5; 
  logo.style.transform = `rotate(${rotationDegree}deg)`;
});




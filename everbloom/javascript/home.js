
  window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo-red');
    const scrollPosition = window.scrollY;
    const rotationDegree = scrollPosition * 0.5; 
    logo.style.transform = `rotate(${rotationDegree}deg)`;
  });

  
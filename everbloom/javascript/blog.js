document.addEventListener("scroll", () => {
    const blogCards = document.querySelectorAll(".blog-card");
    blogCards.forEach((card) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (cardPosition < screenPosition) {
            card.classList.add("show");
        }
    });
});


window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo-red');
    const scrollPosition = window.scrollY;
    const rotationDegree = scrollPosition * 0.5;
    logo.style.transform = `rotate(${rotationDegree}deg)`;
  });

  
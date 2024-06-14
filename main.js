document.querySelector('.button').addEventListener('click', () => {
  document.querySelector('.menu__list')
    .classList.toggle('menu__list--animate');
});

let slideIndex = 0;
function plusSlides(n) {
  let slides = document.getElementsByClassName("slide");

  // Cache la slide actuelle avec une transition de fondu
  slides[slideIndex].classList.remove('show');
  
  // Utilise setTimeout pour attendre la fin de la transition avant de changer le display
  setTimeout(() => {
      slides[slideIndex].style.display = "none";
      
      // Calcule le nouvel index de slide
      slideIndex = (slideIndex + n + slides.length) % slides.length;
      
      // Affiche la nouvelle slide
      slides[slideIndex].style.display = "block";
      setTimeout(() => {
          slides[slideIndex].classList.add('show');
      }, 20); // Un léger délai pour permettre au navigateur de re-render avant d'ajouter la classe
  }, 500); // Durée de la transition en millisecondes
}

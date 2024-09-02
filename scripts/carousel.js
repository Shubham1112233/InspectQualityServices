const carousel = document.querySelector('.custom-carousel');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let scrollIndex = 0;
const slideWidth = document.querySelector('.custom-carousel-slide').offsetWidth + 20; // Slide width + gap
const visibleSlides = 4; // Number of visible slides

nextButton.addEventListener('click', () => {
  scrollIndex++;
  if (scrollIndex > carousel.children.length - visibleSlides) {
    scrollIndex = 0; // Loop back to the start
  }
  carousel.style.transform = `translateX(-${slideWidth * scrollIndex}px)`;
});

prevButton.addEventListener('click', () => {
  scrollIndex--;
  if (scrollIndex < 0) {
    scrollIndex = carousel.children.length - visibleSlides;
  }
  carousel.style.transform = `translateX(-${slideWidth * scrollIndex}px)`;
});

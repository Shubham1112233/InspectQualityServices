const carousel = document.querySelector('.custom-carousel');
const scrollButton = document.querySelector('#scroll-right');

// Set an index to track the scroll position
let scrollIndex = 0;

// Function to scroll the carousel
scrollButton.addEventListener('click', () => {
  const slideWidth = document.querySelector('.custom-carousel-slide').offsetWidth + 20; // Slide width + gap

  // Update the scroll index
  scrollIndex++;

  // Scroll the carousel
  carousel.style.transform = `translateX(-${slideWidth * scrollIndex}px)`;

  // Reset to the first slide after reaching the end
  if (scrollIndex >= carousel.children.length - 4) {
    scrollIndex = -1;
  }
});

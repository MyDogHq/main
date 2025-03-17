// JavaScript for Carousel Functionality
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carouselContainer = document.querySelector('.carousel-container');

let currentSlide = 0;
let autoSlideInterval;
const autoSlideTime = 10000; // 5 seconds

// Function to show the current slide
function showSlide(index) {
  const totalSlides = slides.length;

  // Loop around if out of bounds
  if (index < 0) currentSlide = totalSlides - 1;
  else if (index >= totalSlides) currentSlide = 0;
  else currentSlide = index;

  // Move carousel container to show the current slide
  const offset = -currentSlide * 100; // 100% for each slide
  carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Event Listeners for Buttons
prevButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
  restartAutoSlide();
});
nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
  restartAutoSlide();
});

// Auto Slide Functionality
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, autoSlideTime);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function restartAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Pause on Hover
document.querySelector('.hero-carousel').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.hero-carousel').addEventListener('mouseout', startAutoSlide);

// Start the carousel
startAutoSlide();


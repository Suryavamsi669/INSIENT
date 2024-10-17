let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1; // Go to last slide
    } else if (index >= slides.length) {
        currentSlide = 0; // Go to first slide
    } else {
        currentSlide = index;
    }
    
    const slideWidth = slides[currentSlide].clientWidth; // Get slide width
    const offset = -currentSlide * slideWidth; // Calculate offset
    document.querySelector('.slides').style.transform = `translateX(${offset}px)`; // Move to the current slide
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initial call to display the first slide
showSlide(currentSlide);

let slideIndex = 0;
let slideshowInterval;

function startSlideshow() {
    const slides = document.querySelectorAll("#slideshow img");

    if (slideshowInterval) {
        clearInterval(slideshowInterval);
    }

    slides.forEach(slide => (slide.style.display = "none"));

    slideshowInterval = setInterval(() => {
        slides.forEach(slide => (slide.style.display = "none")); 
        slideIndex = (slideIndex + 1) % slides.length; 
        slides[slideIndex].style.display = "block"; 
    }, 3000);
}

document
    .getElementById("monitorizare-resurse")
    .addEventListener("dblclick", startSlideshow);

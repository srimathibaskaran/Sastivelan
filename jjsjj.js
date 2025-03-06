let currentIndex = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= dots.length) index = 0;
    if (index < 0) index = dots.length - 1;

    slides.style.transform = `translateX(${-index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    currentIndex = index;
}

function currentSlide(index) {
    showSlide(index);
}

function autoSlide() {
    showSlide(currentIndex + 1);
}

dots[currentIndex].classList.add("active"); // Set initial active dot
setInterval(autoSlide, 3000); // Auto-slide every 3 seconds

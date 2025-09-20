// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('#navbar ul');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Contact form validation
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
    } else {
      formMessage.textContent = "Thank you! Your message has been sent.";
      formMessage.style.color = "green";
      form.reset();
    }
  });
}


// Hero slider
const slideContainers = document.querySelectorAll(".hero-slide-container");
let currentSlide = 0;

function showSlide(index) {
  slideContainers.forEach((container, i) => {
    container.classList.remove("active");
    if (i === index) {
      container.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideContainers.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 8000);

// Carousel
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");
let carousel_slide = 0;

function showCarouselSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

// Show first slide
showCarouselSlide(carousel_slide);

// Next/Prev buttons
nextBtn.addEventListener("click", () => {
  carousel_slide = (carousel_slide + 1) % slides.length;
  showCarouselSlide(carousel_slide);
});

prevBtn.addEventListener("click", () => {
  carousel_slide = (carousel_slide- 1 + slides.length) % slides.length;
  showCarouselSlide(carousel_slide);
});

// Optional: auto-slide every 6 seconds
setInterval(() => {
  carousel_slide = (carousel_slide + 1) % slides.length;
  showCarouselSlide(carousel_slide);
}, 6000);



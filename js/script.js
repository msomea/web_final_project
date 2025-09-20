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


// Hero slider with zoom effect
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initial load
showSlide(currentSlide);

// Change every 8s
setInterval(nextSlide, 8000);

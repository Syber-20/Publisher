// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle navbar visibility with logo click
const logoToggle = document.querySelector('#logo-toggle');
const navMenu = document.querySelector('.nav-menu');

logoToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Hamburger menu toggle (for mobile screens)
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});
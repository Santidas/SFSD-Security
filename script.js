// SFSD Security Site JavaScript
// Handles mobile navigation toggle, reveal-on-scroll animations and form label floats.

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      header.classList.toggle('nav-open');
    });
  }

  // Reveal animations using IntersectionObserver
  const reveals = document.querySelectorAll('.reveal');
  const observerOptions = {
    threshold: 0.15
  };
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  reveals.forEach(el => {
    revealObserver.observe(el);
  });

  // Form label float and filled state
  const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
  inputs.forEach(input => {
    // set initial filled state
    if (input.value.trim() !== '') {
      input.classList.add('filled');
    }
    input.addEventListener('focus', () => {
      input.classList.add('filled');
    });
    input.addEventListener('blur', () => {
      if (input.value.trim() === '') {
        input.classList.remove('filled');
      }
    });
  });
});
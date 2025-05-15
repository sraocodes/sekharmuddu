document.addEventListener('DOMContentLoaded', () => {
    const btn   = document.querySelector('.menu-toggle');
    const nav   = document.querySelector('aside');
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  });
  
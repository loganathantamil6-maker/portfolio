const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu-btn');
menu.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

const btn = document.querySelector('.menu-button');
const links = document.querySelector('.nav-links');
if (btn && links) {
  btn.addEventListener('click', () => links.classList.toggle('open'));
}
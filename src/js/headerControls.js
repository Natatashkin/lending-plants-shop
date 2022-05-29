const buttonsContainer = document.querySelector('[data-auth-controls]');

buttonsContainer.addEventListener('click', onClick);

function resetActiveButton() {
  const links = document.querySelectorAll('.link');
  links.forEach(link => link.classList.remove('active'));
}

function setActiveButton(selector) {
  resetActiveButton();
  selector.classList.add('active');
}

function onClick(e) {
  resetActiveButton();
  setActiveButton(e.target);
}

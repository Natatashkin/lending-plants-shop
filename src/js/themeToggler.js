const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  toggler: document.querySelector('.theme-switch__toggle'),
  navbarIcons: document.querySelectorAll('.options-icon'),
  sliderGradientBg: document.querySelector('.slider'),
  sliderButtons: document.querySelectorAll('.slider-button'),
  sliderPagination: document.querySelectorAll('.arrow'),
  sliderBackground: document.querySelector('.slider-container'),
  sliderDesctiption: document.querySelector('.slider-descr'),
};

const { DARK } = Theme;
const {
  body,
  toggler,
  sliderGradientBg,
  sliderButtons,
  sliderPagination,
  sliderBackground,
  sliderDesctiption,
  navbarIcons,
  lightBoxBackground,
} = refs;

toggler.addEventListener('change', onTogglerClick);

function onTogglerClick(e) {
  console.log(e.currentTarget);
  if (e.currentTarget.checked) {
    setDarkTheme();
    localStorage.setItem('theme', DARK);
  } else {
    localStorage.removeItem('theme');
    setLightTheme();
  }
}

function setLightTheme() {
  body.classList.remove('dark-theme');
  setLightThemeForHeaderIcons();
  setLightThemeForSlider();
}

function setDarkTheme() {
  body.classList.add('dark-theme');

  setDarkThemeForHeaderIcons();
  setDarkThemeForSlider();
}

export function setLightboxDarkTheme() {
  const lightBoxBackground = document.querySelector('.lightbox');
  console.log(lightBoxBackground);
  lightBoxBackground.classList.add('dark-theme');
}

export function setLightboxLightTheme() {
  const lightBoxBackground = document.querySelector('.lightbox');

  lightBoxBackground.classList.remove('dark-theme');
}

function setDarkThemeForSlider() {
  sliderGradientBg.classList.add('dark-theme');
  sliderButtons.forEach(button => button.classList.add('dark-theme'));
  sliderPagination.forEach(arrow => arrow.classList.add('dark-theme'));
  sliderBackground.classList.add('dark-theme');
  sliderDesctiption.classList.add('dark-theme');
}

function setLightThemeForSlider() {
  sliderButtons.forEach(button => button.classList.remove('dark-theme'));
  sliderGradientBg.classList.remove('dark-theme');
  sliderPagination.forEach(arrow => arrow.classList.remove('dark-theme'));
  sliderBackground.classList.remove('dark-theme');
  sliderDesctiption.classList.remove('dark-theme');
}

function setDarkThemeForHeaderIcons() {
  navbarIcons.forEach(icon => icon.classList.add('dark-theme'));
}

function setLightThemeForHeaderIcons() {
  navbarIcons.forEach(icon => icon.classList.remove('dark-theme'));
}

function setCurrentTheme() {
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    toggler.checked = true;
    setDarkTheme();
  }
}

export default setCurrentTheme;

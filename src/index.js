import './sass/main.scss';
import './js/themeToggler';
import setCurrentTheme from './js/themeToggler';
import sliderInfo from './js/slider.json';
import Slider from './js/slider';
import './js/featured';
import './js/backdrop';

const slider = new Slider({
  sliderData: sliderInfo,
  imagesContainer: '[data-images]',
  sliderInfoSelector: '[data-info]',
  prevBtnSelector: '[data-action="previous"]',
  nextBtnSelector: '[data-action="next"]',
});

setCurrentTheme();

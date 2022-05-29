import './sass/main.scss';
import './js/headerControls';
import './js/themeToggler';
import setCurrentTheme from './js/themeToggler';
import sliderInfo from './js/slider.json';
import Slider from './js/slider';
import './js/featured';
import './js/backdrop';

setCurrentTheme();

new Slider({
  sliderData: sliderInfo,
  imagesContainer: '[data-images]',
  sliderInfoSelector: '[data-info]',
  prevBtnSelector: '[data-action="previous"]',
  nextBtnSelector: '[data-action="next"]',
});

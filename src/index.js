import './sass/main.scss';
import sliderInfo from './js/slider.json';
import Slider from './js/slider';

const slider = new Slider({
  sliderData: sliderInfo,
  imagesContainer: '[data-images]',
  sliderInfoSelector: '[data-info]',
  prevBtnSelector: '[data-action="previous"]',
  nextBtnSelector: '[data-action="next"]',
});

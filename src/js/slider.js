import sliders from './slider.json';

console.log(sliders);

const refs = {
  sliderImage: document.querySelector('[data-image]'),
  sliderInfo: document.querySelector('[data-info]'),
  sliderButtons: document.querySelector('[data-controls]'),
};

refs.sliderButtons.addEventListener('click', onSliderBtnClick);

function onSliderBtnClick(e) {}

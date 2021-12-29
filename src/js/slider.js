export default class Slider {
  constructor({
    sliderData,
    imagesContainer,
    sliderInfoSelector,
    prevBtnSelector,
    nextBtnSelector,
  }) {
    this.currentIndex = 0;
    this.sliderInfo = sliderData;
    this.refs = this.getRefs(
      imagesContainer,
      sliderInfoSelector,
      prevBtnSelector,
      nextBtnSelector,
    );

    this.init();
  }

  getRefs(
    imagesContainer,
    sliderInfoSelector,
    prevBtnSelector,
    nextBtnSelector,
  ) {
    const refs = {};
    refs.imagesContainer = document.querySelector(imagesContainer);
    refs.images = refs.imagesContainer.querySelectorAll('.slide');
    refs.sliderDescription = document.querySelector(sliderInfoSelector);
    refs.sliderTitle = refs.sliderDescription.querySelector('.slider-title');
    refs.sliderText = refs.sliderDescription.querySelector('.slider-descr');
    refs.prevButton = document.querySelector(prevBtnSelector);
    refs.prevBtnTitle = refs.prevButton.querySelector('.js-prev');
    refs.nextButton = document.querySelector(nextBtnSelector);
    refs.nextBtnTitle = refs.nextButton.querySelector('.js-next');
    return refs;
  }

  init() {
    this.normalizeDataObject();
    this.setSliderMainContent();
    this.addEventListeners();
  }

  setSliderHeight() {
    const innerHeight = window.innerHeight;
    const slider = document.querySelector('.slider-container');
    slider.style.height = `${innerHeight}px`;
  }

  normalizeDataObject() {
    const { sliderInfo, refs } = this;
    const { images } = refs;
    const imagesLinks = [...images].map(image => image.src);

    sliderInfo.map((item, index) => (item.src = imagesLinks[index]));
  }

  onPrevButtonClick() {
    console.log('клик по prevButton');
    this.decrementIndex();
    this.setSliderMainContent();
  }

  onNextButtonClick() {
    console.log('клик по nextButton');
    this.incrementIndex();
    this.setSliderMainContent();
  }

  addEventListeners() {
    this.refs.prevButton.addEventListener(
      'click',
      this.onPrevButtonClick.bind(this),
    );
    this.refs.nextButton.addEventListener(
      'click',
      this.onNextButtonClick.bind(this),
    );
  }

  setSliderMainContent() {
    const { sliderInfo, currentIndex } = this;
    const { sliderTitle, sliderText, images } = this.refs;

    const currentSliderInfo = sliderInfo[currentIndex];
    sliderTitle.textContent = currentSliderInfo.title;
    sliderText.textContent = currentSliderInfo.description;

    this.resetActiveImage();

    const currentImage = [...images].find(
      el => el.src === currentSliderInfo.src,
    );

    currentImage.classList.add('is-active');
    this.setButtonsContent();
    this.setSliderHeight();
  }

  resetActiveImage() {
    const { imagesContainer } = this.refs;
    const activeImage = imagesContainer.querySelector('.is-active');
    if (activeImage) {
      activeImage.classList.remove('is-active');
    }
  }

  setButtonsContent() {
    const { sliderInfo, refs } = this;
    const { prevBtnTitle, nextBtnTitle } = refs;

    const indexPrevBtn = this.decrementIndexForButtons();
    const indexNextBtn = this.incrementIndexForButtons();

    const titleForPrevBtn = sliderInfo[indexPrevBtn];
    const titleForNextBtn = sliderInfo[indexNextBtn];
    prevBtnTitle.textContent = titleForPrevBtn.title;
    nextBtnTitle.textContent = titleForNextBtn.title;
  }

  incrementIndex() {
    if (this.currentIndex === this.sliderInfo.length - 1) {
      this.currentIndex = 0;
      return;
    }
    this.currentIndex += 1;
  }

  decrementIndex() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.sliderInfo.length - 1;
      return;
    }

    this.currentIndex -= 1;
  }

  incrementIndexForButtons() {
    let index = this.currentIndex + 1;
    if (index > this.sliderInfo.length - 1) {
      index = 0;
      return index;
    }
    return index;
  }
  decrementIndexForButtons() {
    let index = this.currentIndex - 1;
    if (index < 0) {
      index = this.sliderInfo.length - 1;
      return index;
    }
    return index;
  }
}

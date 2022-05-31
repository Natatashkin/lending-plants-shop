import dividePrice from './helpers/dividePrice';
import setCurrentTheme, {
  setLightboxDarkTheme,
  setLightboxLightTheme,
} from './themeToggler';

export default class LightBox {
  constructor({ product }) {
    this.refs = {};
    this.quantityValue = 1;
    this.totalValue = 0;
    this.product = product;
    this.divider = dividePrice;

    this.setLightboxDarkTheme = setLightboxDarkTheme;
    this.setLightboxLightTheme = setLightboxLightTheme;
    this.backdrop = document.querySelector('.backdrop');
    console.log(setLightboxDarkTheme);
  }

  init() {
    this.renderLightboxMarkup(this.product);
    this.refs = { ...this.getRefs() };
    this.checkCurrentTheme();
    this.countTotal();
    this.addEventListeners();
  }
  renderLightboxMarkup(item) {
    this.backdrop.innerHTML = '';
    const { title, price, descr, src, srcset } = item;
    const markup = `
    <div class="lightbox">
      <div class="lightbox-wrapper">
        <div class="lightbox-info">
          <div class="lightbox-image">
            <div class="thumb">
              <img
            class="item-image"
            srcset="${srcset}"
            src="${src}"
            alt="${title}"
            width="217"
            />
            </div>
          </div>

          <div class="lightbox-options">
            <p class="price">Price: ${this.divider(price)} IDR</p>

            <div class="quantity">
              <p class="text">Quantity:</p>

              <div class="options" data-quantity-controls>
                <button type="button" class="option js-decrement">-</button>
                <span class="quantity-value js-value">${
                  this.quantityValue
                }</span>
                <button type="button" class="option js-increment">+</button>
              </div>
            </div>

            <p class="total-price"> Total price:
              <span class="value js-total">${this.totalValue}</span>
              <span class="currency">IDR</span>
            </p>
            
            <button class="add-to-cart js-add" type="button">Add to cart!</button>
          </div> 
        </div>
        <p class="lightbox-desciption">${descr}</p>
      </div>
    </div>
    `;
    this.backdrop.insertAdjacentHTML('afterbegin', markup);
  }

  getRefs() {
    return {
      quantity: document.querySelector('.js-value'),
      quantityController: document.querySelector('[data-quantity-controls]'),
      total: document.querySelector('.js-total'),
    };
  }

  checkCurrentTheme() {
    const currentTheme = localStorage.getItem('theme');
    console.log(currentTheme);
    if (currentTheme) {
      this.setLightboxDarkTheme();
    }
  }

  addEventListeners() {
    this.refs.quantityController.addEventListener(
      'click',
      this.handleQuantityClick.bind(this),
    );
  }

  handleQuantityClick(e) {
    if (e.target.classList.contains('js-increment')) {
      this.refs.quantity.textContent = this.increment();
      this.countTotal();
      return;
    }

    this.refs.quantity.textContent = this.decrement();
    this.countTotal();
    return;
  }

  increment() {
    this.quantityValue += 1;
    return this.quantityValue;
  }

  decrement() {
    if (this.quantityValue === 0) {
      this.quantityValue = 0;
      return this.quantityValue;
    }
    this.quantityValue -= 1;
    return this.quantityValue;
  }

  countTotal() {
    const { price } = this.product;
    if (!this.quantityValue) {
      this.refs.total.textContent = '0';
    }
    this.totalValue = price * this.quantityValue;
    this.refs.total.textContent = this.divider(this.totalValue);
  }
}

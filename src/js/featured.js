import { modal } from './backdrop';
import products from './products.json';
import LightBox from './lightbox';
import dividePrice from './helpers/dividePrice';

import kaktusPlants217 from '../images/featured/kaktus-plants/kaktus-plants-217.jpg';
import kaktusPlants434 from '../images/featured/kaktus-plants/kaktus-plants-434.jpg';
import kecubungPlants217 from '../images/featured/kecubung-plants/kecubung-plants-217.jpg';
import kecubungPlants434 from '../images/featured/kecubung-plants/kecubung-plants-434.jpg';
import kecubungPlants2217 from '../images/featured/kecubung-plants2/kecubung-plants-2-217.jpg';
import kecubungPlants2434 from '../images/featured/kecubung-plants2/kecubung-plants-2-434.jpg';
import kekubungPlants3217 from '../images/featured/kecubung-plants3/kecubung-plants-3-217.jpg';
import kekubungPlants3434 from '../images/featured/kecubung-plants3/kecubung-plants-3-434.jpg';
import landakPlants217 from '../images/featured/landak-plants/landak-plants-217.jpg';
import landakPlants434 from '../images/featured/landak-plants/landak-plants-434.jpg';

const productImages = [
  kaktusPlants217,
  kaktusPlants434,
  landakPlants217,
  landakPlants434,
  kecubungPlants217,
  kecubungPlants434,
  kecubungPlants2217,
  kecubungPlants2434,
  kekubungPlants3217,
  kekubungPlants3434,
];

const refs = {
  productList: document.querySelector('.featured-list'),
  lightbox: document.querySelector('.lightbox'),
};

let index = 0;

products.forEach(product => {
  product.src = `${productImages[index]}`;
  product.srcset = `${productImages[index]} 1x, ${productImages[index + 1]} 2x`;
  index += 2;
});
renderFeaturedMarkup(products);

refs.productList.addEventListener('click', onProductClick);

function onProductClick(e) {
  const currentProduct = e.target.closest('.featured-item');
  const itemId = Number(currentProduct.dataset.id);
  const item = products.find(({ id }) => id === itemId);
  const lightbox = new LightBox({ product: item });
  modal.onOpen();
  lightbox.init();
}

function renderFeaturedMarkup(items) {
  const markup = items
    .map(({ id, price, src, srcset, title }) => {
      return `<li class="featured-item" data-id="${id}">
      <div class="item-thumb">
        <img
        class="item-image"
        srcset="${srcset}"
        src="${src}"
        alt="${title}"
        width="217"
        />
      </div>
      <h3 class="item-title">${title}</h3>
      <p class="item-price">
        <span class="currensy">IDR </span>
        <span class="price">${dividePrice(price)}</span>
      </p>
    </li>`;
    })
    .join('');

  refs.productList.insertAdjacentHTML('beforeend', markup);
}

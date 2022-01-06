import { lightbox } from './lightbox';

export const modal = {
  body: document.querySelector('body'),
  backdrop: document.querySelector('.backdrop'),

  onOpen() {
    this.body.classList.add('show-modal');
    this.bindEvents();
    window.addEventListener('keydown', this.escapeHandler);
    this.backdrop.addEventListener('click', this.backdropClickHandler);
  },

  onClose() {
    this.backdrop.removeEventListener('click', this.backdropClickHandler);
    window.removeEventListener('keydown', this.escapeHandler);
    this.body.classList.remove('show-modal');
  },

  onEscapePress(e) {
    if (e.key === 'Escape') {
      this.onClose();
    }
  },

  onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      this.onClose();
    }
  },

  bindEvents() {
    this.escapeHandler = this.onEscapePress.bind(this);
    this.backdropClickHandler = this.onBackdropClick.bind(this);
  },
};

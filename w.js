import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const imageContainer = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const listItem = document.createElement('li');
  const galleryLink = document.createElement('a'); // Fixed variable name here
  const pic = document.createElement('img');

  listItem.setAttribute('class', 'gallery__item');
  galleryLink.setAttribute('class', 'gallery__link');
  galleryLink.setAttribute('href', item.original);
  pic.setAttribute('class', 'gallery__image');
  pic.setAttribute('src', item.preview);
  pic.setAttribute('alt', item.description);

  galleryLink.append(pic);
  listItem.append(galleryLink);
  imageContainer.append(listItem);
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  closeText: 'X',
  animationSlide: false,
});

// libraries
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// data
import { galleryItems } from './gallery-items';

// code
const galleryRef = document.querySelector('.gallery');
galleryRef.innerHTML = createGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery .gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
          </a>
        </li>`
    )
    .join('');
}

// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
import createHtmlGalleryImgs from "./modules/createHtmlGalleryImgs";
// Change code below this line

document.querySelector('.gallery').insertAdjacentHTML("beforeend", createHtmlGalleryImgs(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
  close: false, 
  showCounter: false,
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'text__label',
});

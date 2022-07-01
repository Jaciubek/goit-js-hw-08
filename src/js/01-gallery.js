// 01-gallery.js
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const galery = document.querySelector(".gallery");
const markup = galleryItems
  .map((img) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`
  )
  .join("");

galery.insertAdjacentHTML("beforeend", markup);
const lightbox = new SimpleLightbox('.gallery__link', {
    captionsData: "alt",
    captionDelay: 250,
});
console.log(galleryItems);

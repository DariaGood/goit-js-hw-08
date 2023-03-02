// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
//  Імпорт бібліотеки  і стилів
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const gallery = document.querySelector('.gallery');

// Додаю зображення із gallery-items.js до елемента (клас .gallery у HTML )

gallery.insertAdjacentHTML(
  'afterbegin',
  galleryItems
    .map(
      galleryItem =>
        `<a class="gallery__item" href="${galleryItem.original}">
        <img class="gallery__image"
        src="${galleryItem.preview}" 
        alt= "${galleryItem.description}"></a>`
    )
    .join('')
);

// Застосування SimpleLightbox 

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
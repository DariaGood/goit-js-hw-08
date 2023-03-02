// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

//  Імпорт бібліотеки  і стилів
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);


const galleryGeneral = document.querySelector(".gallery");


//Додаємо галерею на сторінку
const newArrayImages = galleryItems
  .map(
    (image) => `<a class="gallery__item" href="${image.original}">
<img class="gallery__image" 
src="${image.preview}" 
alt="${image.description}" />
</a>`
  )
  .join(""); // Дуже важливо!!!
galleryGeneral.insertAdjacentHTML("afterbegin", newArrayImages);

//Додаємо SimpleLightbox - бібліотеку JS для галереї

let gallery = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });
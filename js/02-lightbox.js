import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryItemsRef = document.querySelector(".gallery");
const cardsMarkup = createCardsMarkup(galleryItems);
galleryItemsRef.insertAdjacentHTML('beforeend', cardsMarkup);


function createCardsMarkup(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class = "gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>
</div>`;        
}).join('');
};

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });



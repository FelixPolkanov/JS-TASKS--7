import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsRef = document.querySelector(".gallery");
const cardsMarkup = createCardsMarkup(galleryItems);
galleryItemsRef.insertAdjacentHTML('beforeend', cardsMarkup);
galleryItemsRef.addEventListener('click', onGalleryItemsClick)
let modalOpenOnClick;
let addClassOnPictureClickRef;


function createCardsMarkup(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class = "gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</div>`;        
}).join('');
};


function onGalleryItemsClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
      return;
}
 

modalOpenOnClick = basicLightbox.create(`
    <img src = "${event.target.dataset.source}">`);
  modalOpenOnClick.show();
     if (modalOpenOnClick) {
    window.addEventListener('keydown', closeModalOnEscButton);
    addClassOnPictureClickRef =  document.querySelector(".basicLightbox");      
}
}


function closeModalOnEscButton(event) {
   console.log("listerning result:", event.code);
  if (event.code === 'Escape' || !addClassOnPictureClickRef.classList.contains("basicLightbox--visible")) {
    window.removeEventListener('keydown', closeModalOnEscButton);
    console.log("listener was removed !!!");
    modalOpenOnClick.close();       
}
}





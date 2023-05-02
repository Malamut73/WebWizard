const popupAgry = document.querySelector('.popup__agry');
const callbackPopupAgry = document.querySelector('.callback__popup-span-strong');
const popup = document.querySelector('.order__popup');
const closePopup = document.querySelector('.order__popup-close');

popupAgry.addEventListener('click', () =>{
    document.body.style.overflow = "hidden";
    popup.style.display = "block";

})

callbackPopupAgry.addEventListener('click', () =>{
    document.body.style.overflow = "hidden";
    popup.style.display = "block";

})

closePopup.addEventListener('click', () => {
    document.body.style.overflow = "";
    popup.style.display = "none"
})

popup.addEventListener('click', () => {
    document.body.style.overflow = "";
    popup.style.display = "none"
})
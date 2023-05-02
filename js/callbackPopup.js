function callbackPopup() {
    const callbackCloseBtn = document.querySelector('.callback__popup-close')
    const popup = document.querySelector('.callback__popup');
    const callbackIcon = document.querySelector('.callback__icon');
    const callbackPopupBtn = document.querySelector('.callback__popup-button');

    callbackCloseBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        callbackIcon.style.display = 'block';
    });

    callbackIcon.addEventListener('click', () => {
        popup.style.display = 'block';
        callbackIcon.style.display = 'none';

    });

    callbackPopupBtn.addEventListener('click', (event) => {
      event.preventDefault();
      callbackSendler();

    });

    setTimeout(() => {
      if (popup) {
        popup.style.display = 'block';
      }
    }, 5000);
}

callbackPopup();


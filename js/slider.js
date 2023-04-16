let currentIndex = 0;
const items = document.querySelectorAll('.slider__item');
const tabs = document.querySelectorAll('.slider__icon');
const prev = document.querySelector('.slider__btns-prev');
const next = document.querySelector('.slider__btns-next');

function hideSlider(){
    items.forEach(element => {
        element.style.display = 'none';
    });

    tabs.forEach(element => {
        element.classList.remove('slider__icon-active');
    });
}

function showTabContent(i = 0){
    items[i].style.display = 'flex';
    tabs[i].classList.add('slider__icon-active');
}

prev.addEventListener('click', () => {
    currentIndex === 0 ? currentIndex = 2 : currentIndex--; 

    hideSlider();
    showTabContent(currentIndex);  });
  
next.addEventListener('click', () => {
    currentIndex === 2 ? currentIndex = 0 : currentIndex++; 

    hideSlider();
    showTabContent(currentIndex);
  });

function checkIndex(currentIndex) {
    if (currentIndex > 3) {
        currentIndex = 0;
    }
    return currentIndex;
}  
function autoPlay() {
    setInterval(() => {
      currentIndex === 2 ? currentIndex = 0 : currentIndex++;
      hideSlider();
      showTabContent(currentIndex);
    }, 10000);
  }

hideSlider();
showTabContent();
autoPlay();
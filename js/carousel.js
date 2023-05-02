let carousIndex = 0;
let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
let itemsCarus = document.querySelectorAll('.slider-item');
const itemsCount = itemsCarus.length;
const itemWidth = 302;
const icons = document.querySelectorAll('.service__icon');


const movePosition = slidesToScroll * itemWidth;
const interval = 6000; 

itemsCarus.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;  
});

const moveSlide = () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  if (position <= -(itemsCount - slidesToShow) * itemWidth) {
    track.appendChild(itemsCarus[0]);
    itemsCarus = document.querySelectorAll('.slider-item');
    position += itemWidth;
    setPosition();
  } else {
    setPosition();
  }

  hideCarous();
  showCarous();

};

const setPosition = () =>{
    track.style.transform = `translateX(${position}px)`;
};

function hideCarous(){

  icons.forEach(element => {
      element.classList.remove('service__icon-active');
  });
}

function showCarous(){

  icons[carousIndex].classList.add('service__icon-active');
  if(carousIndex === 3){
    carousIndex = 0
  }else{
    carousIndex += 1;
  }

}

showCarous();
setInterval(moveSlide, interval);
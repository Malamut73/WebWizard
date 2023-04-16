// let position = 0;
// const slidesToShow = 2;
// const slidesToScroll = 1;
// const container = document.querySelector('.slider-container');
// const track = document.querySelector('.slider-track');
// const btnPrev = document.querySelector('.slider-prev');
// const btnNext = document.querySelector('.slider-next');
// const itemsCarus = document.querySelectorAll('.slider-item');
// const itemsCount = itemsCarus.length;
// const itemWidth = container.clientWidth / slidesToShow;
// const movePosition = slidesToScroll * itemWidth;

// itemsCarus.forEach((item) => {
//   item.style.minWidth = `${itemWidth}px`;  
// });

// btnNext.addEventListener('click', () => {
//   const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

//   position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

//   setPosition();
//   checkBtns();
// });

// btnPrev.addEventListener('click', () => {
//   const itemsLeft = Math.abs(position) / itemWidth;

//   position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

//   setPosition();
//   checkBtns();
// });

// const setPosition = () =>{
//     track.style.transform = `translateX(${position}px)`;
// };



// const checkBtns = () => {
//   btnPrev.disabled = position === 0;
//   btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
// };

// slideInterval = setInterval(() => {
//   btnNext.click();
// }, 15000);

// container.addEventListener('mouseover', () => {
//   clearInterval(slideInterval);
// });

// container.addEventListener('mouseout', () => {
//   slideInterval = setInterval(() => {
//     btnNext.click();
//   }, 15000);
// });

// checkBtns();

let carousIndex = 0;
let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
let itemsCarus = document.querySelectorAll('.slider-item');
const itemsCount = itemsCarus.length;
// const itemWidth = container.clientWidth / slidesToShow;
const itemWidth = 302;
const icons = document.querySelectorAll('.service__icon');


const movePosition = slidesToScroll * itemWidth;
const interval = 30000; 

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
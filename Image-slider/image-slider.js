// Dom cache
const imgSliderDiv = document.querySelector(".image-slider");
const circleButtonsDiv = document.querySelector(".circle-buttons");
const leftArrowDiv = document.querySelector(".left-arrow");
const rightArrowDiv = document.querySelector(".right-arrow");

let images = [
  "./imgs/1.jpg",
  "./imgs/2.jpg",
  "./imgs/3.jpg",
  "./imgs/4.jpg",
  "./imgs/5.jpg",
];

export default function makeImageSlider() {
  let counter = 0;
  let curSetInterval;
  images.forEach((img, i) => {
    const imgElement = document.createElement("img");
    imgElement.src = img;
    imgSliderDiv.appendChild(imgElement);
    const circleDiv = document.createElement("div");
    circleDiv.addEventListener("click", (e) => {
      clearInterval(curSetInterval);
      counter = i;
      setImage();
    });
    circleButtonsDiv.appendChild(circleDiv);
  });

  const imgs = imgSliderDiv.querySelectorAll("img");
  const allCircleButtons = circleButtonsDiv.querySelectorAll("div");

  function handleVisuals() {
    imgs.forEach((img) => img.classList.remove("front"));
    allCircleButtons.forEach((circle) => circle.classList.remove("highlight"));
    imgs[counter].classList.add("front");
    allCircleButtons[counter].classList.add("highlight");
  }

  function setImage() {
    handleVisuals();
    startSlider();
  }
  setImage();

  function startSlider() {
    curSetInterval = setInterval(() => {
      if (counter < images.length - 1) counter++;
      else counter = 0;
      handleVisuals();
    }, 5000);
  }

  function scrollImageHandler(e) {
    clearInterval(curSetInterval);
    counter = counter + +e.target.getAttribute("data-move");
    counter = counter === 5 ? 0 : counter;
    counter = counter === -1 ? 4 : counter;
    setImage();
  }

  leftArrowDiv.addEventListener("click", scrollImageHandler);
  rightArrowDiv.addEventListener("click", scrollImageHandler);
}

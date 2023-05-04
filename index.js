import overFlowMenu from "./Overflow-menu/over-flow.js";
import makeImageSlider from "./Image-slider/image-slider.js";

const mobileDiv2 = document.querySelector("#mobile2");

let menuItems = [
  "Home",
  "News",
  "Sports",
  "Weather",
  "iPlayer",
  "Sounds",
  "Bitesize",
  "CBeebies",
  "CBBC",
  "Food",
  "there",
  "are",
];

// https://stackoverflow.com/questions/49475795/resize-event-not-triggered-on-div
const onresize = (dom_elem, callback) => {
  const resizeObserver = new ResizeObserver(() => callback(menuItems));
  resizeObserver.observe(dom_elem);
};
onresize(mobileDiv2, overFlowMenu);

overFlowMenu(menuItems);
makeImageSlider();

// Interactive options for demonstrating overflow-menu
const menuListUl = document.querySelector("#mobile2 ul");
const input = document.querySelector("#mobile2 input");
const button = document.querySelector("#mobile2 button");

function renderItemList() {
  menuListUl.textContent = "";
  menuItems.forEach((item) => {
    const itemLi = document.createElement("li");
    itemLi.textContent = item;
    const deleteBut = document.createElement("button");
    deleteBut.textContent = "X";
    deleteBut.setAttribute("data-name", item);
    itemLi.appendChild(deleteBut);
    menuListUl.appendChild(itemLi);
    deleteBut.addEventListener("click", deleteItemHandler);
  });
}

button.addEventListener("click", addNewItemHandler);

function addNewItemHandler(e) {
  console.log(input.value);
  menuItems.push(input.value);
  renderItemList();
  overFlowMenu(menuItems);
  input.value = "";
}

function deleteItemHandler(e) {
  menuItems = menuItems.filter(
    (item) => item !== e.target.getAttribute("data-name")
  );
  renderItemList();
  overFlowMenu(menuItems);
}

renderItemList();

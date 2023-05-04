export const overFlowDiv = document.querySelector(".over-flow-menu");

const wrapperDiv = document.createElement("div");
wrapperDiv.classList.add("wrapper");
overFlowDiv.appendChild(wrapperDiv);

let menuContainerDiv = document.createElement("div");
menuContainerDiv.classList.add("menu-container");
wrapperDiv.appendChild(menuContainerDiv);

const leftOverOptDiv = document.createElement("div");
leftOverOptDiv.classList.add("left-over-opts");

console.log(overFlowDiv.offsetWidth);

export default function overFlowMenu(menuOptionsArray) {
  menuContainerDiv.textContent = "";
  leftOverOptDiv.textContent = "";
  let counter = 0;
  while (counter < menuOptionsArray.length) {
    let optionDiv = makeOptionDiv();
    optionDiv.textContent = menuOptionsArray[counter];
    menuContainerDiv.appendChild(optionDiv);
    menuContainerDiv = document.querySelector(".menu-container");

    if (overFlowDiv.offsetWidth - menuContainerDiv.offsetWidth < 65) {
      menuContainerDiv.removeChild(menuContainerDiv.lastChild);
      const moreDiv = document.createElement("div");
      moreDiv.textContent = "more";
      moreDiv.classList.add("more-menu-items");
      moreDiv.addEventListener("click", moreOptionsHandler);
      menuContainerDiv.appendChild(moreDiv);
      break;
    }
    counter++;
  }
  const leftOverItems = menuOptionsArray.slice(counter);
  
  leftOverItems.forEach((item) => {
    const leftOverItemDiv = document.createElement("div");
    leftOverItemDiv.textContent = item;
    leftOverOptDiv.appendChild(leftOverItemDiv);
  });
  overFlowDiv.appendChild(leftOverOptDiv);
}

function makeOptionDiv() {
  const optionDiv = document.createElement("div");
  optionDiv.classList.add("overflow-option");
  return optionDiv;
}

function moreOptionsHandler() {
  leftOverOptDiv.classList.toggle("open");
}

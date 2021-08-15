const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const mouseOvers = [hamburger, menu];
const colourText = document.getElementById("colourText");
const colours = document.getElementsByClassName("menu-item");
const colorList = ["Gray", "Red", "Orange", "Purple", "Green"];

mouseOvers.forEach((item) =>
  item.addEventListener("mouseover", () => {
    menu.style.cssText = "transform:none; transition: transform 0.5s;";
  })
);

mouseOvers.forEach((item) =>
  item.addEventListener("mouseout", () => {
    menu.style.cssText =
      "transform-origin: 0% 0%;   transform: translate(-100%, 0);    transition: transform 0.5s;";
  })
);

Array.from(colours).forEach((element) =>
  element.addEventListener("click", () => {
    document.body.className = "";
    document.body.classList.toggle(element.innerHTML.toLowerCase());
    if (element.innerHTML == "Home") {
      colourText.innerHTML = "Gray";
    } else {
      colourText.innerHTML = element.innerHTML;
    }
  })
);

document.addEventListener("keydown", (event) => {
  var name = parseInt(event.key);
  if (name === 1 || name === 2 || name === 3 || name === 4 || name === 5) {
    document.body.className = "";
    document.body.classList.toggle(colorList[name - 1].toLowerCase());
    colourText.innerHTML = colorList[name - 1];
  } else {
    return;
  }
});

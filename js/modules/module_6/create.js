function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector(".container");
const btn = document.querySelector('[type="button"]');

btn.addEventListener("click", createBox);

function createBox() {
  const box = document.createElement("div");
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = getRandomHexColor();
  container.append(box);
}

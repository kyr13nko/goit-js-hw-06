const refs = {
  colorRef: document.querySelector(".color"),
  buttonRef: document.querySelector(".change-color"),
};

refs.buttonRef.addEventListener("click", onClickChangeColor);

function onClickChangeColor(event) {
  event.currentTarget.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

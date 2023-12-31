const refs = {
  color: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", onClickChangeColor);

function onClickChangeColor() {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  refs.color.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

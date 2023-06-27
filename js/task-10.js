const refs = {
  boxes: document.querySelector("#boxes"),
  input: document.querySelector("#controls input"),

  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
};

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.input.value;

  for (let i = 0; i < amount; i += 1) {
    const divRef = document.createElement("div");

    divRef.style.backgroundColor = getRandomHexColor();
    divRef.style.height = `${30 + i * 10}px`;
    divRef.style.width = `${30 + i * 10}px`;
    divRef.style.margin = "10px";

    refs.boxes.style.display = "flex";
    refs.boxes.style.flexWrap = "wrap";

    refs.boxes.append(divRef);
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

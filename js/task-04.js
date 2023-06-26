const refs = {
  value: document.querySelector("#value"),
  decrement: document.querySelector('#counter button[data-action="decrement"]'),
  increment: document.querySelector('#counter button[data-action="increment"]'),
  // АБО
  // button: document.querySelectorAll("#counter button"),
};

refs.decrement.addEventListener("click", onClickAddDecrement);
refs.increment.addEventListener("click", onClickAddIncrement);
// АБО
// refs.button[0].addEventListener("click", onClickAddDecrement);
// refs.button[1].addEventListener("click", onClickAddIncrement);

let counterValue = 0;

function onClickAddDecrement() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}
function onClickAddIncrement() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}

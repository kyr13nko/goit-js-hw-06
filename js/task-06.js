const inputRef = document
  .querySelector("#validation-input")
  .addEventListener("blur", onBlurChangeBorderColor);

function onBlurChangeBorderColor(event) {
  if (
    event.currentTarget.value.length !==
    Number(event.currentTarget.dataset.length)
  ) {
    event.currentTarget.classList.add("invalid");
  } else {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  }
}

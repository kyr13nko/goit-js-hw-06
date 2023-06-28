const inputRef = document
  .querySelector("#validation-input")
  .addEventListener("blur", onBlurChangeBorderColor);

function onBlurChangeBorderColor(event) {
  if (
    event.currentTarget.value.trim().length !==
    Number(event.currentTarget.dataset.length)
  ) {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  } else {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  }
}

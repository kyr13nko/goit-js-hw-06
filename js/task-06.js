const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onBlurChangeBorderColor);

function onBlurChangeBorderColor(param) {
  if (inputRef.value.length !== Number(inputRef.dataset.length)) {
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
}

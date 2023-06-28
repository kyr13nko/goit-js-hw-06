const inputRef = document.querySelector("#name-input");
const textRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  textRef.textContent =
    event.currentTarget.value.trim() !== ""
      ? event.currentTarget.value.trim()
      : "Anonymous";
}

/* function onInputChange(event) {
  textRef.textContent = event.currentTarget.value;

  textRef.textContent =
    textRef.textContent.trim() === "".trim()
      ? "Anonymous"
      : textRef.textContent.trim();
}
 */

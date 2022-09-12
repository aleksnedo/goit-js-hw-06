const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}

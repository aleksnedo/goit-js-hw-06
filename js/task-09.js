const bodyRef = document.querySelector("body");
const colorRef = document.querySelector(".color");
const buttonChangeColorRef = document.querySelector(".change-color");

const onChangeColor = () => {
  const currentColor = getRandomHexColor();
  bodyRef.style.backgroundColor = currentColor;
  colorRef.textContent = currentColor;
  console.log(currentColor);
};

buttonChangeColorRef.addEventListener("click", onChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

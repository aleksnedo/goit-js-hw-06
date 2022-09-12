const inputNameRef = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

inputNameRef.input.addEventListener("input", handleInputChange);

function handleInputChange(event) {
  inputNameRef.nameLabel.textContent = event.target.value;
  if (event.target.value === "") {
    inputNameRef.nameLabel.textContent = "Anonymous";
  }
}

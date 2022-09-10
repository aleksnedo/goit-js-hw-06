const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const itemElem = document.createElement("li");
  itemElem.classList.add("item");
  itemElem.textContent = ingredient;

  return itemElem;
});

ingredientsRef.append(...elements);

console.log(elements);

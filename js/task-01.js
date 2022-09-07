const categoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach((item) => {
  const titleCategoryRef = item.querySelector("h2");
  const quantityItemRef = item.querySelectorAll("li");
  console.log(`Category: ${titleCategoryRef.textContent}`);
  console.log(`Elements: ${quantityItemRef.length}`);
});

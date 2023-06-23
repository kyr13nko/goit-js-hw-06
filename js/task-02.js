const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

// ВАРІАНТ 1
ingredients.map((ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  itemRef.classList.add("item");
  ingredientsRef.append(itemRef);

  console.log("itemRef:", itemRef);
});

// ВАРІАНТ 2
/* ingredients.forEach((item) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = item;
  itemRef.classList.add("item");
  ingredientsRef.append(itemRef);

  console.log("itemRef:", itemRef);
}); */

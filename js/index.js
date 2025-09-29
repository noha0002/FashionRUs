const categorylist = document.querySelector(".categorylist");
console.log("index.js");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => showCategories(categories));

function showCategories(categories) {
  categories.forEach((category) => {
    categorylist.innerHTML += `
      
        <a href="produktlist.html?category=${category.category}">${category.category}
        </a>
      `;
  });
}

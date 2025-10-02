const productListContainer = document.querySelector(".container");
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

document
  .querySelectorAll("#filters button")
  .forEach((knap) => knap.addEventListener("click", showFiltered));

function showFiltered() {
  console.log("showFiltered");
}

let allData;
fetch(`https://kea-alt-del.dk/t7/api/products?limit=20&category=${category}`)
  .then((response) => response.json())
  .then((json) => {
    allData = json;
    showProducts(allData);
  });
  
  
  function showFiltered() {
    
    const filter = this.dataset.gender;
    if (filter == "All") {
      showProducts(allData);
    } else {
      fraction = allData.filter((product) => product.gender == filter);
      showProducts(fraction);
    }
  }

document.querySelector("#filters").addEventListener("click", showFiltered);
document.querySelector("#sorting").addEventListener("click", showSorted);

function showSorted(event) {
  const direction = event.target.dataset.direction;

  if (direction == "lohi") {
    allData.sort((a, b) => a.price - b.price); 
  } else {
    allData.sort((a, b) => b.price - a.price); 
  }
  showProducts(allData);
}

function showFiltered(event) {
  const gender = event.target.dataset.gender;

  if (gender == "All") {
    showProducts(allData);
  } else {
    const udsnit = allData.filter((product) => product.gender == gender);
    showProducts(udsnit);
  }
}







// fetch(
//   `https://kea-alt-del.dk/t7/api/products?limit=20&category=${category}`
// ) /* nu har jeg bedt om de første 20 kategorier*/
//   .then((response) => response.json())
//   .then((products) => showProducts(products));

function showProducts(products) {
  productListContainer.innerHTML = "";
  products.forEach((element) => {
    productListContainer.innerHTML += `
      <article class="udsolgt">
         <img class="sold-edit" 
         src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="">

         <h2>${element.productdisplayname}</h2>
         <p>${element.brandname}</p>
        <p>${element.articletype}</p>
        <p > Prev. DKK 1595,-</p>
        <p >Now Prev. DKK 1595,-</p> 

        <a href="produkt.html?id=${element.id}">Read More</a>
        
       
       

    </article
    
    `;
  });
}

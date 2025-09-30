const productListContainer = document.querySelector(".container");
const params = new URLSearchParams(window.location.search);
const category = params.get("category");


fetch(`https://kea-alt-del.dk/t7/api/products?limit=20&category=${category}`) /* nu har jeg bedt om de første 20 kategorier*/
  .then((response) => response.json())
  .then((products) => showProducts(products));

function showProducts(products) {
  console.log(products);
  products.forEach((element) => {
    console.log(element);

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

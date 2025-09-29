const productListContainer = document.querySelector(".container");

fetch(`https://kea-alt-del.dk/t7/api/products`)
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
        <p>Tshirts i Nike</p>
        <p > Prev. DKK 1595,-</p>
        <span class="tilbud">-34</span>
        <p >Now Prev. DKK 1595,-</p>

        <a href="Produkt.html">
         <p class="underline">Read More</p>
        </a>
        
       <span class="sold">udsolgt</span>
       

    </article
    `;
  });
}

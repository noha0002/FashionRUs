
const productContainer = document.querySelector("#productContainer");
fetch("https://kea-alt-del.dk/t7/api/products/1163")
    .then(res => res.json()) 
    .then(product =>{
        console.log(product.articletype);
    })
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log(id);
productContainer.innerHTML = `
<section class="grid3">
  <img src="img/fodbold1.png" alt=""> 
  <div>
    <h2 class="stor1">Product Information</h2>
    <h2 class="stor2">Model Name</h2>
    <p>Sahara Team India Fawner Round Neck Jersey</p>
    <h2 class="stor2">Color</h2>
    <p>Blue</p>
    <h2 class="stor2">Inventory Number</h2>
    <p>1163</p>
    <h1>NIKE</h1>
    <p>Nike, creating experiences for today's athlete</p>
  </div>

  <form class="grey">
    <h1>Sahara Team India Fawner Round Neck Jersey</h1>
    <p>Nike Tshirts</p>

    <label for="size">Choose a size:</label>
    <select id="size">
      <option value="">Select</option>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>

    <button type="button" id="addToCart">Put in basket</button>
  </form>
</section>
`;

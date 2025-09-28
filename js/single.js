const productContainer = document.querySelector("#productContainer");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((res) => res.json())
  .then((product) => {
    console.log(product.articletype);

    productContainer.innerHTML = `
      <section class="grid3">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt=""> 
        <div>
          <h2 class="stor1">Product Information</h2>
          <h2 class="stor2">Model Name</h2>
          <p>${product.productdisplayname}</p>
          <h2 class="stor2">Color</h2>
          <p>${product.color}</p>
          <h2 class="stor2">Inventory Number</h2>
          <p>${product.id}</p>
          <h1>${product.brandname}</h1>
          <p>${product.brandname}, creating experiences for today's athlete</p>
        </div>

        <form class="grey">
          <h1>${product.productdisplayname}</h1>
          <p>${product.articletype}</p>

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
  });

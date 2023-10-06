const productContainer = document.querySelector(".productBox");

document.querySelector("#search").addEventListener("click", getProduct);

function getProduct() {
  const name = document.querySelector("#productName").value;

  fetch(`https://dummyjson.com/products/search?q=${name}`)
    .then( (res) => res.json() )
    .then(data => {
      productContainer.innerHTML = '';

      if (data.products.length === 0) {
        console.log(data);
        productContainer.innerHTML = '<div>Product not found</div>';
      } else {
        console.log(data);
        data.products.forEach(product => {
          const displayProduct = `
          <div>${product.title}</div>
          `;
          productContainer.innerHTML += displayProduct;
        });
      }
    })
    .catch( (err) => {
      console.error("Error fetching data: ", err);
      productContainer.innerHTML = '<div>Error fetching product data</div>';
    });
}
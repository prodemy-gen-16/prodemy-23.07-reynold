const productContainer = document.querySelector(".productBox");
const name = document.querySelector("#productName")

document.querySelector("#search").addEventListener("click", getProduct);

function getProduct() {
  const name = document.querySelector("#productName").value;
  // const productName = lowerCaseName(name);

  fetch(`https://dummyjson.com/products/search?q=${name}`)
    .then( (res) => res.json() )
    .then(data => {
      console.log(data);

      productContainer.innerHTML = '';

      data.products.forEach(product => {
        const displayProduct = `
          <div>${product.title}</div>
        `;
        productContainer.innerHTML += displayProduct;
      });

    })
    .catch( (err) => {
      console.error("Error fetching data: ", err);
      productContainer.innerHTML = '<div>Error fetching product data</div>';
    });
}
let products = [
  {
    name: "Lightstick",
    price: 49.00,
    stock: 11,
  },
  {
    name: "Shirt",
    price: 38.00,
    stock: 21,
  },
  {
    name: "Album",
    price: 23.80,
    stock: 5,
  }
];

const filterPrice = products
  .filter(product => product.price < 40.00)
  .map(product => product.name)
;

const filterStock = products
  .filter(product => product.stock > 10)
  .map(product => product.name);

console.log(filterPrice);
console.log(filterStock);

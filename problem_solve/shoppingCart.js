const products = [
  { name: "shampoo", price: 300, quantity: 2 },
  { name: "chiruni", price: 100, quantity: 1 },
  { name: "shirt", price: 200, quantity: 2 },
  { name: "pant", price: 400, quantity: 2 },
];

function shoppingCart(products) {
  let sum = 0;
  for (const product of products) {
    sum = sum + product.price * product.quantity;
  }
  return sum;
}
const total = shoppingCart(products);
console.log(total);

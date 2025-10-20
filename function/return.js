function add(price1, price2) {
  const total = price1 + price2;
  return total;
}
const bill = add(5, 80);
console.log(bill);

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(5));
console.log(isEven(6));

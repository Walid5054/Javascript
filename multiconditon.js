const price = 4000;
if (price >= 400) {
  const discount = (price * 10) / 100;
  const payamount = price - discount;
  console.log(discount);
  console.log(payamount);
} else {
  console.log(price);
}

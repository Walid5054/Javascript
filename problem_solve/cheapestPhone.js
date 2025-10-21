const mob = [
  {
    name: "samsung",
    price: 20000,
    camera: "12mp",
    color: "black",
  },
  {
    name: "iphone",
    price: 25000,
    camera: "12mp",
    color: "black",
  },
  {
    name: "xiaomi",
    price: 18000,
    camera: "12mp",
    color: "black",
  },
  {
    name: "vivo",
    price: 22000,
    camera: "12mp",
    color: "black",
  },
];
function cheapestPhone(phone) {
  let min = phone[0];
  for (const ph of phone) {
    if (ph.price < min.price) {
      min = ph;
    }
  }
  return min;
}
const cheap = cheapestPhone(mob);
console.log(cheap);

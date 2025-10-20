function sumofnumber(num) {
  let sum = 0;
  for (const number of num) {
    sum = sum + number;
  }
  return sum;
}
const n = [12, 4, 35, 6];
const s = sumofnumber(n);
console.log(s);

function evenNumber(num) {
  let sum = 0;

  for (const number of num) {
    if (number % 2 == 0) {
      sum = sum + number;
    }
  }
  return sum;
}
const s = evenNumber([12, 4, 6, 4, 7, 8, 1]);
console.log(s);

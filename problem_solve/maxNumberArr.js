function maxNum(num) {
  let arr = num[0];
  for (const number of num) {
    if (number > arr) {
      arr = number;
    }
  }
  return arr;
}
const result = maxNum([3, 5, 7, 1, 8, 2]);
console.log(result);

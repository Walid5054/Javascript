function oddavg(num) {
  let sum = 0;
  let len = num.length;

  for (const number of num) {
    if (number % 2 == 1) {
      sum = sum + number;
    }
  }
  let avg = sum / len;
  return avg;
}

const arr = oddavg([1, 2, 3, 4, 5]);
console.log(arr);

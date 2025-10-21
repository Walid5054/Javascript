function removeDuplicate(num) {
  const unique = [];
  for (const number of num) {
    if (unique.includes(number) == false) {
      unique.push(number);
    }
  }
  return unique;
}
const nodupli = removeDuplicate([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
console.log(nodupli);

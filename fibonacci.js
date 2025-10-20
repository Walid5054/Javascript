const prompt = require("prompt-sync")();

let n = prompt("Enter how many Fibonacci numbers to print:");

let a = 0,
  b = 1;

console.log("Fibonacci Series:");
if (n >= 1) console.log(a);
if (n >= 2) console.log(b);

for (let i = 2; i < n; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}

// palindrome
let word = prompt("Enter a word to check if it's a palindrome:");

let reversed = word.split("").reverse().join("");

if (word === reversed) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}

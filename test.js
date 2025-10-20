const prompt = require("prompt-sync")(); // Ensure correct import

let total = parseInt(prompt("Enter a number: ")); // Convert input to a number
let price = parseInt(prompt("Enter second number: "));
let result = total + price;
let avg = result / 2;

console.log(`Result: ${total - price}`);
console.log(avg);

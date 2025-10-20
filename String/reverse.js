const sentence = "I want am learning web dev";
let reverse = "";
for (const letter of sentence) {
  console.log(letter);
  reverse = letter + reverse;
}
console.log(reverse);
// shortcut
const reversed = sentence.split("").reverse().join();
console.log(reversed);

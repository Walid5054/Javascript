const numbers = [2, 3, 5, 64, 4, 54];
const ages = [];
console.log(numbers);
numbers.push(44, 69);

console.log(numbers);
// pop
const name = ["abul", "kabul", "babul", "habul"];
console.log(name);
name.pop(); //removes last elemetn
console.log(name);
name.shift(); //removses first element
console.log(name);
name.unshift("dadul");
console.log(name);
console.log(name.includes("dadul")); //output true if includes it is case sensitive

console.log(name.includes("halim"));
console.log(name.indexOf("kabul"));
console.log(name.indexOf("tomato"));
console.log(Array.isArray(name));
console.log(Array.isArray(ages));
console.log(numbers.concat(name));
console.log(numbers.slice(1, 3));

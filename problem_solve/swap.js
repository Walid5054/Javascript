let a = 5;
let b = 6;
const temp = a;
a = b;
b = temp;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

/*let n = 5;
for (let i = 0; i < n; i++) {
  console.log("hello", i);
}
console.log("bye");

console.log(process.argv);

let args = process.argv; //process.argv returns an array
for (let i = 2; i < args.length; i++) {
  console.log("hello to ", args[i]);
} */

const math = require("./math");
console.log(math);
console.log(math.sum(2, 2));
console.log(math.PI);

const fruits = require("./Fruits");
console.log(fruits);

//NPM:is a library of packages(which we can use) and a command line tool (is a technique by which using command line we can install packages, we can decide which version do we want of which packages)

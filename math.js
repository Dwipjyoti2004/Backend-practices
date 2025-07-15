const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

//module.exports = "hello";
/*C:\Users\Dwipjyoti Sarkar\OneDrive\Desktop\AC codes\Backend-practices>node script.js
hello*/

//module.exports = 123;
/*C:\Users\Dwipjyoti Sarkar\OneDrive\Desktop\AC codes\Backend-practices>node script.js
123*/

/*if we export nothing to script.js then o/p in terminal-- empty object
cause by default module.exports returns an empty object. module.exports is itself an object,but explicitly we can make it string or number.
C:\Users\Dwipjyoti Sarkar\OneDrive\Desktop\AC codes\Backend-practices>node script.js
{} */

let obj = {
  sum: sum,
  mul: mul,
  g: g,
  PI: PI,
};
module.exports = obj; //here it returns an object

/*module.exports = {
  sum: sum,
  mul: mul,
  g: g,
  PI: PI,
}; this is also valid*/

/*the below systax is also valid cause module.exports is itself an object
module.exports.sum = (a, b) => a + b;
module.exports.mul = (a, b) => a * b;
module.exports.g = 9.8;
module.exports.PI = 3.14; */

/*the below systax is also valid 
exports.sum = (a, b) => a + b;
exports.mul = (a, b) => a * b;
exports.g = 9.8;
exports.PI = 3.14; */

//exports = 5; but this will give error cause js then treat this exports as an normal variable not as the exports of module.exports. exports is treated as of module.exports whenever exports is treated as an object and different functions and variables/values are added within that obj.

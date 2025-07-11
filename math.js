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

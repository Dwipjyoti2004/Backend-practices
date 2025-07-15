// if script.js file wants to use all the information of Fruits directory, then-
//1.first make an file index.js in the directory we want to use all the files/information of ImageTrack. no other name can be used rather than index.js
//2.it will require all info from all the files.
const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

let fruits = [apple, banana, orange];

module.exports = fruits;

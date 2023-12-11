"use strict";
//named function
function add(num1, num2) {
    return num1 + num2;
}
let a = add(10, 20);
console.log(a);
//arrow function
const sub = (num1, num2) => num1 - num2;
console.log(sub(2, 3));
//function expression
const mult = function (num1, num2) {
    return num1 * num2;
};
//named function with option parameters
function newAdd(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
//arrow function with requiired parameters
const newSub = (num1, num2, num3 = 10) => num1 - num2;
//named function with rest parameters
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [5, 6, 7];
console.log(add2(2, 3, ...numbers));
//Generic functions
// the <Type> gets any type of data we will passing through an function
function getItem(item) {
    return new Array().concat(item);
}
let concatResult = getItem([1, 2, 3, 4]);
let concatString = getItem(['a', 'b', 'c', 'd']);
console.log(concatResult);
console.log(concatString);

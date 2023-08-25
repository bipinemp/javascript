// Function Parameters

// Default Parameters
// function greet(name = "BipinEmp") {
//   console.log(`Hello, ${name}`);
// }
// greet("Bipin");

// Rest Parameters
// function sum(...nums) {
//   nums.forEach((num) => {
//     console.log(num);
//   });
//   console.log(nums.reduce((acc, num) => acc + num, 0));
// }
// sum(1, 2, 3, 4);

// arguments object
// function print() {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// print(1, "Bipin", 22);

// arrow functions

// Both same
// const print1 = (val) => {
//   return val;
// };
// const print2 = (val) => val;
// console.log(print("Hi"));

// returning object
// Both same
// const print1 = () => ({ username: "bipin", age: 22 });
// const print2 = () => {
//     return { username: "bipin", age: 22 };
//   };
// console.log(print());

// Immediately Invoked function Expression IIFE
// to be protected from global pollution
// (function print() {
// named IIFE
//   console.log("Hello world");
// })();

// (() => {
//   console.log("Hello world !!");
// })();

// ((name) => {
//   console.log(`Welcome, ${name}`);
// })("Bipin");

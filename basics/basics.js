// console.log("hello world");

// variables

// var = globally can be updated and re-defined
// let = block scoped can be updated not re-defined
// const = not re-defined and updated
// var not recommended !!!!!

// let
// let name = "Bipin Bhandari";
// console.log(name);
// {
//   let name = "hari";
//   console.log(name);
// }

// const

// {
//   const profileName = "bipin bhandari";
//   profileName = "hello world";
//   console.log(profileName);
// }

// datatypes
// string
// number
// boolean
// int or bigint
// undefined
// null
// typeof
// Symbol
// let uniqueKey = Symbol("secret123");
// console.log(uniqueKey.description); o/p = secret123

// console.log(typeof 32);
// string
// let pname = "Bipin bhandari";
// console.log(pname.length); = 14
// console.log(pname.toUpperCase()); = BIPIN BHANDARI
// console.log(pname.charAt(2)); = p
// console.log(pname.indexOf("i")); = 1
// let game = "helloworld";
// const newString = game.substring(3, 7);
// console.log(newString);

// const anotherString = game.slice(2, 6); == llow
// console.log(anotherString);

// const ground = "football cricket";
// const newGround = ground.split(" ");
// console.log(newGround); = [ 'football', 'cricket' ]

// const email = "  bhandari@gmail.com  ";
// const newEmail = email.trim();
// console.log(email);
// console.log(newEmail);

// const url = "https://www.google.com";
// const isHttps = url.startsWith("https");
// const isCom = url.endsWith(".com");
// console.log(isHttps);
// console.log(isCom);

// const personName = "bipin bhandari";
// console.log(personName.replace("bhandari", "kandel"));

// const personName = "bipin bhandari";
// console.log(personName.includes("bipin"));

// Type conversion to Number
// "33" => 33
// "11abc" => NaN
// true => 1; false => 0

// Hoisting
// suruma function use garera paxi function lai deifne garepani kam garxa
// console.log(sum(1, 2));
// let sum = (a, b) => {
//   return a + b;
// };

// var a;
// console.log(a);
// var a = 8;

// my_variable  = Snake Case
// my-variable = Kebab Case
// MyVariable = Pascal Case
// myVariable = Camel Case

// variable scopes
// let a = 300;
// if (true) {
//   let a = 20;
//   console.log("Block Scope " + a);
// }

// console.log("Global Scope " + a);

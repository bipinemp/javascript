// Simple Promise operation
// const promise1 = new Promise((res, rej) => {
//   let val = Math.floor(Math.random() * 10);
//   if (val > 5) {
//     res("Value is greater then 5");
//   } else {
//     rej("Value is smaller or equals to 5");
//   }
// });

// promise1
//   .then((data) => console.log(`Resolved ${data}`))
//   .catch((err) => console.log(`Rejected : ${err}`));

// Chaining Promises
// const promise1 = new Promise((res, rej) => {
//   return res("First Promise resolved");
// });

// const promise2 = promise1.then((data) => {
//   console.log(data);
//   return new Promise((res, rej) => {
//     return res("Second Promise resolved");
//   });
// });

// const promise3 = promise2.then((data) => {
//   console.log(data);
//   return new Promise((res, rej) => {
//     return res("Third Promise resolved");
//   });
// });

// promise3.then((data) => {
//   console.log(data);
// });

// Promise.all()
// const p1 = 1;
// const p2 = 2;
// const p3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(3);
//   }, 3000);
// });

// const promises = [p1, p2, p3];
// Promise.all(promises).then((data) => console.log(data));
// Promise.all([p1, p2, p3]).then((data) => console.log(data));

// async await
// async function getUser() {
//   let response = await fetch("https://api.github.com/users/bipinemp");
//   let data = await response.json();
//   let userName = data.login;
//   console.log(userName);
// }

// getUser();

// callbacks
// function first() {
//   console.log(1);
// }

// function second(callback) {
//   setTimeout(() => {
//     console.log(2);
//     callback();
//   });
// }

// function third() {
//   console.log(3);
// }

// first();
// second(third);

// function msg() {
//   console.log("Hello there");
// }
// higher order function when it takes function as parameters
// function logger(message) {
//   message();
// }

// logger(msg);

// XMLHTTPRequest
// const url = "https://api.github.com/users/bipinemp";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", url);
// xhr.onreadystatechange = function () {
//   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     const data = JSON.parse(this.responseText);
//     console.log(data.login);
//   }
// };
// xhr.send();

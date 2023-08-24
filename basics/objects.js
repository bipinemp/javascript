// Object literals
// const mySym = Symbol("key1");

// const User = {
//   name: "bipin",
//   age: 22,
//   isLoggedIn: true,
//   hobbies: ["football", "cricket"],
//   "full name": "bipin bhandari",
//   [mySym]: "secret123",
// };

// console.log(User.name);
// console.log(User["full name"]);
// console.log(User[mySym]);

// Object.freeze(User);
// User.isLoggedIn = false;
// console.log(User);

// User.greeting = function () {
//   return "Hello, User";
// };

// User.greeting2 = function () {
//   return `Hello, ${this["full name"]}`;
// };

// console.log(User.greeting());
// console.log(User.greeting2());

// singleton
const tinderUser = new Object();
tinderUser.id = 1;
tinderUser.name = "bipin";
// console.log(tinderUser);

const regularUser = {
  email: "bipin@gmail.com",
  fullname: {
    userfullname: {
      firstname: "bipin",
      lastname: "bhandari",
    },
  },
};

// console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const user = {
  id: 1,
  name: "bipin",
  isLoggedIn: true,
};

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty("name")); == true

// destructuring
const course = { coursename: "JS in ENG", price: "444" };

const { coursename } = course;
const { coursename: cname } = course;
// console.log(coursename);
// console.log(cname);

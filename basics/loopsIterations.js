// For Loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// While Loop
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// Do while loop
// let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// for...in loop
// const users = { name: "Bipin", age: 22 };
// for (let key in users) {
//   console.log(key, users[key]);
// }

// for...of loop
// const users = ["bipin", "hari", "ram"];
// for (let user of users) {
//   console.log(user);
// }

// break / continue
// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     break; exit out of loop when i = 3
//   }
//   console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     continue; 3 will be skipped
//   }
//   console.log(i);
// }

// labeled statements
// mainloop: for (let i = 0; i < 5; i++) {
//   if (i === 4) {
//     break mainloop;
//   }
//   console.log(i);
// }

// mainloop: for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     continue mainloop;
//   }
//   console.log(i);
// }

// if...else
// const age = 18;

// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Not Adult");
// }

// switch
// const num = 1;
// switch (num) {
//   case 1:
//     console.log("Sun");
//     break;
//   case 2:
//     console.log("Mun");
//     break;
//   case 3:
//     console.log("Tue");
//     break;
//   default:
//     console.log("no day available");
// }

// Exception Handling

// try..catch
// try {
//   const result = 10 / 0;
//   console.log(result);
// } catch (error) {
//   console.log("Error Message : ", error.message,error.stack,error.name);
// }

// throw
// function validateNum(num) {s
//   if (num === 2) {
//     throw new Error("2 is not allowed");
//   }
//   return num;
// }

// console.log(validateNum(2));

// Error Objects
// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "CustomError";
//   }
// }

// try {
//   throw new CustomError("This is a custom error");
// } catch (error) {
//   console.error("An error occurred:", error.name, error.message);
// }

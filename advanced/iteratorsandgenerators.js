// Iterators
// function makeIterator(start = 0, end = Infinity, step = 1) {
//   let nextIndex = start;
//   let iterationCount = 0;
//   return {
//     next() {
//       let result;
//       if (nextIndex < end) {
//         result = { value: nextIndex, done: false };
//         nextIndex += step;
//         iterationCount++;
//         return result;
//       }
//       return { value: iterationCount, done: true };
//     },
//   };
// }

// const myIterator = makeIterator(1, 10, 1);
// let result = myIterator.next();
// while (!result.done) {
//   console.log(result.value);
//   result = myIterator.next();
// }

// Generators
// function* steps() {
//   console.log("Step one");
//   yield;
//   console.log("Step two");
// }
// const step = steps();
// step.next();
// step.next();

// function* count() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const nums = count();
// for (let v of nums) {
//   console.log(v);
// }

// function* myGenerator(start, end, stepsize = 1) {
//   for (let i = 1; i <= end; i += stepsize) {
//     yield i;
//   }
// }

// const generate = myGenerator(1, 10, 2);
// for (let val of generate) {
//   console.log(val);
// }

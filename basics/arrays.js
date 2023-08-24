// const arr = [1, 2, 3, 4, 5];

// LILO
// arr.push(6);
// arr.pop();

// FIFO
// arr.unshift(8);
// arr.shift();

// const newArr = arr.join(); converts to stirng 1,2,3,4,5

// slice, splice
// console.log("Original Array ", arr);
// const arr1 = arr.slice(1, 4);
// console.log("Slice ", arr1);
// console.log("Original Array ", arr);

// console.log("Original Array ", arr);
// const arr2 = arr.splice(1, 4);
// console.log("Splice ", arr2);
// console.log("Original Array ", arr);

// const marvel = ["spiderman", "ironman"];
// const dc = ["batman", "superman"];
// const all = marvel.concat(dc);
// const all = [...marvel, ...dc];
// console.log(all);

// const complexArr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];
// const simpleArr = complexArr.flat(Infinity);
// console.log(simpleArr);

// console.log(Array.isArray(["bipin"])); == true
// console.log(Array.from("BIPIN")); ["B","I",...]

// let one = 1;
// let two = 2;
// let three = 3;

// console.log(Array.of(one, two, three)); == [1,2,3]

// Array Methods !!!
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const d = a.join("-"); string 1-2-3
// const d = a.toString(); string 1,2,3

// function operation(a, b) {
//   return a - b;
// }
// const ages = [5, 2, 73, 24, 7, 1543, 23];
// const sortedAges = ages.sort(operation);
// console.log(ages);
// console.log(ages.reverse());

// ALL Array Methods
// const arr = [2, 1, 3];
// const arrr = [5, 4, 6];

// const arr2 = arr.concat(arrr); [2,1,3,5,4,6]
// const arr2 = arr.every((element) => element >= 1); true
// const arr2 = arr.fill(1, 0, 1); == 1,1,3 , changes original array
// const arr2 = arr.map((elem) => elem * 2);
// const arr2 = arr.find((elem) => elem > 2); return first element it matches
// const arr2 = arr.filter((num) => num > 2);
// const arr2 = arr.reduce((acc, num) => acc + num, 0);
// const arr2 = arr.at(0); == 2, first element
// const arr2 = arr.at(-1); == 3 , last element
// console.log(arr2);
// console.log(arr);

// Typed Arrays
// const byteArray = new Int8Array(5);

// byteArray[0] = 1;
// byteArray[1] = 2;
// byteArray[2] = 3;

// console.log(byteArray);

// keyed collections

// Set , all elems should be unique otherwise discarded
// const arr = [1, 2, 3];
// const arr1 = new Set(arr);
// arr1.add(4);
// arr1.delete(1);
// console.log(arr1.has(1)); == true
// arr1.clear(); , all elems deleted
// const arr2 = arr1.entries(); == {1=>1,2=>2,3=>3}
// const arr2 = arr1.keys();
// arr1.forEach((elem) => console.log(elem));

// console.log(arr1);

// Map = Key -> values
// no duplicacy , updates to new
// let myMap = new Map([
//   ["a1", "Bipin"],
//   ["a2", "hari"],
// ]);

// myMap.set("a2", "hari");
// myMap.delete("a2");
// for (let [key, value] of myMap) {
//   console.log(`key: ${key} , value: ${value}`);
// }
// myMap.forEach((key, value) => console.log(key, value));

// console.log(myMap);

// WeakSet
// only store objects
// it can't be iterated
// let ws = new WeakSet();
// let obj1 = { name: "Tiger" };
// let obj2 = { name: "Lion" };
// ws.add(obj1);
// ws.add(obj2);
// console.log(ws);

// WeakMap
// let wm = new Map();
// let obj1 = { name: "Tiger" };
// let obj2 = { name: "Lion" };
// wm.set(obj1, "animal");
// wm.set(obj2, "king animal");

// console.log(wm);

// array 

const MyArr = [0, 1, 2, 3, 4, 5]
const Heros = [ "krishna", "hanuman", "shiva"]

const MyArr2 = new Array(1,2,3,4)
// console.log(MyArr[1]);

// Array Methods

// MyArr.push(6); // it adds the value in last of the array
// MyArr.push(7);
// MyArr.pop();  // it removes one value at the last of the array

// MyArr.unshift(9); // it adds the value at the starting of  array 
// MyArr.shift();
// MyArr.shift(); // it removes one value in the starting of the array it doesn't contain any parameter

// console.log(MyArr.includes(9)); // this method checks the passed value in that method is available or not in that array, and it return in boolean value if value is available then it return true or if value is not available then it return false

// console.log(MyArr.indexOf(9)); // it checks the index of the passed value in that method is available or not in that array, and it return that value  if that value is available and if that value is not available in that array then it returns -1

// console.log(MyArr.indexOf(3));

// const newArr = MyArr.join(); // this method change the whole array into string

// console.log(MyArr);
// console.log(newArr);
// console.log(typeof(newArr));

// slice, splice

// slice() --> method lets you extract a section of an array and returns it as a new array.

let fruits1 = ["apple", "banana", "cherry", "date", "elderberry"];
let slicedFruits = fruits1.slice(1, 3);

// console.log(slicedFruits1); // Outputs: ["banana", "cherry"]

//slice(1, 3) extracts the elements starting from index 1 up to, but not including, index 3. The original array remains unchanged.

// splice() --> The splice() method in JavaScript is used to add or remove elements from an array. Unlike slice(), which returns a new array, splice() modifies the original array. 

let fruits2 = ["apple", "banana", "cherry", "date", "elderberry"];

// Removing elements
let removedFruits = fruits2.splice(1, 2); 
console.log(removedFruits); // Outputs: ["banana", "cherry"]
console.log(fruits2); // Outputs: ["apple", "date", "elderberry"]

// Adding elements
fruits2.splice(2, 0, "fig", "grape"); 
console.log(fruits2); // Outputs: ["apple", "date", "fig", "grape", "elderberry"]



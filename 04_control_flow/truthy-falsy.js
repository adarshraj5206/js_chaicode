// truthy and falsy values

// falsy values: false, 0, -0, 0n, "", null, undefined, NaN
// truthy values: true, 1, "0", "false", [], {}, function(){}


const userEmail = "adarsh@gmail.com";

// check if the userEmail is truthy or falsy

if (userEmail) {
    console.log("truthy");
} else {
    console.log("falsy");
}

let emptyArray = [];

if (emptyArray.length === 0) {
    console.log("Array is empty");
    console.log("truthy"); 
}

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 15; // 15

val1 = null ?? 10 ?? 20; // 10
console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");  

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


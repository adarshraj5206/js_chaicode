// for of loop

// ["", "", ""]
// [{}, {}, {}]

let myArray = ["flash", "batman", "superman"];

for (const element of myArray) {
    // console.log(element);
}

const greetings = "Hello World";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObject = { // object is not iterable in for of loop
    game1: "NFS",
    game2: "Spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// } 
// object is not iterable in for of loop


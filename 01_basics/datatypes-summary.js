// primitive

// 7 types :-  string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// both id and anotherId's symbols have the same description, they are unique and not equal to each other.

console.log(id === anotherId); // false

const bigNum =  345655464646564841665n


// Non Primitive ( Reference )

// Array, objects, functions

const heros = [ "shaktiman", "naagraj", "Doga"]  // array

let MyObj = {
    name : "Adarsh",
    age : 20,
}

const MyFunction = function(){
    console.log("Hi adarsh...");
    
}


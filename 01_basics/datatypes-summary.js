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


// ***************************************
// Stack (all primitive data types stores in stack and share data type as a copy),
// isme data type automatically update nhi hote hai 

let myIntaId = "adi85.ig"

let anotherName = myIntaId
anotherName = "adarshpokie78"

console.log(myIntaId);
console.log(anotherName)

// Heap (all Non-primitive data types stores in Heap and share data type as a reference)
// when u update the reference data type and its orginal value automaticaly update 

let user1 = {
    email: "aman@gmail.com",
    upi: "aman@ybl"
}

let user2 = user1

user2.email = "azain@mail.com"

console.log(user1.email);
console.log(user2.email);


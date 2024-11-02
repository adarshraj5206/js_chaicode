/* function -> A function in JavaScript is a reusable block of code designed to perform a particular task. Functions help you organize and manage your code by encapsulating a task or set of instructions that can be called whenever needed */

function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

// sayMyName(); // calling the function

// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumber(3,5);

// or
function addTwoNumber(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

const result = addTwoNumber(3,5);
console.log("Result : ",result);


function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("shani"));
console.log(loginUserMessage()); // undefined

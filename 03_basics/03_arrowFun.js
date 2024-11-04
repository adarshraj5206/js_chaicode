const user = {
    userName : " Aman ",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.userName}, Welcome to Website`);  // here, this refer to the current context.
        // console.log(this); 
    }
}

// user.welcomeMessage(); // calling the welcomeMessage method of user object.
// user.userName = "Adarsh"
// user.welcomeMessage();

// console.log(this);


// this in normal function

function NormalFun(){
    console.log(this);    // this will print global Object

    let userName = "Adarsh"
    console.log(this.userName)
}

NormalFun(); 


// **************** Arrow function ************

//syntax

//   () => {}

const chai = () => {
    let userName = "Adarsh"
    console.log(this);
}

// chai(); // Output -> {} . empty paranthethis, this will print empty object. 

// Basic arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3,4)); // Output -> 7


// implicit return arrow function

// in here, we don't use return keyword to return the arrow function 

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2); // we can also write this way

const addTwo = (num1, num2) => ({username: "adarsh"}); // how to object return in implicit return

console.log(addTwo(3,4)); // Output -> 7


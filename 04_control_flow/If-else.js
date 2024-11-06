// if else
const isUserLoggedIn = true
const temperature = 35

// if ( temperature < 50){
//     console.log("less than 50\n");   
// }
// else
// {
//     console.log("greater than or equal to 50\n");
// }

// < , >, <= , >=, == , != , ===, !==

const score = 200
// if ( score > 100 ){
//     const power ="fly"
//     console.log(`You have ${score} points. You can ${power} now!`);
// }

// shorthand notation

const balance = 1000

// if (balance > 0) console.log("\nYou have money"),console.log(`i have ${balance}`);

// ternary operator

// console.log(score > 100? `\nYou have ${score} points. You can fly now!` : `\nYou don't have enough points. You can't fly.`);

// Nesting

// if (score > 100){
//     if (balance > 0){
//         console.log("\nYou have money and enough points. You can fly now!");
//     }
//     else if(score>0) {
//         console.log("\nYou don't have money. but You can't fly.");
//     }
//     else {
//         console.log("\nYou don't have enough points. You can't fly.");
//     }

// }

const UserLoggedIn = true
const debitCard = true

if (UserLoggedIn && debitCard){
    console.log("\nYou have both user logged in and a debit card.");
}

if(UserLoggedIn||debitCard){
    console.log("user Log in");
}
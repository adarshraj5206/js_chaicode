// Dates

let myDate = new Date()
// console.log(myDate);                   
// console.log(myDate.toString());
// console.log(myDate.toDateString());     
// console.log(myDate.toISOString());      
// console.log(myDate.toJSON());              
// console.log(myDate.toLocaleDateString());   
// console.log(myDate.toLocaleString());   

// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2024, 0, 25)
// console.log(myCreatedDate.toDateString()); // OP-> Thu Jan 25 2024

// let myCreatedDate = new Date(2024, 0, 25, 5, 3)
// console.log(myCreatedDate.toLocaleString()) // OP-> 1/25/2024, 5:03:00 AM

let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

let MyTimeStamp = Date.now()

// console.log(MyTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{ 
        weekday: "long",
})
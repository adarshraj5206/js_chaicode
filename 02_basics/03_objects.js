// singleton
// object.create



const mysym = Symbol("key1")

// object literals
const jsUser =  {
    name : "Adarsh",
    [mysym] : "mykey1",
    age : 20,
    location : "Bhopal",
    email : "adarsh@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "saturday"],
    "full name" : "Adasrh vardhan"
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// console.log( "\n",typeof(jsUser.mysym));
// console.log(jsUser.mysym);
// console.log(jsUser[mysym]);

jsUser.email = "raju456@gmail.com"
// Object.freeze(jsUser)
jsUser.email ="harshu@mlp.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

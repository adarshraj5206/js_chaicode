// Global Scope ->>>    the global scope is the outermost scope of your code. Variables declared in the global scope are accessible from anywhere in your program.

var globalVar = "I'm global!";

function showGlobalVar() {
    console.log(globalVar); // Accessible here
}

showGlobalVar(); // Outputs: "I'm global!"

// Local scope / Block scope ->>> Local scope in JavaScript refers to variables that are declared within a function or block. These variables are only accessible within that specific function or block, preventing them from interfering with other parts of your code

function greet() {
    var localVar = "Hello!";
    console.log(localVar); // Accessible here
}

greet(); // Outputs: "Hello!"

console.log(localVar); // Error: localVar is not defined


// Note : ---> 

    // In JavaScript, let and const are block-scoped. They are not hoisted, meaning they must be declared before they are used.

    // var is function-scoped, meaning it can be accessed anywhere within the function, even before it is declared.

    // const and let are not mutable, meaning their values cannot be changed once they are assigned.
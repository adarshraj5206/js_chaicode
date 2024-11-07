const coding = ["js", "rb", "py", "java", "cpp"]

// forEach loop
// coding.forEach(function (item) {
//     console.log(item);
// }) 


// forEach using arrow function
// coding.forEach((item) => {
//     console.log(item);
// })

// forEach using function
function printMe(item) {
    console.log(item);
}
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },  
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach((item) => {
    // console.log(item);
    console.log(item.languageName);
})
const name = "Adarsh"
const repoCount = 25

//console.log(name + repoCount + " value");// old way to define string in js

//modern way to define strings in js using backticks ` `
// the main advantages of using backticks is the string interpolation 

console.log(`Hello my name is  ${name} and my repo count is ${repoCount}`);

const gameName = new String('adarshhhc-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('8'));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,5)
console.log(anotherString);

const newStringone = "   adarsh    "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://adarsh.com/adarsh%20vardhan"

console.log(url.replace('%20', '---'))

console.log(url.includes('adarsh'));
console.log(url.includes('adi'));

console.log(gameName.split('-'));

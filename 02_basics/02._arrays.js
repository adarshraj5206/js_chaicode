const Marvel_Heros = [ "Thor", "Iron Man", "Spidy"];
const Dc_Heros = ["Bat Man", "Super Man", "Flash"];

// Push array in array

// Marvel_Heros.push(Dc_Heros) // in js, Array takes any type of data this is the example, in this example, Marvel_Heros[] stores array ( DC_Heros[] ) as a single element.

// console.log(Marvel_Heros);
// console.log(Marvel_Heros[3][1]); // this will print super man bcz  it refer 3 index element and that element is an array and that array's refers 1st index of element which is "super Man" will be print it.

// Merge array using concat() Method { in this method we can merge only two array  }
console.log("\nMerge array using concat() Method");

const allHeros =  Marvel_Heros.concat(Dc_Heros); 
// Output -> [ 'Thor', 'Iron Man', 'Spidy', 'Bat Man', 'Super Man', 'Flash' ] 
// this will work same as push() method but it makes a new array 
// console.log(allHeros);


//merge array using spread operator { in this method we can merge more than two arrays }
console.log("\nmerge array using spread operator ");

const all_new_heros = [...Marvel_Heros, ...Dc_Heros]

// console.log(all_new_heros)

//# How to handel this type situation

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(3)
console.log(real_another_array);


console.log(Array.isArray("Adarsh")); // this method tell us that passed value is array or not in the form of boolean if that value is array then it return true and if that value is not array it returns false

console.log(Array.from("Adarsh")); // This method converts that passed value as a array form like "Adarsh" to [ 'A', 'd', 'a', 'r', 's', 'h' ]


console.log(Array.from({name: "Adarsh"})); //it return empty array bcz it doesn't convert directly, in this method we need to tell this method what array we want like key's array/Value's array of that value

let score1 = 100
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

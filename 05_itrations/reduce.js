// reduce

const array1 = [ 1, 2, 3, 4 ]

// 0 + 1 + 2 + 3 + 4 
const initialValue = 0;
const sumWithInitial = array1.reduce( 
    (accumulator, currentValue) => accumulator + currentValue, 
    initialValue 
);

// console.log(sumWithInitial);
// expected output: 10

const myNums = [ 1, 2, 3 ]

// const myTotal = myNums.reduce( (acc, curr) => {
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc + curr
// }, 0 )

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0 )

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const total = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(total);



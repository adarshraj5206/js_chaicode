// const tinderUser = new Object()  // singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "samayṇ"
tinderUser.IsloggedIn = false.valueOf;

// console.log(tinderUser); 

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname : {
            firstname : "Adarsh",
            lastname : "vardhan"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname);


// Merge objects

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
const obj3 = { 5: "a", 6: "b"}

// const newobj = { obj1, obj2}
// const newobj = Object.assign({}, obj1,obj2,obj3 )


const newobj = { ...obj1, ...obj2, ...obj3}
// console.log( newobj );


const users = [
    {
        id : 1,
        email : "kanish@mail.com"
    },
    {
        id : 2,
        email : "adai@mgmail.com"
    }
]

console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// object de-structuring - { }

const course = {
    courseName : " js in hindi ",
    courseFees : 999,
    courseInstructor : "Hitesh"
}

// course.courseInstructor

// const { courseInstructor } = course
// console.log(courseInstructor);

const { courseInstructor : instructor } = course
console.log(instructor);



// json --> json is like a object but it dont have any name and it always keeps keys and value in strings

// {
//     "name" : "Adarsh",
//     "courseName" : "js in hindi",
//     "price" : "Free"
// }

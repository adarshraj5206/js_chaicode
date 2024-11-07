const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key); // js cpp rb swift
    // console.log(myObject[key]); // javascript C++ ruby swift by apple
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); // 0 1 2 3 4
    // console.log(programming[key]); // js rb py java cpp
}


// map
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

for (const key in map) { // map is not iterable
    console.log(key);
}

// WRITE YOUR CODE HERE
var names = ["Darwin", "Scott", "Dennis", "Stephon", "Noah", "PJ"];

console.log("Welcome to the class " + names[0]);
console.log("Welcome to the class " + names[1]);
console.log("Welcome to the class " + names[2]);
console.log("Welcome to the class " + names[3]);
console.log("Welcome to the class " + names[4]);

names[0] = "Bob";

if(names[0] !== "Dan") {
    console.log(names[0] + " is in class");
}

console.log(names[names.length - 1]);



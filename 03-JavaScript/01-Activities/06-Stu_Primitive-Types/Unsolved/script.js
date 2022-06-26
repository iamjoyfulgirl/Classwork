var one = 64;
var two = "656302";
var three = false;
var four = 64.55;
var five = "Howdy!";
var six;

// number, string, boolean, number, string, undefined
console.log(typeof one); // this will log number
console.log(typeof two); // this will log string
console.log(typeof three); // this will boolean
console.log(typeof four);  // this will log number
console.log(typeof five); // this will log string
console.log(typeof six); // this will log undefined

four = "Hello!";
five = false;
six = 23;

// Will log out: string, boolean, number
console.log(typeof four); // this will log string
console.log(typeof five); // this will log boolean
console.log(typeof six); // this will log number

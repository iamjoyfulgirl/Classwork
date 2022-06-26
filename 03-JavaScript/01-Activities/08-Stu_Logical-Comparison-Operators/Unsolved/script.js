var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = (b === e);
var expression2 = (e < d);

// Use comparison operators so all expressions below log to the console as true
console.log(a == b);
console.log(b == e); // or (b === e)
console.log(c > b); // or (c != b)
console.log(d === 0);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && !expression2); //true
console.log( expression1 || expression2); //false
  
var notAnumber = ("s" - 3);

console.log('typeof notAnumber', typeof notAnumber); //NaN

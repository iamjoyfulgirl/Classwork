// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}

// Logs "They are equal in type and value"
isEqual(10, 10);

// Refer to sample functions as needed!

// Call the isEqual function so that it logs "They are equal in value"
isEqual(10, "10");

// Rewrite isEqual as a function expression called 'isEqualTakeTwo`
var isEqualTakeTwo = function(x,y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}
// Call the isEqualTakeTwo function so that it logs "They are not equal"
isEqualTakeTwo(5, "u");



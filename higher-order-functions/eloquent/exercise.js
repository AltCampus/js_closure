// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.

function flatArray(array) {
  return array.reduce( (acc, cv) => {
    acc = acc.concat(cv);
    return acc;
  },[] );
}

// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.
function loop(limit, conditionCheck, decrement, display) {

  while(conditionCheck(limit)) {
    display(limit);
    limit = decrement(limit);
  }
  
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  // Your code here.
  for(let i = 0; i < array.length; i++) {
    if( !test(array[i]) ) {
      return false;
    }
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

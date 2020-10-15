// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.
arrays.reduce((a, c) => a.concat(c), []);
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop

loop(3, n => n > 0, n => n - 1, console.log);
// Your code here.

function loop(num, test, test2, op){
  for(let i = 0; i <= num; i++){
    if(test(i)){
      op(i);
      num = test2(num)

    }
  }
}

// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  // Your code here.
  let result = true
  for(let item of array){
     result = result && test(item)
  }
  return result;
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

## Scope (Where to look for things)

1. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

console.log(window.firstName, window.lastName, window.knownAs);

//Output : undefined, undefined, "no one"
```

2. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}

console.log(window.fullName(firstName, lastName));

// Output : "AryaStark"
```

3. Make a Execution Context Diagram for the following JS and write the output.

```js

fucntion addOne(num){
  return num + 1;
}

var one = addOne(0);
var two = addOne(1);
console.log(one, two);

// Output : 1
//          2

```

4. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
fucntion addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(one, two);

// Output : 1
//          2

```

5. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
fucntion addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(two);

// Output : 1
//          2
```

6. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
const addOne = num => {
  return num + 1;
};
var two = addOne(1);
console.log(two);

// Output: addOne is not defined.
//         2
```

7. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
const addOne = num => {
  return num + 1;
};
var two = addOne(1);
console.log(two);
```

8. What will be the output of the following

```js
function isAwesome() {
  var awesome;
  if (false) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();

// Output: undefined
```

9. What will be the output of the following

```js
function isAwesome() {
  let awesome;
  if (true) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();

// Output: true 
```

10. What will be the output of the following

```js
function isAwesome() {
  let awesome;
  if (false) {
    awesome = true;
  }
  console.log(awesome);
}
isAwesome();

// Output: undefined
```

11. What will be the output of the following

```js

let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);

// Output: "AryaStark"
```

12. What will be the output of the following

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
  return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);

// Output: "AryaStark"
```

13. Guess the output of the code below with a reason.

```js
function sayHello() {
  let name = "Arya Stark";
}
sayHello();

console.log(name);

// Error: name is not defined. Because let is a block scoped and we can't access it out of the block.

```

14. Guess the output of the code below with a reason.

```js
if (true) {
  var name = "Arya Stark";
}
console.log(name);

// Output : "Arya Stark" [Because var is function scoped and if it is not declared inside any function then it'll get stored inside the window object.]

```

15. Guess the output of the code below with a reason.

```js
if (true) {
  let name = "Arya Stark";
}
console.log(name);

// Error: name is not defined. Because let is a block scoped and we can't access it out of the block.
```

16. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
  //
}
console.log(i);

// Output: 20;
```

17. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
  //
}
console.log(i);

// Error: i is not defined. Because let is a block scoped and we can't access it out of the block.
```

18. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
  setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");

```

19. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
  setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");
```

20. Guess the output and the reason behind that.

```js
function sample() {
  if (true) {
    var username = "John Snow";
  }
  console.log(username);
}

// Var is function scoped so we can access it anywhere inside the function and because of closure the console.log gets the value of username.

```

21. Guess the output and the reason behind that.

```js
function sample() {
  if (true) {
    let username = "John Snow";
  }
  console.log(username);
}

// Error: username is not defined. Because let is block scoped and we can't access it outside the block(Here if block).
```

22. Guess the output and the reason behind that.

```js
function sample() {
  var username = "Arya Stark";
  if (true) {
    var username = "John Snow";
    console.log(username);
  }
  console.log(username, "second");
}

// Output :"John Snow"
//         "John Snow" 
//         "second"

// var is function scoped so we can access it anywhere inside the function where it is declared. Variable declared with var can be declared more than once and each declaration it'll overwrite the previous value.

```

23. Guess the output and the reason behind that.

```js
function sample() {
  let username = "Arya Stark";
  if (true) {
    let username = "John Snow";
    console.log(username, "first");
  }
  console.log(username, "second");
}

// Output: "John Snow"
//         "first"
//         "Arya Stark"
//         "Second"

// let is block scoped so we can't access it outside the block. Here inside the if statement the username has no link with the outer username variable because they are belonging in different blocks. It is a totally new variable for this if block .



```

24. Guess the output and the reason behind that.

```js
function sample(...args) {
  for (let i = 0; i < args.length; i++) {
    let message = `Hello I am ${args[i]}`;
    console.log(message);
  }
}

sample("First", "Second", "Third");
```

25. Guess the output and the reason behind that.

```js
function sample(...args) {
  for (let i = 0; i < args.length; i++) {
    const message = `Hello I am ${args[i]}`;
    console.log(message);
  }
}

sample("First", "Second", "Third");
```

26. Guess the output and the reason behind that.

```js

if (true) {
  const myFunc = function() {
    console.log(username, "Second");
  };
  console.log(username, "First");
  let username = "Hello World!";
  myFunc();
}

// Output: username is not defined
//         "First"
//         "Hello World"
//         "Second"

// let does not initialize variable during declaration phase. As we can't use any uninitialized variable that's why it'll throw an error.

```

27. Guess the output and the reason behind that.

```js

function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    console.log(`I love this movie called ${movie.toUpperCase()}`);
  }
  inner();
}

outer();

// Output: "I love this movie called MAD MAX: FURY ROAD"

// Because of closure it gets the value of movie.

```

28. Guess the output and the reason behind that.

```js

function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    let movie = "Before Sunrise";
    console.log(`I love this movie called ${movie.toUpperCase()}`);
  }
  inner();
}

outer();

// Output: "I love this movie called Before Sunrise"

// inner function will search its memory first.

```

29. Guess the output and the reason behind that.

```js

function outer() {
  let movie = "Mad Max: Fury Road";
  function inner() {
    let movie = "Before Sunrise";
    function extraInner() {
      let movie = "Gone Girl";
      console.log("I love this movie called ${movie.toUpperCase()}");
    }
    extraInner();
  }
  inner();
}

outer();

// Output: "I love this movie called Gone Girl"

// Because extraInner function always searches for the variable movie in its memory first.

```

30. Execute all the functions inside `allFunctions` variable using any loop. (Hint: use for of loop functions are object)

```js
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

// ---

let allFunctions = [add, sub, multiply, divide];
let a = 10;
let b = 5;

for(let fn of allFunctions) {
  console.log( fn(a, b) );
}

```

31. You have to pass 10 and 12 as initial value and find the final output when you pass the return value of one function as an input to the next function in the array `allFunctions`.

```js
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a + b;
};
const divide = (a, b) => {
  return a / b;
};

let allFunctions = [add, add, add, add, add, sub, sub, multiply, divide];

let a = 10;
let b = 12;

for(let fn of allFunctions) {
  a = fn(a, b);
}


```

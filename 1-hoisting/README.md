For the given code below:

- create the execution context diagram
- re-write the code in ways that system will understand/interprete

1.

```js
var username = 'Arya';
let brothers = ['John', 'Ryan', 'Bran'];

console.log(username, brothers[0]);

function sayHello(name) {
  return `Hello ${name}`;
}

let message = sayHello(username);
var nextMessage = sayHello('Test');
```
//- re-write 
```js
// Declaration Phase 
username = undefined;
brother;

function sayHello(name){
  return `Hello ${name}`
}
message;
nextMessage = undefined;

 // Execution Phase 
 username = 'Arya';
 brothers =  ['John', 'Ryan', 'Bran'];
 console.log(username, brothers[0]); // 'Arya', 'John';

message = sayHello(username);
nextMessage = sayHello('Test');
```

2.

```js
console.log(username, numbers);

var username = 'Arya';
let number = 21;

function sayHello(name) {
  return `Hello ${name}`;
}

let message = sayHello(username);
var nextMessage = sayHello('Test');
```

```js
// Declaration Phase

username = undefined;
number; 
function sayHello(name){
  return `Hello ${name}`;
}
message;
nextMessage = undefined;

Execution Phase 
console.log(username, number); // ReferenceError: Can not access 'number before initialization

```

3.

```js
console.log(username, numbers);

let username = 'Arya';
let number = 21;

let sayHello = function (name) {
  return `Hello ${name}`;
};

let message = sayHello(username);
var nextMessage = sayHello('Test');
```

```js 
// Declaration Phase
username;
number;
sayHello;
message;
nextMessage = undefined;

//Execution Phase

console.log(username, number) // ReferenceError: Cannot access 'username' before initialization
```

4.

```js
let username = 'Arya';
console.log(username, numbers);

let number = 21;
let message = sayHello(username);

let sayHello = function (name) {
  return `Hello ${name}`;
};

var nextMessage = sayHello('Test');
```

```js
// Declaration Phase
username = 'Arya';
number = 21;
message;
sayHello;
nextMessage = undefined;
 
//Execution Phase
username = 'Arya';
console.log(username,number) // ReferenceError: Cannot access 'number' before initialization
```

5.

```js
console.log(name);
console.log(age);
var name = 'Lydia';
let age = 21;
```
```js 
name = undefined;
age;
// Execution Phase 
console.log(name) // undefined
console.log(age) // ReferenceError: Cannot access 'age' before initialization
```
6.

```js
function sayHi(name) {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```
```js
// Declaration Phase
function sayHi(name){
 console.log(name);
 console.log(age);
 var name = 'Lydia';
 let age = 21
}

//Execution Phase

//F.E.C

//D
name = undefined;
age;

//Execution Phase
console.log(name) // undefined
console.log(age) // ReferenceError: Cannot access 'age' before initialization

```

6.

```js
sayHi();
function sayHi(name) {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}
```

```js 
// Declaration Phase
function sayHi(name) {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}
//Execution Phase
//F.E.C
//Declaration Phase
name = undefined;
age;

//Execution Phase
 console.log(name) // undefined;
 console.log(age) // ReferenceError: Cannot access 'age' before initialization
```
7.

```js
sayHi();
let sayHi = function sayHi(name) {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
};
```
```js 
// Declaration Phase
function sayHi(name) {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}
//Execution Phase
//F.E.C
//Declaration Phase
name = undefined;
age;

//Execution Phase
 console.log(name) // undefined;
 console.log(age) // ReferenceError: Cannot access 'age' before initialization
```
8.

```js
let num1 = 21;
console.log(sum);
var sum = num1 + num2;
let num2 = 30;
```
```js
//Declaration Phase

num1;
sum = undefined;
num2;

//Execution Phase
num1 = 21;
// ReferenceError: num2 is not defined
 
```

9.

```js
var num1 = 21;

let sum2 = addAgain(num1, num2, 4, 5, 6);

let add = (a, b, c, d, e) => {
  return a + b + c + d + e;
};
function addAgain(a, b) {
  return a + b;
}
let num2 = 200;

let sum = add(num1, num2, 4, 5, 6);
```

```js 

num1 = undefined;
sum2;
add;
function addAgain(){
  return a + b;
}
num2;
sum;
//Execution Phase
num1 = 21;
sum2 = // function call
 // F.E.C sum2
 //F.E.C D
  a = undefined;
  b = undefined;
  //
 //F.E.C E
 a = 21;
 b = num2;
 // num2 is not defined

add = // function call
//F.E.C
//Declaration Phase
    a = undefined;
    b = undefined;
    c = undefined;
    d = undefined;
    e = undefined;
  // Execution Phase
  a = 21;
  b=200;
  c=4;
  d=5;
  e=6;
  return a+b+c+d+e // 236
sum = 236;
```
10.

```js
function test(a) {
  let num1 = 21;
  return add(a, num1);
}

let sum = test(100);

let add = (a, b) => {
  return a + b;
};
```

```js
// Declaration Phase
function test(a) {
  let num1 = 21;
  return add(a, num1);
}
sum;
add;
// Execution Phase
sum = //function call
  // F.E.C
  // F.E.C D
  a = undefined;
  b = undefined;
   // F.E.C E
  a = 100;
  b = 21; 
  return // 121


 ```
11.

```js
function test(a) {
  let num1 = 21;
  return add(a, num1);
}

let sum = test(100);

function add(a, b) {
  return a + b;
}
```
```js
// Declaration Phase
function test(a) {
  let num1 = 21;
  return add(a, num1);
}
sum;
function add(a, b) {
  return a + b;
}
// Execution Phase
sum = //function call
  //F.E.C
  //F.E.C D
  a = undefined;
  num1;
  
  // F.E.C E
  a = 100;
  num1 = 21;
  return 121

sum = 121
```
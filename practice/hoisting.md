## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal);
var animal = "monkey";
// Output or Error Message
```
Error: undefined;

```js
console.log(animal);
let animal = "monkey";
// Output or Error Message
```
Error: error: Uncaught ReferenceError: Cannot access 'animal' before initialization;
```js
console.log(animal);
const animal = "monkey";
// Output or Error Message
```
Error: Uncaught ReferenceError: Cannot access 'animal' before initialization

```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");
// Output or Error Message
```
Output: "Hey Everyone"

```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}
// Output or Error Message
```
output: 'Hey Everyone'

```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
// Output or Error Message
```
Error: Uncaught TypeError: sayHello is not a function

```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};
```
Error: Uncaught ReferenceError: Cannot access 'sayHello' before initialization


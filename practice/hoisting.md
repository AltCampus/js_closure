## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal);
var animal = "monkey";
// Output : undefined

```

```js
console.log(animal);
let animal = "monkey";
// Error Message : animal is not defined;
```

```js
console.log(animal);
const animal = "monkey";
// Error Message : animal is not defined;
```

```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");
// Output : It'll open the modal window and display the value of msg which is "Hey Everyone"
```

```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}
// Output : It'll open the modal window and display the value of msg which is "Hey Everyone"
```

```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
// Error Message : sayHello is not a function.
```

```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};

// Error Message : sayHello is not defined.
```

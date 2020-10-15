// Challenge 1
function addTwo(num) {
    return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word + "s";
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    for (var i = 0; i < array.length; i++) {
        array[i] = callback(array[i])
    }
    return array;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        var element = array[i];
        callback(element);
    }
}


// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let result = [];
    forEach(array, (element) => {
        result.push(callback(element));
    });
    return result;
}

console.log(mapWith([1, 2, 3, 4], addTwo));

//Extension 2
var nums = [4, 1, 3];

function reduce(array, callback) {
    let inetialVal = array[0];
    let acc = inetialVal;
    for (let i = 1; i < array.length; i++) {
        let currVal = array[i];
        acc = callback(acc, currVal);
    }
    return acc;
}

function add(num1, num2) {
    return num1 + num2;
}
console.log(reduce(nums, add));

//Extension 3
function intersection(arrays) {
    let array = [...arguments];
    let result = array.reduce((acc, cv) => {
        acc = acc.filter((element) => {
            return cv.includes(element);
        })
        return acc;
    });
    return result;
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
    let array = [...arguments];
    let result = [];
    let fullArray = array.reduce((acc, cv) => {
        acc = acc.concat(cv);
        return acc;
    });
    fullArray.forEach(element => {
        if (!result.includes(element))
            result.push(element);
    });
    return result;
}


console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    let result = {};
    for (let index = 0; index < array1.length; index++) {
        var element = callback(array1[index]);
        if (array2[index] === element) {
            result[array1[index]] = array2[index]
        } else
            continue;
    }
    return result;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function (str) {
    return str.toUpperCase();
}));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    console.log(arrCallbacks);
    let result = {};
    arrVals.forEach(element => {
        let arr = [];
        arrCallbacks.forEach(fun => {
            arr.push(fun(element));
        });
        result[element] = arr;
    });
    return result;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function (str) {
    return str.toUpperCase();
}, function (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}, function (str) {
    return str + str;
}]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 1
function addTwo(num) {
    return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    let newAr = [];
    for (let item of array) {
        newAr.push(callback(item));
    }
    return newAr
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for (let item of array) {
        callback(item);
    }
}


// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let newAr = [];
    array.forEach(item => {
        console.log(item)
        newAr.push(callback(item))
    });
    return newAr
}

//Extension 2
function reduce(array, callback, initialValue) {
    let result = array[0] || initialValue;
    array.forEach(array, (item) => {
        result = callback(result, item);
    });
    return result;
}

//Extension 3
function intersection(arrays) {
 return arrays.reduce((a, c) => {
      a.forEach((e, i) => {
         if(!c.includes(e)){
             a.splice(i, 1);
         }
     })
     return a;
 })
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
    let newAr = [];
    arrays = arrays.reduce((a, c) => a.concat(c));
    arrays.forEach((num) => {
        if (!newAr.includes(num)) {
            newAr.push(num)
        }
    });
    return newAr
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));

// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    let finalOb = {};
    array1.forEach((word) => {
        if (array2.includes(callback(word))) {
            ob[word] = callback(word)
        }
    })
    return finalOb;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    return arrVals.reduce((acc, cv) => {
        acc[cv] = arrCallbacks.map(fn => fn(cv))
    }, {})
}
// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
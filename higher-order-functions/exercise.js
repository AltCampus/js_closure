// Challenge 1
function addTwo(num) {
    return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word + 's';
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    let index = 0;
    let newArray = [];
    while(newArray.length < array.length) {
        newArray.push(callback(array[index], index, array));
        index++;
    }
    return newArray;   
}

function addTwo(num) {
  return num + 2;
}


// console.log(map([1, 2, 3], addTwo));

// Challenge 4

let alphabet = "";
function forEach(array, callback) {
    let index = 0;
   
    while(index < array.length) {
        callback(array[index],index, array);
        index++;
    }  
   
}

var letters = ['a', 'b', 'c', 'd'];

forEach(letters,(char) => alphabet += char);

console.log(alphabet)

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let newArray = [];
    array.forEach(el => newArray.push( callback(el) ));
    return newArray;
}

function multiplyByTwo(el) {
  return el * 2;
}

var arr = [1, 2, 3, 4, 5];


console.log(mapWith(arr,multiplyByTwo));

//Extension 2
function reduce(array, callback, initialValue = array[0]) {
    let ans;
    for(let i = 0; i < array.length; i++) {
      initialValue = callback(initialValue, array[i], i, array);
    }
    ans = initialValue;
    return ans;
}

function add(acc, cv) {
 return acc+cv;
}


let array = [1, 2, 3, 4];

console.log(reduce(array, add, 0));


//Extension 3
function intersection(arrays) {
    let ans;
    let arr = arrays.flat();
    ans = arr.reduce((acc, cv, index) => {
      
      if(arr.indexOf(cv,index+1)!= -1 && !acc.includes(cv)) {
        acc.push(cv);
      }
      return acc;
    }, []);
   return ans;
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4

function union(arrays) {
    let ans;
    let arr = arrays.flat();
    ans = arr.reduce((acc, cv, index) => {
      
      if(!acc.includes(cv)) {
        acc.push(cv);
      }
      return acc;
    }, []);
   return ans;
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {

    let obj = callback(array1, array2);
    return obj;
}
  
  function getObj(array1, array2) {
      
      let copyArray2 = array2.map(el => el.toUpperCase());
      
      return array1.reduce( (acc, cv) => {
      let pos = copyArray2.indexOf(cv.toUpperCase());
        
      if(pos !== -1 && !Object.keys(acc).includes(cv)) {
        acc[cv] = array2[pos];
      }
        
      return acc;
    },{});
      
  }
  
  
  let array1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
  let array2 = ['HI', 'Howdy', 'BYE', 'LATER', 'hello'];
  
  console.log(objOfMatches(array1, array2, getObj));

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    let obj = arrVals.reduce( (acc, cv) => {
      acc[cv] = arrCallbacks.map(el=> el(cv))
      return acc;
    },{})
    
    return obj
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

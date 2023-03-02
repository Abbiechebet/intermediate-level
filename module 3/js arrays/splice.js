//Adding, removing, and replacing elements at any point in the array 
//splice() method - can take in one arguement is splice(start)

/*
(start)-from what index in the array do you wanna start yo operation?

(deletecount) -how many array elementsdo you want to remove starting 
from the index?

(item1...itemN) - Elements you ant to insert into the array

splice(start)
splice(start, deletecount)
splice(start, deletecount, item1)
splice(start, deletecount, item1, item2, item3)
*/

let currencies  = ['NGN', 'USD', 'YEN','EURO', 'KES'];
//currencies.unshift('GBP)

//adding four items to the beginning of the array
currencies.splice(0, 0, 'GBP', 'CAD', 'CEDIS', 'ZAR')
console.log(currencies);

//Adding element in btn array //to start from USD
currencies.splice (6,0, 'UGX', 'NAD', 'TZS')
console.log(currencies);

//adding elements at the end of array ie from KES
currencies.splice (12,0, 'MWK', 'MUR', 'ZMW')
console.log(currencies);

//removing element(s) in an array
//currencies.splice (1,2)
//acessing removed elements
removedElements =currencies.splice (1,2) 
// 2 rep the index and 1 rep number of elements to be removed
console.log('removed elements are ' + removedElements );

console.log(currencies);

//replace element(s) in an array
currencies.splice (1,2, 'MAD', 'TND')
console.log(currencies);




//reversed()
const array = ['one', 'two', 'three'];
console.log('array:', array);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]
console.log('array:', array);
// Expected output: "array:" Array ["three", "two", "one"]



// slice()
// slice(start)
// slice(start, end)
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
// Using slice, create newCar from myCar.
const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
  };
  const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
  const newCar = myCar.slice(0, 2);
  
  console.log("myCar =", myCar);
  console.log("newCar =", newCar);
  console.log("myCar[0].color =", myCar[0].color);
  console.log("newCar[0].color =", newCar[0].color);
  
  // Change the color of myHonda.
  myHonda.color = "purple";
  console.log("The new color of my Honda is", myHonda.color);
  
  console.log("myCar[0].color =", myCar[0].color);
  console.log("newCar[0].color =", newCar[0].color);
  
/*
  The slice() method is often used with bind() and call() to create a 
  utility method that converts an array-like object into an array.
*/
// slice() is called with `this` passed as the first argument
const slice = Function.prototype.call.bind(Array.prototype.slice);
function list() {
  return slice(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
console.log(list1)


/**
shift
The shift() method removes the first element from an array and returns that 
removed element. This method changes the length of the array.
 */
const array3 = [10, 21, 31];
console.log(array3.shift());
console.log(array3);
console.log(array3.slice(-1));
console.log(array3);

const Names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];
while (typeof (i = Names.shift()) !== "undefined") {
  console.log(i);
}


/**
 copyWithin()
The copyWithin() method shallow copies part of an array to another 
location in the same array and returns it without modifying its length.

copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)
 */
const arrayA = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(arrayA.copyWithin(0, 3, 4));
// Copy to index 1 all elements from index 3 to the end
console.log(arrayA.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

console.log([1, 2, 3, 4, 5].copyWithin(-2));
// [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]

/**
 flat()
The flat() method creates a new array with all sub-array elements 
concatenated into it recursively up to the specified depth

flat()
flat(depth)
 */
const ar1 = [0, 1, 2, [3, 4]];
console.log(ar1.flat());
// Expected output: Array [0, 1, 2, 3, 4]
const ar2 = [0, 1, 2, [[[3, 4]]]];
console.log(ar2.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]



const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity));
console.log(arr4.flat());
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



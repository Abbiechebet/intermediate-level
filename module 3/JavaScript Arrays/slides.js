//Finding Elements (primitives)
/**
indexOf()
lastIndexOf()
includes()
 */

//Finding Elements (Reference Types)
/*
Different objects have different references, they're in two different 
locations in memory. 

find()
findIndex()
*/
const units = [
    { id: 1, name: 'mth101'},
    { id: 2, name: 'chm101'},
  ];
  
  const course = units.find(function(course) {
    return course.name === 'mth101';
  }); 
  console.log({course}) // { id: 1, name: ‘mth101’}
  
  const coursE = units.findIndex(function(coursE) {
    return coursE.name === 'xyz';
  }); 
  console.log({coursE}) // -1
  
  //arrow functions
  const courSe = units.find(courSe => {
    return courSe.name === 'mth101';
  });
  console.log({courSe})//{ id: 1, name: 'mth101' }
  
  
  // adding elements to an array
  /**
  unshift()
  splice()
  push()
   */
  
  
  //removing elements
  /**
  shift()
  Splice()
  pop()
   */
  
  
  //Emptying an array
  
  //solution 1
  /**
   * reassigning empty array to an existing array
  This solution works if you do not have any other references to the original
   array. If you do have multiple references to the original array, then you 
   need to use one of the other solutions.
   */
   let nuMbers = [1,2,3,4];
   console.log({nuMbers});//[ 1, 2, 3, 4 ]
   let another = nuMbers; // points to old object in memory
   nuMbers = []; // new object in memory
   console.log({nuMbers}); //[] 
   console.log({another});//[ 1, 2, 3, 4 ]
  
   //solution 2
  /**
   *  simply set the lengths property to 0
  This will truncate the array.
  doesn't matter how many references you have to that array
   */
  let nUmbers = [1,2,3,4];
  let other = nUmbers;
  nUmbers.length = 0;
  console.log({nUmbers}); // []
  console.log({other}); // []
  
  //solution 3
  /**
   *using splice() method
   values.splice(0, values.length);
   */
  values = [10,30,2,3,5,8]
  values.splice(0,6);
  console.log({values});
   
  
   //solution 4
   /**
    * using pop() method
    pop method removes the last element in array. Now we can put it in a 
    loop, and keep calling this method, as long as we have an element in it.
  
    while(values.length > 0){
      values.pop();
   } 
    */
   //values = [10,30,2,3,5,8]
    while(values.length > 0){
      values.pop();
   }
   console.log({values});
   
  
  
  //Combining and Slicing Arrays
  //slice(index, length) 
  const first = [1,2,3,4];
  const second = [5,6,7,8];
  
  const combine = first.concat(second);
  console.log({combine});//[1, 2, 3, 4, 5, 6, 7, 8]
  //pass a zero based index with the start and end
  const slice = combine.slice(2,5);
  console.log({slice}); // [ 3, 4, 5]
  //exclude the end index
  const slicer = combine.slice(2);
  console.log({slicer}); //[3, 4, 5, 6, 7, 8 ]
  //exclude the starting index
  const sliced = combine.slice();
  console.log({sliced}); //[1, 2, 3, 4, 5, 6, 7, 8]
  
  
  
  
  //Combining and Slicing object and array
  let First = [
    { id: 1 },
    { firstName: 'Sebastian'}
  ];
  let Second = [4,5,6];
  const Combined = First.concat(Second);
  First[1].firstName= 'Charlynn'; //reference
  const Slice = Combined.slice();
  console.log({Combined});
  console.log({Slice});
  
  
  
  
  //the Spread Operator
  const combineD = [...First, ...Second];
  console.log({combineD});
  
  // making copy of original arrays
  //slice without arguements
  const copy = combineD.slice();
  //spread operator
  const copy2 = [...combineD ];
  
  
  
  
  //ITERATING AN ARRAY
  const numbers = [12, 10, 2, 96, 80, 40]
  numbers.forEach((number,index) => console.log({index, number}));
  
  //joining arrays
  const number = [1,2,3,4];
  const joined = number.join(',');
  console.log({joined});
  
  //splitting arrays
  const message = 'This is my first message'
  const parts = message.split(" "); 
  console.log({parts}); //[ 'This', 'is', 'my', 'first', 'message' ]
  
  //joining arrays
  const combined = parts.join("-");
  console.log({combined}); // This-is-my-first-message
  
  
  //sorting arrays
  const numNew = [34,2,82,121,11,55];
  numNew.sort(); //[ 11, 121, 2, 34, 55, 82 ]
  console.log( {numNew});
  
  numNew.reverse();
  console.log( {numNew}); //[ 82, 55, 34, 2, 121, 11 ]
  
  
  const courses = [
      { id:1, name: 'Node.js'},
      { id:2, name: 'Javascript'}
    ];
    courses.sort(function(a, b){
      //  a < b => -1
      // a > b => 1
      // a === b => 0
      // if (a.name < b.name) return -1;
      // if (a.name > b.name) return 1;
      // return 0;
      
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
  })
  console.log({courses});
  
  
  //Testing the Elements of an Array
  //(parameters are value, index and array)
  /**
         every()
  to check and see if all numbers in an array matches a given criteria, 
  we call numbers.every() and here we pass a callback function 
  
         some()
  checks to see if we have at least one element in this array that matches 
  the criteria  As soon as it finds an element that matches this criteria, 
  it's going to return true and the search will terminate. 
  
  */
  const nums = [1,2,3];
  const allPositive = nums.every(function(value){
    return value >= 0
  });
  console.log({allPositive});
  
  const Numbers = [1, -1, 2, 3];
  const atLeastOnePositive = Numbers.some(function(value){
    return value >= 0
  });
  
  console.log({atLeastOnePositive});
  
  
  //Filtering an Array
  //(parameters are value, index and array)
  /**
   filter an array based on a search criteria.
   when we call the filter method, this method will loop through this array, 
   and execute this callback function for each number, for each element, now 
   if the element matches this criteria, it will add this element to a new 
   array, and finally we can get the new array here
   */
   const Number = [1,-1,2,3];
   const filtered = Number.filter(function(value){
     return value >= 0;
   });
   console.log({filtered})// [1,2,3]
  
   //arrow function
   const num = [1,-1,2,3];
  const filtering = num.filter(n => n >= 0);
  console.log({filtered})// [1,2,3]
  
   // Mapping an Array
   const numBers = [1,-1,2,3];
  const filter = numBers.filter(n => n >= 0);
  const items = filtered.map(n => '<li>' + n + '</li>');
  console.log({items})// [“<li>1</li>”,“<li>2</li>”,“<li>3</li>”]
  
  const html = items.join('');
  console.log({html}); //<li>1</li><li>2</li><li>3</li>
  
  const Html = '<ul>'+ items.join('')+ '</ul>';
  console.log(Html); // <ul><li>1</li><li>2</li><li>3</li></ul>
  
  const filters = numBers.filter(n => n >= 0);
  const Items = filters.map(n =>{
    return { value: n};
  });
  console.log({filters});//[ 1, 2, 3 ] 
  console.log({Items});//[ { value: 1 }, { value: 2 }, { value: 3 } ] 
  
  // removing return keyword
  /**
  The reason for this is by default these curly braces in an arrow function, 
  represent a code block. So when the JavaScript engine tries to parse this 
  arrow function it thinks here we are defining a code block as opposed to 
  an object to return
   */
  const filtered1= numbers.filter(n => n >= 0);
  const items1 = filtered1.map(n => { value: n});
  console.log({items1})// [undefined, undefined, undefined, undefined, undefined, undefined]
  
   //adding parentesis
   /**
  Putting this object in parenthesis and with this our JavaScript engine 
  will not look at this as a code block.
    */ 
   const filtered2 = numbers.filter(n => n >= 0);
   const items2 = filtered2.map(n => ({ value: n}));
   console.log({items2});//   [{ value: 12 },{ value: 10 },{ value: 2 },{ value: 96 },{ value: 80 },{ value: 40 }]
   
   numbers
  .filter(n => n >= 0)
  .map(n => ({value: n}));
  
  
  //Reducing an array
  //reduce()
  /**
  The purpose of reduce is to take an array and reduce it to a single value.
  (value, index, array)
  Depending on where you read documentation, you will see the first parameter 
  of reduce being called (start, previous, or accumulator)
  
  If you don't supply an argument, reduce will assume that the value of this 
  parameter should be the first value in the array, and it will start the 
  iteration from the second element.
   */
  
  let arr = [2,4,6,8];
  arr.reduce(function(acc,next){
      return acc + next;
  },5);
  
  /*
  In the first iteration, acc is 5 and next is 2; the callback returns 5 + 2 = 7.
  In the second iteration, acc is 7 and next is 4; the callback returns 7 + 4 = 11.
  In the third iteration, acc is 11 and next is 6; the callback returns 11 + 6 = 17.
  In the last iteration, acc is 17 and next is 8; the callback returns 17 + 8 = 25.
  Now the array is exhausted, so reduce returns 25 (which is the sum of all elements in the array, plus 5)
  */
  
  let arr1 = [2,4,6,8];
  arr1.reduce(function(acc,next){
      return acc + next;
  });
  /* 
  20 (When no second argument is supplied to reduce, the `acc` starts at the
   first value in the array, i.e. 2. In this case, we simply get the sum of 
   all values in the array.)
   */
  
  
   let arr3 = [1,2,3,4];
  arr3.reduce(function(acc,next){
      if(next >= 2){
          acc['key' + next] = next;
      }
      return acc;
  },{});
  // Think about what acc and next are for each step in the iteration!
  // Ultimately, this reduce will return the following:
  // Object {key2: 2, key3: 3, key4: 4}
  
  
  //Example 1: Using reduce() to sum up all the elements in an array:
const nums1 = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0)
console.log(sum); // 15


//Example 2: Using reduce() to find the maximum value in an array:
let nums2 = [5, 20, 100, 60, 1];
const maxValue = numbers.reduce((max, curr) => {
    if(curr > max) max = curr;
    return max;
});
console.log(maxValue); // 100


//Example 3: Using reduce() to merge different objects in a single object:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
const mergedObj = [obj1, obj2, obj3].reduce((acc, curr) => {
    return { ...acc, ...curr };
}, {});
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

/**
Example 4: Using reduce() to group objects in an array. For example, 
grouping products in a shopping cart according to their brand name.
 */
const shoppingCart = [
  {name: 'Apple', price: 1.99, quantity: 3},
  {name: 'Apple', price: 1.99, quantity: 3},
  {name: 'Xiomi', price: 2.99, quantity: 2},
  {name: 'Samsung', price: 3.99, quantity: 1},
  {name: 'Tesla', price: 3.99, quantity: 1},
  {name: 'Tesla', price: 4.99, quantity: 4},
  {name: 'Nokia', price: 4.99, quantity: 4},
]

const products = shoppingCart.reduce((productGroup, product) => {
  const name = product.name;
  if(productGroup[name] == null) {
      productGroup[name] = [];
  }
  productGroup[name].push(product);

  return productGroup;
}, {});

console.log(products);
// OUTPUT
/**
{
Apple: [
  { name: 'Apple', price: 1.99, quantity: 3 },
  { name: 'Apple', price: 1.99, quantity: 3 }
],
Xiomi: [ { name: 'Xiomi', price: 2.99, quantity: 2 } ],
Samsung: [ { name: 'Samsung', price: 3.99, quantity: 1 } ],
Tesla: [
  { name: 'Tesla', price: 3.99, quantity: 1 },
  { name: 'Tesla', price: 4.99, quantity: 4 }
],
Nokia: [ { name: 'Nokia', price: 4.99, quantity: 4 } ]
}
 */

/**
 * Use map when you want to transform an array
 * Use filter to select a subset of data from an array, and
 * Use reduce when you want to return a single value as a result.

video by Akshay Saini on YouTube.
 */
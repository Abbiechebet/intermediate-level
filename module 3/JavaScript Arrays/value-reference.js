/**
The main difference between primitives & non-primitives is that primitives are 
immutable i.e. there is no way to change a primitive value once it gets 
created, whereas non-primitives are mutable i.e. the value of an object 
can be changed after it gets created
 */


//Primitive data types are compared by value. If two values are the same, 
//then they are strictly equal.
var num1 = 40;
var num2 = 40;
console.log(num1 === num2); // true

var string1 = 'Scaler Academy';
var string2 = 'Scaler Academy';
console.log(string1 === string2); // true


/**
Objects and arrays are not compared by value. That means even if two 
objects and arrays have the same values and properties or the same
elements, respectively, they are not strictly equal.
 */
var obj1 = { 
    'website': 'Scaler Topics',
    'topic': 'JavaScript'
    };
    
var obj2 = {    
   'website': 'Scaler Topics',
   'topic': 'JavaScript'
    };
    
console.log(obj1 === obj2);  // false

var arr1 = [ 'Scaler', 'Topics' ];
var arr2 = [ 'Scaler', 'Topics' ];
console.log(arr1 === arr2);  // false

//Two objects are strictly equal only if they refer to the same object.
var obj1 = { 
    'website': 'Scaler Topics',
    'topic': 'JavaScript'
    };
    
var obj2 = obj1;    
obj1 === obj2;  // true

/**
Note: In JavaScript, primitive values are stored on the stack, while 
non-primitive values are stored in a heap.

In a pass-by value, the function receives a copy of the variable, 
which is independent of the originally passed variable.

Requires more space as the functions get a copy of the actual 
content therefore, a new variable is created in the memory.
 */

let number1 = 70
let number2 = number1

console.log(number1) // 70
console.log(number2) // 70

number1 = 40
console.log(number1) // 40
console.log(number2) // 70



function multiplication(tmp) {
    tmp = tmp * 50;
    return tmp;
}
var num = 30;
var result = multiplication(num);
console.log(num); // 30
console.log(result); // 1500

/**
Pass by reference in JavaScript does not create a new space in 
the memory, instead, we pass the reference/address of the actual 
parameter, which means the function can access the original value
of the variable. Thus, if we change the value of the variable inside
 the function, then the original value also gets changed.

It does not create a copy, instead, it works on the original 
variable, so all the changes made inside the function affect 
the original variable as well.
 */

let object1 = {website: "Scaler Academy"}
let object2 = object1;

console.log(object1)     // {website: "Scaler Academy"}
console.log(object2)     // {website: "Scaler Academy"}

object1.website = "Scaler Topics"

console.log(object1)     // {website: "Scaler Topics"}
console.log(object2)     // {website: "Scaler Topics"}

//Pass by Reference in Object (with Function)
let originalObj = {
    name: "Scaler Academy",
    rating: 4.5,
    topic: "JavaScript"
    };
    
    function demo(tmpObj) { 
      tmpObj.rating = 5; 
      console.log(tmpObj.rating); 
    } 
    
    console.log(originalObj.rating);    // 4.5
    demo(originalObj);             // 5
    console.log(originalObj.rating);    //5


//Pass by Reference in an Array (with Function)
let originalArr = ["Scaler", "Academy","is", "the"];

function pushArray(tmpArr) { 
  tmpArr.push('best')
  console.log(tmpArr); 
} 

console.log(originalArr);    // ["Scaler", "Academy", "is", "the"]
pushArray(originalArr);      // ["Scaler", "Academy", "is", "the", "best"]
//console.log(originalArr);    // ["Scaler", "Academy", "is", "the", "best"]

/**
When to Use Pass by Value?
As in pass-by value in JavaScript
     *a new copy of the variable is created
     *any changes made in the new variable are independent 
     of the original variable
     
     **it is useful when we want to keep track of the initial variable 
     and don't want to lose its value.


When to Use Pass by Reference?
     When we are passing arguments of large size as no
     separate copy is made in the called function,so memory
    is not wasted, and hence the program is more efficient.
 */

    

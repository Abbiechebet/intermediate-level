/**
A function is a repeatable process of procedure.
 A function takes a set of variables as inputs and returns a value as 
 an output.

In general, this type of function syntax consists of four parts:
*The function keyword,
*The name of the function (in this case, anyNameYouWantForTheFunction),
*Any parameters for the function (we'll ignore this for now, but parameters 
will go inside of the parentheses after the function name),
*The function body (the code for the function, which lives inside of the 
    curly braces).

scope - "The context in which values and expressions are 'visible,' or can 
be referenced"
Global variables are those declared outside of a block. 
Local variables are those declared inside of a block

FUNCTION SCOPE
*all variables that are defined outside of functions (and inside of 
    functions without the var keyword) are declared in the global scope, 

*all variables defined inside of functions can only be accessed by those 
functions (and any inner functions).

=======What is the difference between function scope and global scope?=====
JavaScript function scopes can have two different types, 
1. Local variables are declared within a function and can only be accessed 
within the function. 
2. Global variables are declared at top level outside any functions and 
all functions on a web page have access to them

CREATING FUNCTIONS
   first is a function declaration
   second is a function expression (we do not assign name)
    The function without a name is called an anonymous function.

An immediately invoked function expression (IIFE) is a function which 
 gets called after it is written

==================  HOISTING  ====================

Because variable declarationsare processed before any code is executed, 
declaring a variable anywhere in the code is equivalent to declaring it at 
the top. This also means that a variable can appear to be used before it's 
declared. This behavior is called "hoisting"


var is function scope.
let and const are block scope.
Function scope is within the function.
Block scope is within curly brackets.
 */

// Declaring functions
 
 function anyNameYouWantForTheFunction() {
    // As many lines of code as you want
}

// this is called the function definition
function firstFunction(){
    console.log("I just wrote my first function!");
}


// this is called the function definition -
// we are ONLY defining the function here
function firstFunction(){
    return "I just wrote my first function!";
}
// to call or invoke the function
firstFunction(); // now we don't see undefined anymore!
var returnValue = firstFunction();
console.log(returnValue);

function isOverPointFive(){
    if(Math.random() > .5){
        return true;
    }
    return false;
}

//OR
function isOverPointFive(){
    return Math.random() > .5 ? true : false;
}

//OR
function isOverPointFive(){
    return Math.random() > .5;
}

//function with parameters
function add(number1, number2){
    return number1 + number2;
}
//OR
add(7, 1); // returns 8
//OR
var num1 = 5;
var num2 = 8;
add(num1, num2);  // returns 13


//CREATING FUNCTIONS
//The first is a function declaration:
function declaredFunction(){
    return "I am a function declaration!";
}
// second is a function expression:
var expression = function(){
    return "I am a function expression!";
};

//immediately invoked function expression (IIFE)
(function(){
    var person = "Elie";
    return person;
})();

var result = (function(){
    var person = "Elie";
    return person;
})();

console.log(result);


//(IIFE) that returns object
var personObject = (function() {
    return {
        name: "Tim",
        age: 32,
        occupation: "developer",
        hobbies: "sailing"
    };
})();
console.log(personObject);


var personObject = (function invokeRightAway(){
    var person = "Elie";
    return {
        getName: function(){
            return person;
        },
        setName: function(newName){
            person = newName;
        }
    };
})();
console.log(personObject.getName());
console.log(personObject.setName('Tonnie'));
console.log(personObject.getName());
//console.log(person);// ReferenceError: person is not defined

//HOISTING
var instructor;
instructor;// this will NOT throw an error!
//console.log(instructor);//undefined
instructor = "Natasha";
console.log(instructor);//Natasha

//Hoisting and Inside of Functions
function displayInstructor(){
    return instructor;
}
var instructor = "Travis";
var instructor = "Scot";
var instructor = "Daisy";
console.log(instructor);//picks the last 

//Hoisting in Function Declarations vs Function Expressions
sayHi('Matt'); // "Hello Matt"

function sayHi(name){
    return "Hello " + name;
}
console.log(sayHi('Matt'));
console.log(sayHi('Ibeh Joy'));
console.log(sayHi('Lois Omodibo'));
console.log(sayHi('Vanessah'));
console.log(sayHi('Trina'));

/**
 sayHi("Matt"); // Throws an error!

var sayHi = function(name){ //sayHi is not equal to a function
    return "Hello " + name;
}
console.log(sayHi('Rina'));
 */

//tricky hoisting problem
var myName = "Tim";

function returnMyName() {
    console.log(myName);//undefined
    var myName = "Matt";
}
returnMyName();
console.log(returnMyName());//undefined


var age = 100;
  if (age > 12){
    let dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`);
  }
 

var age = 100;
  if (age > 12){
    const dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`);
  }


var age = 100;
  if (age > 12){
    let dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`);
  }
/**
 *  "higher order functions."
We call functions that accept functions as parameters.

*callbacks - enable us to manage asynchronous code, or code that will be 
executed at a later point in time.

*JavaScript - single threaded. What this means is that only one process 
will happen at a time

* However, we can write asynchronous code, which may give the impression 
that multiple things are happening at once, even though this is not the case.

*call stack - where function calls are put (each one is called a "stack 
frame"). The call stack (sometimes simply referred to as the stack) is a 
LIFO (last-in-first-out) data structure.

*event queue - When an asynchronous event occurs, it gets put into what is 
called the "event queue" (also known as the queue). It is then moved to the 
stack when the stack is clear (i.e. when there are no functions on stack)
 The queue is a FIFO data structure (first-in-first-out).

 *heap - where objects are stored. The heap is an unstructured/unorganized 
 region of memory.

* "Event Loop" - checks the queue and sees if there are any processes to execute.

*Closure is when a function is able to access variables from an outer 
function that has already returned.


 */

//CLOSURE
function outerFunction(outerVariable){
    const outer2 = 'Hi'
    return function innerFunction(innerVariable){
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' +innerVariable);
        console.log(outer2);
    }
}
const newFunction = outerFunction('outside')
newFunction('inner')


console.log("first");
setTimeout(function(){
    console.log("second");
},0);
console.log("third");


function defineAge(){
    var age = 28;
    return function growUp(){
        return ++age;
    }
}
console.log(defineAge);;


function createInstructors(){
    var instructors = ["Elie", "Matt", "Tim"];
    return {
        showInstructors: function displayAllInstructors(){
            return instructors;
        },
        addInstructor: function addNewInstructor(instructor){
            instructors.push(instructor)
            return instructors;
        }
    }
}
console.log(createInstructors);

var firstClass = createInstructors();
firstClass.addInstructor("Jennifer");
firstClass.showInstructors(); // ["Elie", "Matt", "Tim", "Jennifer"]

var secondClass = createInstructors();
secondClass.addInstructor("Ashley"); // ["Elie", "Matt", "Tim", "Ashley"]

// on one line
var instructors = createInstructors().showInstructors(); ["Elie", "Matt", "Tim"]

var instructors = createInstructors().showInstructors();
var instructorModule = (function createInstructors(){
    var instructors = ["Elie", "Matt", "Tim"];
    return {
        showInstructors: function displayAllInstructors(){
            return instructors;
        },
        addInstructor: function addNewInstructor(instructor){
            instructors.push(instructor)
            return instructors;
        }
    }
})();

console.log(createInstructors);


var instructorModuleRefactored = (function createInstructors(){
    var instructors = ["Elie", "Matt", "Tim"];
    function displayAllInstructors(){
        return instructors;
    }
    function addNewInstructor(instructor){
        instructors.push(instructor);
        return instructors;
    }
    return {
        showInstructors: displayAllInstructors,
        addInstructor: addNewInstructor
    }})();
    console.log(createInstructors);


    function add() {
        var total = 0;
        for (var i = 0; i < arguments.length; i++) {
            total += arguments[i]; // this is shorthand for total = total + arguments[i]
        }
        return total;
    }
add(1,2,3); // 6
console.log(add);

add(1,-2,3,-4); // -2
console.log(add);

add(); // 0
console.log(add);

    

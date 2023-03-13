/**
we can pass a function as a parameter to another function and is called 
a call back function
 */

function sendMessage(message, fn){
    return fn(message)
}
sendMessage('Hello Jibola', console.log);

// //sendMessage - Higher Order Function
// //fn - Call back function

// sendMessage('Hello Marwa', alert);

// /**
// referencing a function vs calling a function
// console.log is different from calling a function
// sendMessage
// sendMessage()
//  */

//quiz: write a function that sends a message
function sendMessageWithConsole(message){
    console.log(message);
}
sendMessageWithConsole('Hello Marie');

// function sendMessageWithAlert(message){
//     alert(message);
// }
// sendMessageWithAlert('Hello Monicah');

// function sendMessageWithConfirm(message){
//     confirm(message);
// }
// sendMessageWithConfirm('Hello Marylynn');

// function sendMessageWithPrompt(message){
//     prompt(message);
// }
// sendMessageWithPrompt('Hello Lynn');


// function sendMessageHOF(message){
//     callbackFunction(message);
// }
// sendMessageHOF('Hello Lynn', console.log);
// sendMessageHOF('Hello Lynn', alert);
// sendMessageHOF('Hello Lynn', confirm);
// sendMessageHOF('Hello Lynn', prompt);


//calculate area and diameter of circles with radii[1,2,3]
//return output for each radius

//area: circle = PI* radius **2
// diamter = 2 * radius

function calculateArea(radii){
    const result = [];
    for (let i=0; i<radii.length; i++){
        let area = Math.PI* radii [i]**2 // make this operation a function
        result.push(area)
    }
    return result
}
let arrayOfAreas = calculateArea([1,2,3]);
console.log(arrayOfAreas);

function calculateDiameter(radii){
    const result = [];
    for (let i=0; i<radii.length; i++){
        let diameter = 2 *radii [i];// make this operation a function
        result.push(diameter)
    }
    return result
}
let arrayOfDiameters = calculateDiameter([1,2,3]);
console.log(arrayOfDiameters);

//calculate circumference
//circumference = 2 * PI * r

function calculateCircumference(radii){
    const result = [];
    for (let i=0; i<radii.length; i++){
        let circumference = 2 * Math.PI * radii [i];// make this operation a function
        result.push(circumference);
    }
    return result;
}
let arrayOfCircumference = calculateCircumference([1,2,3]);
console.log(arrayOfCircumference);



//Hof and callbacks
console.log('DEMONSTRATION OF HOF AND CALLBACKS');

function area(radius){
    let area = Math.PI* radius**2;
    return area;
}

function diameter(radius){
let diameter = 2 *radius;
return diameter;
}

function circumference(radius){
    let circumference = 2 * Math.PI * radius;
    return circumference;
    }

    function circleOperation(radii, callbackFunction){
        const result = [];
        for (let i=0; i<radii.length; i++){
            let operation = callbackFunction(radii[[i]])//dynamic operation
            result.push(operation);
    }
    return result
}
let areas = circleOperation ([1,2,3], area);
console.log({areas})

let diameters = circleOperation ([1,2,3], diameter);
console.log({diameters})

let circumferences = circleOperation ([1,2,3], circumference);
console.log({circumferences})

// Array has in-built HOFs like .map(), .filter(), .reduce() and many more.
const usingMapToCalCDiameter = [1,2,3].map(diameter);
console.log(usingMapToCalCDiameter);


// // repeat with the interval of 2 seconds
// let timerId = setInterval(() => alert('tick'), 2000);
// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);


//setTimeout and setInterval
/**
synthax - setTimeout (callbackFunction, time)
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)


callbackFunction - will be executed 

time- time that must be elapsed before the callbackFunction is executed.
is written in milliseconds

1000ms = 1second
 */
//Q: Log 'Hello Stutern Learners' after 10 seconds
function logMessage(){
    console.log('Hello Stutern Learners')
}
setTimeout(logMessage, 10000);

//or

setTimeout(function () {
    console.log('Stutern Learners are eager to learn new things')   
}, 10000)

//or

setTimeout(() => console.log('Stutern Learners comprises of great minds'), 10000);

setTimeout(() => console.log('software development'), 1000)
// after every 2 seconds
// synthax - setIterval(callbackFunction, interval)
//setInterval(() => console.log('Hello Stutern Learners it is time for class '), 2000);


//after every 2 seconds. cancel operation after 20 seconds
let timerId = setInterval(() => console.log('Hello Stutern Staff'),2000);
setTimeout (function () {
    clearInterval(timerId)
    console.log('Interval has been terminated')
}, 20000);
//clearTimeout(timerId);

let timingId = setInterval(() => console.log('Stutern is the best place to be.'),1000);
setTimeout (function() { 
  clearInterval(timingId)
    console.log('Interval Termination')
}, 10000);
clearTimeout(timingId);


//cancelling with clear timeout
let timerId1 = setTimeout();
clearTimeout(timerId1);

/**
Nested setTimeout
There are two ways of running something regularly.
One is setInterval. The other one is a nested setTimeout, like this:
 */
/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId2 = setTimeout(function tick() {
  alert('tick');
  timerId2 = setTimeout(tick, 2000); // (*)
}, 2000)




//closure
function parentFunction(a){
    return function childFunction(b){
        return a + b;
    }
}

parentFunction(8)
 console.log(parentFunction(8))//[Function: childFunction]
/**
returns 
function childFunction(b){
    return 8 + b
}
 */

parentFunction(8)(5)
console.log(parentFunction(8)(5))//13
/**
function childFunction(b){
    return 8 + b
}

//childFunction(5) => 8 + 5 = 13
 */

function greet(){
    let name = 'John';

    function displayName(){
        return 'Hi ' + name
    }
    return displayName;
}

let greet1 = greet();
console.log(greet1)//[Function: displayName]
console.log(greet1())//Hi John

function calculate(x){
    function multiply(y){
        return x * y
    }
    return multiply
}

const multiply3 = calculate(3);
const mult1 = multiply3(6)
//OR
const mult2 = calculate(3)(6)
console.log(mult1);//18
console.log(mult2);//18

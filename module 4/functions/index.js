//function that caps bottles

//defining a function
function bottleCapper(bottle, cap){
    //return bottle + cap  //shorthand command
    let result = bottle + cap //instruction
    return result // otput
}

//call/ run/ execute/ invoke
let cocacolaBottle = bottleCapper('transparent bottle ', 'red cap');
console.log(cocacolaBottle)




//two ways to define a function
// function declaration
function bottleCapper(bottle, cap){
    //return bottle + cap  //shorthand command
    let result = bottle + cap //instruction
    return result // otput
}

//function expression
//the name of the function does not come after the function keyword
//the variable the function is assigned to becomes the function name 
//The variable is taking function as its value
const bottleCapper2 =function (bottle, cap){
    let result = bottle + " and " +  cap; //instruction
    return result; // otput
}

let spriteBottle = bottleCapper2('transparent bottle ', 'green cap');
console.log(spriteBottle);

//function expression using arrow method /Arrow Function Expression
// => replaces function keyword //anonymous function
//the {} is optional
//when you use {} you will need to use the return keyword

const bottleCapper3 = (bottle, cap) => bottle + " and " +  cap;

const bottleCapper4 = (bottle, cap) => {
    //return  bottle + "and" +  cap;
    let result = bottle + " and " +  cap; //instruction
    return result; // otput
}

const fantaBottle = bottleCapper3('transparent bottle ', 'orange cap')
console.log(fantaBottle);

//functions without arguements
function greet(){
    return 'Hello Stutern Learners'
}
console.log(greet());

function greet2(name){
    return 'Hello ' + name
}
console.log(greet2('Tina'));
console.log(greet2('Idris'));
console.log(greet2('Nina'));
console.log(greet2('Travis'));

//defining a functionfunction expression  function declaration
function greet3(){
    console.log('Hello World');
    //undefined
}
greet3();

function sayHi(){
    return "Good morning";
}

function greetings(name, sayHi){
    return sayHi() +' ' + name
}
console.log(greetings('Daniel ', sayHi))


function createCar(){
    return{
        name: 'Toyota',
        model: 'Avensis'
    }
}
console.log(createCar())

// const createCar = function(){
//     return{
//         name: 'Toyota',
//         model: 'Avensis'
//     }
// }

// const createCar = ()=>{
//     return{
//         name: 'Toyota',
//         model: 'Avensis'
//     }
// }

let multBy2 = [1,2,3,4,5].map(function(num){
    let result = num*2;
    return result
})
console.log(multBy2);

// //arrow function
// let multBy2 = [1,2,3,4,5].map((num) => {
//     let result = num*8;
//     return result
// })
// console.log(multBy2)
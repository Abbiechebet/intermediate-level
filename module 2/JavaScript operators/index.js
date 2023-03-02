
//let result = document.getElementById('result');

//result.innerText = 'Result here...'

//Arithmetic operations
let a = 500;
let b= 123;

let sum = a + b;
//let sumElement = document.getElementById('sum');
//sumElement.innerText =sum;
console.log(sum);

let difference = a - b;
//let differenceElement = document.getElementById('difference');
//differenceElement.innerText =difference;
console.log(difference);

let multiplication = a * b;
//let multiplicationElement = document.getElementById('multiplication');
//multiplicationElement.innerText =multiplication;
console.log(multiplication);

let division = a / b;
//let divisionElement = document.getElementById('division');
//divisionElement.innerText =division;
console.log(division);

//modulo operator
// let remainder = a % b;
// console.log(remainder);
// console.log('Remainder of a divided by b equals ' + remainder)


let c = 100;
let remainder = a % c;
console.log(remainder);

//exponential operators
let exponentResult= c ** 3;
console.log('exponent result equals ' + exponentResult);

//increment (++)& decrement (--) operators
let initialValue = 43;
initialValue++;
initialValue = initialValue + 1;
console.log( 'value is ' + initialValue );

let age = 30;
age--;
console.log('New age value is' + age);

let numberOfCars = 23;
// ++numberOfCars;
console.log('number of cars is ' + ++numberOfCars);


let numberOfOranges = 66;
console.log('number of oranges is ' + ++numberOfOranges);

let numberOfMangoes = 99;
console.log('number of mangoes is ' + numberOfMangoes++);

// 623
// 377
// 61500
// 4.065040650406504
// 0
// exponent result equals 1000000
// value is 45
// New age value is29
// number of cars is 24
// number of oranges is 67
// number of mangoes is 99

// assignment operation
// let x = x + 1; // is same as let x++
// let y = y + 1; // is same as let y++

// let z = z + 6 // let z += 6;
// let w = z - 6 // let z -= 6;
// let p = z * 6 // let z *= 6;
// let q = q / 6 // let z /= 6;

// let q = 10;
// q = q / 2 //answer is 5;
// console.log(q);

//comparison operator (<, >, <=, >=, !=, !==, ==, ===)
let d = 3;
console.log(d > 1);

// LHS- left hand side
// RHS- right hand side

let e = 3;
const f = e++;

console.log(`e:${e}, f:${f}`);
// Expected output: "e:4, f:3"

let k = 3;
const l = ++k;

console.log(`k:${k}, l:${l}`);
// Expected output: "k:4, l:4"
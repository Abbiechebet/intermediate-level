//Exercise 1
//Iterate 0 to 10 using for loop, do the same using while and do while loop
let i = 0;
for(let i=0; i<=10; i++){
    console.log(i+' for loop increment');
}
let f = 0;
while(f<=10){
    console.log(f+' while loop increment');
    f++;
}
let e = 0;
do{
    console.log(e+' do while loop increment');
    e++;
}while(e<=10);

//Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let a=10; a>=0; a--){
    console.log(a+' for loop decrement');
}
let b = 10;
while(b>=0){
    console.log(b+' do while decrement');
    b--;
}
let c = 10;
do{
    console.log(c+' do while loop decrement');
    c--;
}while(c>=0);

//Iterate 0 to n using for loop
let n = 10
for (let i=0; i<= n; i++){
  console.log(i+' Iterate 0 to n using for loop')
}

//Write a loop that makes the following pattern using console.log():

    for(var x=1; x<=7; x++){
        console.log("# ".repeat(x));
     }

//Use loop to print the following pattern:
for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`)}

   
//Using loop print the following pattern
for(let y = 0; y <= 10; y++){
    console.log(`${y}, ${y**2}, ${y**3}`)}

//Use for loop to iterate from 0 to 100 and print only even numbers
for (var v=0; v<=100; v++) {
    if (v === 0) {
            console.log(v);
    }
    else if (v % 2 === 0) {
            console.log("even number "+ v);   
    }
    // else {
    //         console.log(x + " is odd");
    // }
}
    
//Use for loop to iterate from 0 to 100 and print only odd numbers
for (var w=0; w<=100; w++) {
    if (w % 2 === 0) {   
    }
    else {
            console.log("odd number " + w );
    }
}

//Use for loop to iterate from 0 to 100 and print only prime numbers
let count=0
let l,j 
for(j=2;j<=100;j++)
{
for( l=1;l<=j;l++)
{
  if(j%l==0)
  count++
}
if(count==2)
console.log( "prime number "+ j)
count=0  
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for(let g=0; g<=100; g++){
    sum += g
    console.log(`The sum of all numbers from 0 to 100 is' ${sum}.`);
}   

/*Use for loop to iterate from 0 to 100 and print the sum of all evens 
and the sum of all odds.*/
let sumEven = 0; 
let sumOdd = 0;
for (var v=0; v<=100; v++) {
    if (v % 2 === 0) {
        sumEven += v
        console.log(`The sum of all evens from 0 to 100 is ${sumEven}`);   
}
     else if ( (v % 2 !== 0)){
        sumOdd += v
        console.log(`The sum of all odds from 0 to 100 is ${sumOdd}`);
    }
}
    

/*Use for loop to iterate from 0 to 100 and print the sum of all evens 
and the sum of all odds. Print sum of evens and sum of odds as array*/
// const newArray = []
// for (var v=0; v<=100; v++)
// newArray.push(`${sumEven}${sumOdd}`)
// console.log(newArray)

//Develop a small script which generate array of 5 random numbers
var randoms = Array(5).fill(Math.floor(Math.random() * 9));
console.log(randoms)

/*Develop a small script which generate array of 5 random numbers and 
the numbers must be unique*/
function myRandomInts(quantity, max){
  const arr = []
  while(arr.length < quantity){
    var candidateInt = Math.floor(Math.random() * max) + 1
    if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    console.log(arr);
  }
return(arr)
}
myRandomInts(5, 20)

//Develop a small script which generate a six characters random id:5j2khz
// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(6));

// program to generate random strings

const result = Math.random().toString(36).substring(2,8);
console.log(result);


//Exercises: Level 2

//Develop a small script which generate any number of characters random id:
const result1 = Math.random().toString(36).substring(2, 14);
console.log(result1);

const result2 = Math.random().toString(36).substring(2,20);
console.log(result2);


//Write a script which generates a random hexadecimal number.
//'#ee33df'
// let resultA = "";
// let hexChar = "0123456789abcdef";
// for (var d = 0; d < 6; d++) {
//   resultA += hexChar.charAt(Math.floor(Math.random() * hexChar.length));
// }
// console.log(`#${resultA}`);

let items = ["a", "b", "c", "d", "e", "f"];
let item = items[Math.floor(Math.random() * items.length)];
let random = Math.random().toString().slice(2, 6);
console.log(`#${item}${random}${item}`);

//Write a script which generates a random rgb color number.
//rgb(240,180,80)
function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  
  for (var k = 0; k < 1; k++) {
    console.log(getRandomRgb());
  }


  //Using the above countries array, create the following new array.
  const countries3 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  const newArr = []
for(let i = 0; i < countries3.length; i++){
  newArr.push(countries3[i].toUpperCase())
}
  console.log(newArr)

//Using the above countries array, create an array for countries length'.
//[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
console.log(newArr.map(w => w.length));


const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
    console.log(tech[0]) // get only the first letter of each element,  H C J R N M
  }
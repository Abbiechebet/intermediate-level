// WHILE LOOP

// while (condition){
    //console.log()
    //var++
// }


//problem:statement: LOG OUT NUMBERS 1 - 5
//solution

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

let initialNumber = 1;
let limit = 5;

while (initialNumber <= limit ){
    console.log(initialNumber)
    initialNumber++;
}



//problem: find the sum of positive numbers less than 20
//solution

let forLoopSum = 0;
for (let i = 0; i < 20; i++) {
    forLoopSum += i;
}
console.log(forLoopSum);


let whileLoopSum = 0;
let whileLoopNum = 0;
while (whileLoopNum < 20){
    whileLoopSum += whileLoopNum;
    whileLoopNum++;
}
console.log(whileLoopSum);
 



//DO...WHILE
//problem statement: find sum of positive numbers btn 10 - 20

// do{
//     //statement you want to execute
// }while(condition);
//console.log();

//solution
let doWhileNumber = 11;
let doWhileSum = 0;

do{
    doWhileSum += doWhileNumber;
    doWhileNumber++;
}while(doWhileNumber < 20);

console.log(doWhileSum);



// //
/**
 * while loops check condition first before executing what is in the loop body
 * loop body is what is in curly braces
 * Do...while loops execute what is in loop body first before checking the condition in the loop body 
 */

let x = 5;
while(x < 5){
    console.log(x); // does not log out anything
    x++;
}

let y = 5;
do{
    console.log(y); // logs out 5
    y++
}while (y < 5);



//BREAK AND CONTINUE

//problem statement: find sum of positive numbers btn 10 and 20
//do not add numbers greater than 15
//solution: here we demonstrate the use of 'break' to exit the loop

let sumNumbers = 0;
let number = 11;

while (number < 20){
    sumNumbers += number;
    number++
    if (number > 15){
        break;
    }
}
console.log(sumNumbers)
 

//problem statement: write program to log 1 - 5 and skip number 4
//demonstrating use of continue in a for loop

for (let i = 1; i <= 5; i++) {
    if (i ==4){
       continue;
    }
    console.log(i);
}


//find sum of positive numbers btn 10 and 20
//do not add numbers divisible by 2

let sumOfOddNumbers = 0;
let initialNum = 10;
while (initialNum < 20){
    //sumOfOddNumbers += initialNum;
    initialNum++;
    if (initialNum % 2 === 0){
        continue;
    }
    sumOfOddNumbers += initialNum
}
console.log(sumOfOddNumbers)
  
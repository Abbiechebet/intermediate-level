/**
 * Conditionals 
 */ 
 //Exercises: Level 1
/*Get user input using prompt(“Enter your age:”). If user is 18 or older, 
give feedback:'You are old enough to drive' but if not 18 give another 
feedback stating to wait for the number of years he needs to turn 18. */
let myAge = prompt('Enter your age: 15');
let yourAge = prompt('Enter your age: 30');
if (yourAge) {
    console.log('You are old enough to drive.');
 }
   else{ 
    console.log('You are left with 3 years to drive.');
}
// else if (age < 18){
// console.log(`You are ${age}. You will drive in (${18} - ${age}) years.`);
// }

/*Compare the values of myAge and yourAge using if … else. Based on the 
comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. */
let my_Age = prompt('Enter your age: 15');
let your_Age = prompt('Enter your age: 30');
if (my_Age < your_Age) {
    console.log('I am 15 years younger than you.');
 }
   else { 
    console.log('You are 15 years older than me.');
}
/*If a is greater than b return 'a is greater than b' else 'a is less than 
b'. Try to implement it in two ways.*/
let a = 4
let b = 3
//if else
if (a > b) {
  console.log(`${a} is greater than ${b}`)
} else {
  console.log(`${a} is lesser than ${b}`)
}

// ternary operator
let c = 4;
let d = 3;  
let greater= true
greater
  ? console.log(`${c} is greater than ${d}`)
  : console.log(`${c} is lesser than ${d}`)

/*Even numbers are divisible by 2 and the remainder is zero. How do you 
check, if a number is even or not using JavaScript? */
let evenNums = prompt('Enter a number: 2');
let oddNums = prompt('Enter a number: 9');
if (evenNums % 2 == 0) {
    console.log('2 is an even number.');
 }
  if(oddNums % 2 != 0){ 
    console.log('9 is not an even number')}



//Exercises: Level 2
/*Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */
let grade = 90;

if(grade >= 80 && grade <= 100){
    console.log("A");
}
else if(grade >= 70 && grade <= 89){
    console.log("B");
}
else if(grade >= 60 && grade <= 69){
    console.log("C");
}
else if(grade >= 50 && grade <= 59){
    console.log("D");
}
else if(grade >= 0 && grade <= 49){
    console.log("F");
}
 else {
     console.log('Invalid Score');
}

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */
// let months = 'March, April, May';

let Autumn = prompt('September, October or November, the season is Autumn.');
let Winter = prompt('December, January or February, the season is Winter.');
let Spring = prompt('March, April or May, the season is Spring');
let Summer = prompt('June, July or August, the season is Summer ');
if (Autumn) {
    console.log('The season is Autumn');
 }
 if(Winter){
    console.log('The season is Winter');
 }
if(Spring){
    console.log('The season is Spring');
 }
 if(Summer){
    console.log('The season is Summer');
 }

/*Check if a day is weekend day or a working day. Your script will take 
day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day */

let dayUserInput = prompt('What day is today:Saturday, saturDaY, Friday, saturDaY ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'Saturday':
    console.log('Saturday is a weekend.')
    break
  case 'saturDaY':
    console.log('Saturday is a weekend.')
    break
  case 'Friday':
    console.log('Friday is a working day.')
    break
  case 'FrIDAy':
    console.log('Friday is a working day.')
    break
  default:
    console.log('It is not a week day.')
}



//Exercises: Level 3
/*Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days. */
let monthDays = prompt(' Enter a month:January, JANUARY,February, FEbruary')
  switch (monthDays) {
    case 'January':
      console.log('January has 31 days.')
      break
    case 'JANUARY':
      console.log('January has 31 days.')
      break
    case 'February':
      console.log('February has 28 days.')
      break
    case 'FEbruary':
      console.log('February has 28 days.')
      break
    default:
      console.log('not a specified month')
  }
//Write a program which tells the number of days in a month, now consider leap year.
  let leapYear = prompt(' Enter a month:February');
  console.log('February has 29 days.')
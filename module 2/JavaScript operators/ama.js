
// Thursday AMAS WITH MENTOR JAMES U. IWEOBI 

//print all numbes from 1 to 20
const numberArray = []
for (let i = 0; i <= 20; i++){
    numberArray.push(i)
}
const newObj ={
    name: "Jedida",
    age: 89,
    address: "Nakuru",
    field: "Backend"
}

    console.log(numberArray);
    const secondArr = ['yam', 'garri', 'ewa']

    for (let food of secondArr ){
        console.log("Jedidah likes ", food);
    }


for (let num of numberArray){
    console.log("Jedidah is ", num, "years old");
}

for(let key in newObj){
    console.log(key, " = ", newObj [key], )
}

//0, null, undefined, 1, 
const truty = null;
console.log("this is ", truty ? true:false);



for (let i=1; i<20; i +=7){
    console.log(i);
}
//sleepIn
/**
 * The parameter weekday is true if it is a weekday, and the parameter 
   vacation is true if we are on vacation. We sleep in if it is not a
   weekday or we're on vacation. Return true if we sleep in.
 */

//sleepIn(true, true) → true
//sleepIn(true, false) → false
//sleepIn(false, true) → true

function sleepIn(weekday,vacation){
    if (weekday === true && vacation === true) {
     return true;
   } else if (weekday === true && vacation === false) {
     return false;
   } else if (weekday === false && vacation === true) {
     return true;
   } else {
     return true;
   }               
 }
 function sleepIn(weekday,vacation){
    if (!weekday || vacation) {
     return true;
   }
   else{
    return false;
   }
  }
//monkeyTrouble
  /**
We have two monkeys, a and b, and the parameters aSmile and bSmile 
indicate if each is smiling. We are in trouble if they are both smiling
or if neither of them is smiling. Return true if we are in trouble.
Examples
monkeyTrouble(true, true) → true
monkeyTrouble(false, false) → true
monkeyTrouble(true, false) → false
   */
function monkeyTrouble(aSmile,bSmile){
  if(aSmile === bSmile){
 return true;
  }
 else{
   return false;
}
}

function monkeyTrouble(aSmile,bSmile){
if (aSmile && bSmile) {
  return true;
  }
  if (!aSmile && !bSmile) {
  return true;
  }
  return false;
  }
//sumDouble
/**
Given two int values, return their sum. Unless the two values are the 
same, then return double their sum.
Examples
sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8
 */
function sumDouble(a,b){
  if (a === b){
 return 2 * (a + b);
  }
   else{
 return (a + b);
   }
 }
//diff21
/**
Given an int n, return the absolute difference between n and 21, except 
return double the absolute difference if n is over 21.
Examples
diff21(19) → 2
diff21(10) → 11
diff21(21) → 0
 */
function diff21(n){
  if (n <= 21) {
return 21 - n;
} else {
return (n - 21) * 2;
}
}
//parrotTrouble
/**
 We have a loud talking parrot. The "hour" parameter is the current hour
 time in the range 0..23. We are in trouble if the parrot is talking and 
 the hour is before 7 or after 20. Return true if we are in trouble.
Examples
parrotTrouble(true, 6) → true
parrotTrouble(true, 7) → false
parrotTrouble(false, 6) → false
 */
function parrotTrouble(talking,hour){
  return (talking && (hour < 7 || hour > 20)); 
 }

 //makes10
 /**
Given 2 ints, a and b, return true if one if them is 10 or if their sum is
 10.
Examples
makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true
  */
function makes10(a,b){
  return (a === 10 || b === 10 || a + b ===10);
}

//nearHundred
/**
Given an int n, return true if it is within 10 of 100 or 200. Note: 
Math.abs(num) computes the absolute value of a number.
Examples
nearHundred(93) → true
nearHundred(90) → true
nearHundred(89) → false
 */
function nearHundred(n){
  return(Math.abs(100 - n)<=10) || (Math.abs(200-n)<=10); 
 }

 //posNeg
 /**
Given 2 int values, return true if one is negative and one is positive. Except if the 
parameter "negative" is true, then return true only if both are negative.
Examples
posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true
  */
function posNeg(a,b,negative){
  if(negative)
  { return(a<0 && b<0);
  }
  else
  {
  return((a<0 && b>0)||(a>0 && b<0));
  }
}

//notString
/**
Given a string, return a new string where "not " has been added to the front. However, if the 
string already begins with "not", return the string unchanged.
Examples
notString('candy') → not candy
notString('x') → not x
notString('not bad') → not bad
 */
function notString(str){
  if (str === null || str === undefined || str.substring(0, 3) === 'not') {
    return str;
  }
  return `not ${str}`;
}

//missingChar
/**
Given a non-empty string and an int n, return a new string where the char 
at index n has been removed. The value of n will be a valid index of a 
char in the original string (i.e. n will be in the range 0..str.length()-1
inclusive).
Examples
missingChar('kitten', 1) → ktten
missingChar('kitten', 0) → itten
missingChar('kitten', 4) → kittn
 */
function missingChar(str,n){
 let front = str.substring(0, n);
 let back = str.substring(n + 1, str.length);
 return front + back; 
}

//frontBack
/**
Given a string, return a new string where the first and last chars 
have been exchanged.
Examples
frontBack('code') → eodc
frontBack('a') → a
frontBack('ab') → ba
 */
function frontBack(str){
   if (str.length <= 1) {
    return str;
  }
  let mid = str.substring(1, str.length - 1);

  return (str.charAt(str.length - 1)) + mid + str.charAt(0);
}
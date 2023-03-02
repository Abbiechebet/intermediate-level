//front3
/**
Given a string, we'll say that the front is the first 3 chars of the 
string. If the string length is less than 3, the front is whatever is 
there. Return a new string which is 3 copies of the front.
Examples
front3('Java') → JavJavJav
front3('Chocolate') → ChoChoCho
front3('abc') → abcabcabc
front3('abcXYZ') 	
front3('ab') 	
front3('a') 	
front3('')
 */ 
function front3(str){
    return(str.slice(0,3).repeat(3));
    //  let front = '';
    //  if (str.length >= 3) {
    //    front = str.substring(0, 3);
    //  } else {
    //    front = str;
    //  }
    //  return front + front + front;
   }


//backAround
/**
Given a string, take the last char and return a new string with the last 
char added at the front and back, so 'cat' yields 'tcatt' The original 
string will be length 1 or more.
Examples
backAround('cat') → tcatt
backAround('Hello') → oHelloo
backAround('a') → aaa
 */
function backAround(str){
    let last = str.substring(str.length - 1);
    return last + str + last;
      }

//or35
/**
Return true if the given non-negative number is a multiple of 3 or a 
multiple of 5. (Hint: Use the % 'mod' operator)
Examples
or35(3) → true
or35(10) → true
or35(8) → false
 */
function or35(n){
    if (n % 3 === 0 || n % 5 === 0) {
     return true;
   } else {
     return false;
   }
 }
 //front22
 /**
Given a string, take the first 2 chars and return the string with the 2 
chars added at both the front and back, so 'kitten' yields 'kikittenki' 
chars are there.
Examples
front22('kitten') → kikittenki
front22('Ha') → HaHaHa
front22('abc') → ababcab
  */
function front22(str){
    let take = 2;
    if (take > str.length) {
      take = str.length;
    }
    let front = str.substring(0, take);
    return front + str + front;
  }

  //startHi
  /**
Given a string, return true if the string starts with 'hi'and false 
otherwise.
Examples
startHi('hi there') → true
startHi('hi') → true
startHi('hello hi') → false
   */
function startHi(str){
    if (str.length < 2) {
     return false;
   }
   let front = str.substring(0, 2);
   if (front === 'hi') {
     return true;
   } else {
     return false;
   }
 }

//icyHot
/**
Given two temperatures, return true if one is less than 0 and the other is
greater than 100.
Examples
icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false
 */
function icyHot(temp1,temp2){
    if (temp1 < 0 && temp2 > 100 || temp2 < 0 && temp1 > 100) {
      return true;
    }
    return false; 
  }

//in1020
/**
Given 2 int values, return true if either of them is in the range 10..20 
inclusive.
Examples
in1020(12, 99) → true
in1020(21, 12) → true
in1020(8, 99) → false
*/
function in1020(a,b){
    if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) {
    return true;
  } else {
    return false;
  }
}
//hasTeen
/**
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. 
Given 3 int values, return true if 1 or more of them are teen.
Examples
hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true
 */
function hasTeen(a,b,c){
    if ((a >= 13 && a <= 19) ||
     (b >= 13 && b <= 19) ||
     (c >= 13 && c <= 19)) {
     return true;
   } else {
     return false;
   }
 }

 //loneTeen
 /**
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. 
Examples
loneTeen(13, 99) → true
loneTeen(21, 19) → true
loneTeen(13, 13) → false
  */
function loneTeen(a,b){
    const isTeen = function (num) {
     return num >= 13 && num <= 19;
   };
   const isTeenA = isTeen(a);
   const isTeenB = isTeen(b);
   return isTeenA && !isTeenB || !isTeenA && isTeenB;
 }
 //delDel
 /**
Given a string, if the string "del" appears starting at index 1, return a 
string where that "del" has been deleted. Otherwise, return the string 
unchanged.
Examples
delDel('adelbc') → abc
delDel('adelHello') → aHello
delDel('abcdel') → abcdel
  */
function delDel(str){
    if (str.length < 4) {
     return str;
   }
   let output = str;
   if (str.substring(1, 4) === 'del') {
     output = str.substring(0, 1) + str.substring(4, str.length);
   }
   return output;
 }
 //mixStart
/**
Return true if the given string begins with 'mix', except the 'm' can be 
anything, so 'pix', '9ix' .. all count.
Examples
mixStart('mix snacks') → true
mixStart('pix snacks') → true
mixStart('piz snacks') → false
*/ 
function mixStart(str){
    if (str.length < 3) {
     return false;
   }
  let two = str.substring(1, 3);
   if (two === 'ix') {
     return true;
   } else {
     return false;
   } 
 }

 //startOz
 /**
Given a string, return a string made of the first 2 chars (if present), 
however include first char only if it is 'o' and include the second only 
if it is 'z', so 'ozymandias' yields 'oz'.
Examples
startOz('ozymandias') → oz
startOz('bzoo') → z
startOz('oxx') → o
  */
function startOz(str){
    let result = '';
  
    if (str.length >= 1 && str.charAt(0) === 'o') {
      result += str.charAt(0);
    }
    if (str.length >= 2 && str.charAt(1) === 'z') {
      result += str.charAt(1);
    }
    return result;
  }

//intMax
/**
Given three int values, a b c, return the largest.
Examples
intMax(1, 2, 3) → 3
intMax(1, 3, 2) → 3
intMax(3, 2, 1) → 3
 */
function intMax(a,b,c){
    let max = 0;
    if (a > b) {
      max = a;
    } else {
      max = b;
    }
    if (c > max) {
      max = c;
    }
    return max; 
  }

  //close10
  /**
Given 2 int values, return whichever value is nearest to the value 10, or 
return 0 in the event of a tie. Note that Math.abs(n) returns the absolute
value of a number.
Examples
close10(8, 13) → 8
close10(13, 8) → 8
close10(13, 7) → 0
*/
function close10(a,b){
    let aDiff = Math.abs(a - 10);
    let bDiff = Math.abs(b - 10);
  
    if (aDiff < bDiff) {
      return a;
    }
    if (bDiff < aDiff) {
      return b;
    }
    return 0; 
  }
  //in3050
  /**
Given 2 int values, return true if they are both in the range 30..40 
inclusive, or they are both in the range 40..50 inclusive.
Examples
in3050(30, 31) → true
in3050(30, 41) → false
in3050(40, 50) → true
*/
function in3050(a,b){
    if ((a >= 30 && a <= 40 && b >= 30 && b <= 40) || (a >= 40 && a <= 50 && b >= 40 && b <= 50)) {
    return true;
  } else {
    return false;
  }
}

//max1020
/**
Given 2 positive int values, return the larger value that is in the range 
10..20 inclusive, or return 0 if neither is in that range.
Examples
max1020(11, 19) → 19
max1020(19, 11) → 19
max1020(11, 9) → 11
*/
function max1020(a,b){
    const between1020 = function (num) {
     return num >= 10 && num <= 20;
   };
   let result = 0;
   if (between1020(a)) {
     result = a;
   }
   if (b > result && between1020(b)) {
     result = b;
   }
   return result;
 }

 //stringE
 /**
Return true if the given string contains between 1 and 3 'e' chars.
Examples
stringE('Hello') → true
stringE('Heelle') → true
stringE('Heelele') → false
*/
function stringE(str){
    let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'e') {
      count++;
    }
  }
  return (count >= 1 && count <= 3);
}
//last digit
/**
Given two non-negative int values, return true if they have the same 
last digit, such as with 27 and 57. Note that the % 'mod' operator 
computes remainders, so 17 % 10 is 7.
Examples
lastDigit(7, 17) → true
lastDigit(6, 17) → false
lastDigit(3, 113) → true
 */
function lastDigit(a,b,c){
 return a % 10 === b % 10 || b % 10 === c % 10 || a % 10 === c; 
}

//endUp
/**
Given a string, return a new string where the last 3 chars are now in 
upper case. If the string has less than 3 chars, uppercase whatever i
s there. Note that str.toUpperCase() returns the uppercase version of 
a string.
Examples
endUp('Hello') → HeLLO
endUp('hi there') → hi thERE
endUp('hi') → HI
*/
function endUp(str){
   if (str.length <= 3) {
    return str.toUpperCase();
  }
 let cut = str.length - 3;
 let front = str.substring(0, cut);
 let back = str.substring(cut);

  return front + back.toUpperCase();
}

//everyNth
/**
Given a non-empty string and an int N, return the string made starting 
with char 0, and then every Nth char of the string. So if N is 3, use 
char 0, 3, 6, ... and so on. N is 1 or more.
Examples
everyNth('Miracle', 2) → Mrce
everyNth('abcdefg', 2) → aceg
everyNth('abcdefg', 3) → adg
 */
function everyNth(str,n){
  let result = '';
  for (let i = 0; i < str.length; i = i + n) {
    result = result + str.charAt(i);
  }
  return result;
}

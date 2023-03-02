//stringTimes
/*
Given a string and a non-negative int n, return a larger string that 
is n copies of the original string.
Examples
stringTimes('Hi', 2) → HiHi
stringTimes('Hi', 3) → HiHiHi
stringTimes('Hi', 1) → Hi
 */
function stringTimes(str,n){
    let finalStr = "";
    for (let i = 0; i < n; i++) {
      finalStr = finalStr + str;
    }
    return finalStr;
  
    /* this could be done in a shorter way with the built-in
    javascript method String.repeat*/ 
     // return(str.repeat(n));
  }

  //frontTimes
  /**
Given a string and a non-negative int n, we'll say that the front of 
the string is the first 3 chars, or whatever is there if the string is 
less than length 3. Return n copies of the front.
Examples
frontTimes('Chocolate', 2) → ChoCho
frontTimes('Chocolate', 3) → ChoChoCho
frontTimes('Abc', 3) → AbcAbcAbc
   */
function frontTimes(str,n){
    let frontLen = 3;
    if (frontLen > str.length) {
      frontLen = str.length;
    }
    let front = str.substring(0, frontLen);
   let result = '';
    let x = 0;
    for (x = 0; x < n; x++) {
      result = result + front;
    }
   return result;
  }

  //countXX
  /**
Count the number of 'xx' in the given string. We'll say that 
overlapping is allowed, so 'xxx' contains 2 'xx'.
Examples
countXX('abcxx') → 1
countXX('xxx') → 2
countXX('xxxx') → 3
   */
function countXX(str){
    let count = 0;
    let x = 0;
    for (x = 0; x < str.length; x++) {
      if (str.charAt(x) === 'x') {
        if (str.charAt(x + 1) === 'x') {
          count++;
        }
      }
    }
    return count++;
  }

  //doubleX
  /**
Given a string, return true if the first instance of "x" in the string 
is immediately followed by another "x".
Examples
doubleX('axxbb') → true
doubleX('axaxax') → false
doubleX('xxxxx') → true
   */
function doubleX(str){
  str.toLowerCase();
  let x = str.indexOf('x');
   if (x === -1) {
     return false;
   }
   if (x >= str.length) {
     return false;
   }
   return str.substring(x + 1, x + 2) === 'x'; 
 }

  //stringBits
  /**
Given a string, return a new string made of every other char starting 
with the first, so "Hello" yields "Hlo".
Examples
stringBits('Hello') → Hlo
stringBits('Hi') → H
stringBits('Heeololeo') → Hello
   */
function stringBits(str){
  let result = '';
   let x = 0;
   for (x = 0; x < str.length; x += 2) {
     result = result + str.substring(x, x + 1);
   }
   return result;
 }

  //stringSplosion
  /**
Given a non-empty string like "Code" return a string like "CCoCodCode".
Examples
stringSplosion('Code') → CCoCodCode
stringSplosion('abc') → aababc
stringSplosion('ab') → aab
   */
function stringSplosion(str){
  let result = '';
 for (let x = 0; x < str.length; x++) {
  results = result + str.substring(0, x + 1);
 }
 return result;
}

  //last2
  /**
Given a string, return the count of the number of times that a 
substring length 2 appears in the string and also as the last 2 chars 
of the string, so "hixxxhi" yields 1 (we won't count the end substring).
Examples
last2('hixxhi') → 1
last2('xaxxaxaxx') → 1
last2('axxaaxx') → 1
   */
function last2(str){
  let count = 0;
   if (str.length < 2) {
     return 0;
   }
   let end = str.substring(str.length - 2);
   let x = 0;
   for (x = 0; x < str.length - 2; x++) {
    let sub = str.substring(x, x + 2);
     if (sub === end) {
       count++;
     }
   }
   return count;
 }

 //arrayCount9
 /**
Given an array of ints, return the number of 9's in the array.
Examples
arrayCount9([1,2,9]) → 1
arrayCount9([1,9,9]) → 2
arrayCount9([1,9,9,3,9]) → 3
  */
function arrayCount9(nums){
  let count = 0;
    let x = 0;
    for (x = 0; x < nums.length; x++) {
      if (nums[x] === 9) {
        count++;
      }
    }
    return count; 
  }

  //arrayFront9
 /**
Given an array of ints, return true if one of the first 4 elements in 
the array is a 9. The array length may be less than 4.
Examples
arrayFront9([1,2,9,3,4]) → true
arrayFront9([1,2,3,4,9]) → false
arrayFront9([1,2,3,4,5]) → false
  */
function arrayFront9(nums){
  let x = 0;
   for (x = 0; x < 4; x++) {
    if (nums[x] === 9) {
      return true;
    }
  }
  return false; 
}

  //array123
 /**
Given an array of ints, return true if the sequence of numbers 1, 2, 3
appears in the array somewhere.
Examples
array123([1,2,9,3,4]) → false
array123([1,2,3,4,9]) → true
array123([9,8,1,2,3,4]) → true
  */
function array123(nums){
  return !!(nums.join('').match(/123/g)); 
}

  //stringMatch
 /**
Given 2 strings, a and b, return the number of the positions where 
they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" 
yields 3, since the "xx" "xx", "aa", and "az" substrings appear in the 
same place in both strings.
Examples
stringMatch('xxcaazz', 'xxbaaz') → 3
stringMatch('abc', 'abc') → 2
stringMatch('abc', 'axc') → 0
  */
function stringMatch(a,b){
  let len = Math.min(a.length, b.length);
  let count = 0;
  let x = 0;
  for (x = 0; x < len - 1; x++) {
   let aSub = a.substring(x, x + 2);
   let bSub = b.substring(x, x + 2);
    if (aSub === bSub) {
      count++;
    }
  }
  return count;
}

  //stringX
 /**
Given a string, return a version where all the "x" have been removed. 
Except an "x" at the very start or end should not be removed.
Examples
stringX('xxHxix') → xHix
stringX('abxxxcd') → abcd
stringX('xabxxxcdx') → xabcdx
  */
function stringX(str){
  let result = '';
  let front = str.substring(0, 1);
  let end = str.substring(str.length - 1);
   let i = 1;
   for (i = 1; i < str.length - 1; i++) {
     if (str.charAt(i) !=='x') {
       result += str.charAt(i);
     }
   }
   return front + result + end; 
 }

  //altPairs
 /**
Given a string, return a string made of the chars at indexes 
0,1, 4,5, 8,9 ... so "kittens" yields "kien".
Examples
altPairs('kitten') → kien
altPairs('Chocolate') → Chole
altPairs('CodingHorror') → Congrr
  */
 function altPairs(str){
 let result = '';
  let x = 0;
  for (x = 0; x < str.length; x += 4) {
    let end = x + 2;
    if (end > str.length) {
      end = str.length;
    }
    result = result + str.substring(x, end);
  }
  return result; 
}

  //stringYak
 /**
Suppose the string "yak" is unlucky. Given a string, return a version 
where all the "yak" are removed, but the "a" can be any char. The 
"yak" strings will not overlap.
Examples
stringYak('yakpak') → pak
stringYak('pakyak') → pak
stringYak('yak123ya') → 123ya
  */
 function stringYak(str){
let result = '';
  let x = 0;
  for (x = 0; x < str.length; x++) {
    if (x + 2 < str.length && str.charAt(x) === 'y' && str.charAt(x + 2) === 'k') {
      x = x + 2;
    } else {
      result = result + str.charAt(x);
    }
  }
  return result;
}

  //array667
 /**
Given an array of ints, return the number of times that two 6's are 
next to each other in the array. Also count instances where the second 
"6" is actually a 7.
Examples
array667([6,6,2]) → 1
array667([6,6,2,6]) → 1
array667([6,7,2,6]) → 1
  */
function array667(nums){
  let count = 0;
  let x = 0;
  for (x = 0; x < nums.length; x++) {
    if (nums[x] === 6) {
      if (nums[x + 1] === 6 || nums[x + 1] === 7) {
        count++;
      }
    }
  } return count;
}

  //noTriples
 /**
Given an array of ints, we'll say that a triple is a value appearing 3 
times in a row in the array. Return true if the array does not contain 
any triples.
Examples
noTriples([1,1,2,2,1]) → true
noTriples([1,1,2,2,2,1]) → false
noTriples([1,1,2,2,2,1]) → false
  */
function noTriples(nums){
  let x = 0;
  for (x = 0; x < nums.length - 2; x++) {
   let first = nums[x];
   if (first === nums[x + 1]) {
      if (first === nums[x + 2]) {
        return false;
      }
    }
  } return true;
}
 
  //has271
 /**

  */

 
  //helloName
 /**
Given a string name, e.g. "Bob", return a greeting of the form 
"Hello Bob!".
Examples
helloName('Bob') → Hello Bob!
helloName('Alice') → Hello Alice!
helloName('X') → Hello X!
  */
function helloName(name){
   return `Hello ${name}!`;
}
 
  //makeAbba
 /**
Given two strings, a and b, return the result of putting them together 
in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
Examples
makeAbba('Hi', 'Bye') → HiByeByeHi
makeAbba('Yo', 'Alice') → YoAliceAliceYo
makeAbba('What', 'Up') → WhatUpUpWhat
  */
function makeAbba(a,b){
   return a + b + b + a; 
}
 
  //makeTags
 /**
The web is built with HTML strings like "<i>Yay</i>" which draws Yay 
as italic text. In this example, the "i" tag makes <i> and </i> which 
surround the word "Yay". Given tag and word strings, create the HTML 
string with tags around the word, e.g. "<i>Yay</i>".
Examples
makeTags('i', 'Yay') → Yay
makeTags('i', 'Hello') → Hello
makeTags('cite', 'Yay') → Yay
  */
function makeTags(tag,word){
  const otag = `<${tag}>`;
  const ctag = `</${tag}>`;
  return otag + word + ctag; 
}
 

  
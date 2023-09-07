function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    // Compare the cleaned string with its reversed version
    return cleanedStr === reversedStr;
  }
  // Test
  console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false
  



  function isPalindromeNumber(num) {
    const strNum = num.toString();
    const reversedStrNum = strNum.split('').reverse().join('');
    return strNum === reversedStrNum;
  }
  // Test
  console.log(isPalindromeNumber(121));   // true
  console.log(isPalindromeNumber(12321)); // true
  console.log(isPalindromeNumber(10)); // false
  




  /**
   * base case or simplest case
   * factorial function, recursive algorithms
   */
  function factorial(n) {
    // Base case
    if (n <= 1) {
        return 1;
    }
    // Recursive call
    return n * factorial(n - 1);
}
console.log(factorial(1));
console.log(factorial(2)); 
console.log(factorial(3)); 
console.log(factorial(4)); 
console.log(factorial(5)); 

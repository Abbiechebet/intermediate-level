/**
 * Regular Expressions
 
A regular expression or RegExp is a small programming language 
that helps to find pattern in data

used to check if some pattern exists in a different data types

To use RegExp in JavaScript either we use RegExp constructor or 
we can declare a RegExp pattern using two forward slashes 
followed by a flag


 */
//💻 Exercises
//Exercises: Level 1
/*Calculate the total annual income of the person from the following 
text. ‘He earns 4000 euro from salary per month, 10000 euro annual 
bonus, 5500 euro online courses per month.’*/
function calculateAnnualIncome(text) {
    const salary = text.match(/(\d+) euro from salary per month/)[1];
    const bonus = text.match(/(\d+) euro annual bonus/)[1];
    const courses = text.match(/(\d+) euro online courses per month/)[1];
    return (salary * 12) + parseInt(bonus) + (courses * 12);
  }
  
  const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
  const annualIncome = calculateAnnualIncome(text);
  console.log(`The total annual income is ${annualIncome} euros.`);
  

/*The position of some particles on the horizontal x-axis 
-1, 2, -4, -3 and -1 in the negative direction, 0 at origin, 
4 and 8 in the positive direction. Extract these numbers and 
find the distance between the two furthest particles.*/

points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
const distance = Math.abs(sortedPoints[sortedPoints.length-1] - sortedPoints[0]);
console.log(distance); //distance = 12     

/*
const particles = [-1, 2, -4, -3, -1, 0, 4, 8];
particles.sort((a,b) => a-b);
const distance = Math.abs(particles[particles.length-1] - particles[0]);
console.log(distance); // Output: 12
*/

/*
const particles = [-1, 2, -4, -3, -1, 0, 4, 8];
const max = Math.max(...particles);
const min = Math.min(...particles);
const distance = Math.abs(max - min);

console.log(`The distance between the two furthest particles is ${distance}.`); // Output: 12
*/


// write a pattern which identify if a string is a valid JavaScript variable
function is_valid_variable(variable_name) {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return regex.test(variable_name);
  }
  console.log(is_valid_variable('first_name')); // true
  console.log(is_valid_variable('first-name')); // false
  console.log(is_valid_variable('1first_name')); // false
  console.log(is_valid_variable('firstname')); // true
    


  //Exercises: Level 2
//Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love 
something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(str) {
  let words = str.split(/\s+/);
  let frequencyMap = {};
  words.forEach(function(w) {
    if (!frequencyMap[w]) {
      frequencyMap[w] = 0;
    }
    frequencyMap[w] += 1;
  });

  let arr = [];
  for (let word in frequencyMap) {
    arr.push({
      word: word,
      count: frequencyMap[word]
    });
  }

  arr.sort(function(a, b) {
    return b.count - a.count;
  });

  return arr.slice(0, 10);
}
console.log(tenMostFrequentWords(paragraph));
    
   /* console.log(tenMostFrequentWords(paragraph))
    [
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}]

console.log(tenMostFrequentWords(paragraph, 10))
[{word:'love', count:6},
{word:'you', count:5},
{word:'can', count:3},
{word:'what', count:2},
{word:'teaching', count:2},
{word:'not', count:2},
{word:'else', count:2},
{word:'do', count:2},
{word:'I', count:2},
{word:'which', count:1}
]*/


//Exercises: Level 3
/*Write a function which cleans text. Clean the following text. After cleaning, 
count three most frequent words in the string.

 I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found 
  more interesting than any other jobs Does this motivate you to be a teacher
*/

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting 
&and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs.%Do@es thi%s mo@tivate yo@u to 
be a tea@cher!?`

function cleanText(sentence) {
  let cleaned = sentence.replace(/[^\w\s]/gi, '').toLowerCase();
  return cleaned;
}
  console.log(cleanText(sentence))

/*
function countWords(sentence) {
  let cleaned = cleanText(sentence);
  let words = cleaned.split(/\s+/);
  let wordCount = {};
  for (let i = 0; i < words.length; i++) {
    if (wordCount.hasOwnProperty(words[i])) {
      wordCount[words[i]]++;
    } else {
      wordCount[words[i]] = 1;
    }
  }
  let sortedWords = Object.keys(wordCount).sort(function(a, b) {
    return wordCount[b] - wordCount[a];
  });
  return sortedWords.slice(0,3);
}

console.log(countWords(sentence)); //[ 'i', 'a', 'teacher' ]
*/



/*Write a function which find the most frequent words. After cleaning, 
count three most frequent words in the string.*/

let cleanedText = `I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found 
more interesting than any other jobs Does this motivate you to be a teacher`

 function mostFrequentWords(cleanedText) {
  
  // Split the string into an array of words
  const wordsArray = cleanedText.split(" ");
  
  // Create an object to store the frequency of each word
  const wordOccurrences = {};
  
  // Count the frequency of each word
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (wordOccurrences[word]) {
      wordOccurrences[word]++;
    } else {
      wordOccurrences[word] = 1;
    }
  }
  
  // Sort the words by frequency in descending order
  const sortedWords = Object.keys(wordOccurrences).sort((a, b) => wordOccurrences[b] - wordOccurrences[a]);
  
  // Return the three most frequent words
  return [
    {word: sortedWords[0], count: wordOccurrences[sortedWords[0]]},
    {word: sortedWords[1], count: wordOccurrences[sortedWords[1]]},
    {word: sortedWords[2], count: wordOccurrences[sortedWords[2]]}
  ];
}

console.log(mostFrequentWords(cleanedText));
 // [{word:'I', count:3}, {word:'a', count:2}, {word:'teacher', count:2}]

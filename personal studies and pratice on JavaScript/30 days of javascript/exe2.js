//Exercise: Level 1
//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';
//Print the string on the browser
console.log(challenge);
//Print the length of the string on the browser
console.log(challenge.length);
//using toUpperCase() method
console.log(challenge.toUpperCase());
//using toLowerCase() method
console.log(challenge.toLowerCase());
//Cut (slice) out the first word of the string using substr() or substring() method
     //substr(): It takes two arguments, the starting index and number of characters to slice.
console.log(challenge.substr(0,2))
     //substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(challenge.substring(0,3))   
//Slice out the phrase Days Of JavaScript
console.log(challenge.substring(3,22)) 
//Check if the string contains a word Script using includes()
console.log(challenge.includes('Script'))
//Split the string into an array using split() method
console.log(challenge.split())
//Split the string at the space using split() method
console.log(challenge.split(' '))

let technologies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// split the string at the comma
console.log(technologies.split(','))
// change it to an array.
console.log(technologies.split())

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'))

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
          //charAt(): Takes index and it returns the value at that index
console.log(challenge.charAt(15))

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11)) //74

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
       //indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
       console.log(challenge. indexOf('a'))

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript
      //Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
      console.log(challenge. lastIndexOf('a'))

let sentence = 'You cannot end a sentence with because because because is a conjunction'
//find the position of the first occurrence of the word because
console.log(sentence. indexOf('because'))
// find the position of the last occurrence of the word because
console.log(sentence. lastIndexOf('because'))

//Use search to find the position of the first occurrence of the word because
       //it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
       console.log(sentence. search('because'))
       console.log(sentence. indexOf('b'))

//Use trim() to remove any trailing whitespace at the beginning and the end of a string
let chal = ' 30 Days Of JavaScript ';
console.log(chal.trim())

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
            //startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
            console.log(challenge.startsWith(30)) 

//Use endsWith() method and make the result true
console.log(challenge.endsWith('JavaScript')) 

//Use match() method to find all the a’s in 30 Days Of JavaScript
/**match: it takes a substring or regular expression pattern as an argument and it returns an 
 array if there is match if not it returns null. Let us see how a regular expression pattern 
 looks like. It starts with / sign and ends with / sign.*/
 console.log(challenge.match('a/gi')) 

//Use concat() and merge - concat(): it takes many substrings and joins them.
 let chal1 = '30 Days of';
 let chal2 = ' JavaScript'
 console.log(chal1.concat(chal2))       

 //Use repeat() method to print 30 Days Of JavaScript 2 times
 //repeat(): it takes a number as argument and it returns the repeated version of the string.
 console.log(challenge.repeat(2))


 //Exercise: Level 2
//Using console.log() print out the following statement:
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.'
 by John Holmes teaches us to help one another.`)

 //Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
 console.log(typeof 10)
 console.log(typeof '10')

 let num = '10'
let numInt = +num
console.log(numInt) // 10

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8'))
console.log(parseInt('9.8'))

//Check if 'on' is found in both python and jargon
//let lang ='python, jargon'
//console.log('python, jargon'.includes('on')) 
console.log( 'python, jargon'.match('on'))

//I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log('I hope this course is not full of jargon'.search('jargon'))
console.log('I hope this course is not full of jargon'.includes('jargon'))
console.log('I hope this course is not full of jargon'.match('jargon'))

//Generate a random number between 0 and 100 inclusively.
const numbers = Math.floor(Math.random () * 101)
console.log({numbers})

//Generate a random number between 50 and 100 inclusively.
//const number = Math.floor(Math.random () * 101)
//console.log({number})
console.log(Math.floor(Math.random() * ((100-50)+ 1) + 50));

//Generate a random number between 0 and 255 inclusively.
const nums =Math.floor(Math.random () * 256)
console.log({nums})

//Access the 'JavaScript' string characters using a random number.
console.log('JavaScript'.charAt(5))   // c
console.log('JavaScript'.charAt(7))   // i

let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter)           // J

let lastIndex = string.length - 1
console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t

/*Use console.log() and escape characters to print the following pattern.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

/**
Use substr to slice out the phrase because because because from the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
var con = 'You cannot end a sentence with because because because is a conjunction';
var because = /because/gi;
console.log(con.match(because)); 
 /**
Generate a random number between two numbers.
Math.random() * (max-min) + min);

Generate a random integer between two numbers min and max (both min and max are inclusive).
th.floor(Math.random() * ((max-min)+1) + min);

Generate a random integer between two numbers min and max (the min is inclusive, and the max 
    is exclusive).
Math.floor(Math.random() * (max-min) + min);
  */



//Exercises: Level 3
/**'Love is the best thing in this world. Some found their love and some are still 
looking for their love.' Count the number of word love in this sentence.*/
var luv = `Love is the best thing in this world. Some found their love and some are still\ 
looking for their love.`
var love = /love/gi
console.log(luv.match(love))

/**Use match() to count the number of all because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'*/
var con = 'You cannot end a sentence with because because because is a conjunction';
var because = /because/gi;
console.log(con.match(because)); 

/**Clean the following text and find the most frequent word (hint, use replace and regular 
    expressions). */
    const paragraph = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. 
    The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. 
    ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate 
    yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& 
    of tea&ching`
// let sent = paragraph.replace(/ /g, "1");
// const sentReg = /\d{3}/g 
// let finalSent = sent.replace(sentReg, ""), finalfinalSent = finalSent.replace(/1/g, " ");
// console.log(finalSent)



let cleanSentence = paragraph.replace(/[^\w\s]|_/g, ""); // punctuation removed
let words = cleanSentence.split(/\s/); // Array of words.  Any whitespace is a delimiter.
let wordFrequencies = new Map();
words.forEach(function(word) {
    if (!wordFrequencies.has(word))
        wordFrequencies.set(word, 1);
    else
        wordFrequencies.set(word, wordFrequencies.get(word)+1);
});
// Now wordFrequencies maps each unique word to a frequency count.
let maxFrequency = Math.max(...wordFrequencies.values()); // Find max frequency of any word.
let wordsMatchingMaxFrequency = Array.from(wordFrequencies.keys()).filter((word) => {
    return wordFrequencies.get(word) === maxFrequency;
});
console.log(wordsMatchingMaxFrequency);



// let cleanSentence = paragraph.replace(/[^\w\s]|_/g, ""); // punctuation removed
// console.log('cleanSentence = ' + cleanSentence);
// let words = cleanSentence.split(/\s/); // Array of words.  Any whitespace is a delimiter.
// console.log('words = ' + JSON.stringify(words));



// let reg = /\W+/g;
// let replaceChar = " ";
// let result = paragraph.replace(reg,replaceChar)
// console.log(result)



 /*Calculate the total annual income of the person by extracting the numbers from the 
    following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 
    15000 euro online courses per month.' */
    let earnings = `He earns 5000 euro from salary per month, 10000 euro annual bonus, 
    15000 euro online courses per month.`
    console.log((5000*12)+(10000)+(15000*12)+' euro') 
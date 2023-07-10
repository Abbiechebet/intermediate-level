/**
 * Arrays
 */

//Exercise: Level 1
//Declare an empty array;
let emptyArray = [];

//Declare an array with more than 5 number of elements
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

//Find the length of your array
webTechs.length
console.log(webTechs.length);

//Get the first item, the middle item and the last item of the array
console.log(webTechs[0]);
console.log(webTechs[3]);
console.log(webTechs[6]);

/*Declare an array called mixedDataTypes, put different data types in the 
array and find the length of the array. The array size should be greater 
than 5 */
const mixedDataTypes = [ 'Asabeneh',
250,
true,
{ country: 'Finland', city: 'Helsinki' },
{ skills: ['HTML', 'CSS', 'JS', 'React', 'Python']}]
console.log(mixedDataTypes.length)

/*Declare an array variable name itCompanies and assign initial values 
Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon*/
const itCompanies = ['Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon']
//Print the array using console.log()
console.log(itCompanies)

//Print the number of companies in the array
console.log(itCompanies.length)

//Print the first company, middle and last company
console.log(webTechs[0], [3], [6])

//Print out each company
console.log(webTechs[0])
console.log(webTechs[1])
console.log(webTechs[2])
console.log(webTechs[3])
console.log(webTechs[4])
console.log(webTechs[5])
console.log(webTechs[6])

//Change each company name to uppercase one by one and print them out
console.log(webTechs[0].toUpperCase())
console.log(webTechs[1].toUpperCase())
console.log(webTechs[2].toUpperCase())
console.log(webTechs[3].toUpperCase())
console.log(webTechs[4].toUpperCase())
console.log(webTechs[5].toUpperCase())
console.log(webTechs[6].toUpperCase())

//Print the array like as a sentence: 
console.log(['Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies'])

/*Check if a certain company exists in the itCompanies array. If it 
exist return the company else return a company is not found*/
const itCompany = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
 if(itCompany.includes('Apple')){
    console.log('Apple company');
 }
  else{
    console.log('Apple company is not found');
  }   

if (itCompany.includes('Toptal')){
    console.log('Toptal') ;
}else{
    console.log('Toptal company is not found'); 
}

/*Filter out companies which have more than one 'o' without the filter 
method Sort the array using sort() method */
// const ItCompany = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//     console.log(ItCompany.filter(checkCompany));
//     function checkCompany() {
//       return o ==2 ;
//     }

//Sort the array using sort() method
const it_Company1 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(it_Company1.sort())

//Reverse the array using reverse() method
const it_Company2 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(it_Company2.reverse())

//Slice out the first 3 companies from the array
const it_Company3 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(it_Company3.slice(0,3))

//Slice out the last 3 companies from the array
const it_Company4 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(it_Company4.slice(4))

//Slice out the middle IT company or companies from the array
const it_Company5 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(it_Company5.slice(3,4))

//Remove the first IT company from the array
const it_Company6 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(it_Company6.shift())

//Remove the middle IT company or companies from the array
const it_Company7 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
 //splice- starting position, items to be removed, items to be added
 console.log(it_Company7.splice(3,1))

//Remove the last IT company from the array
const it_Company8 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(it_Company8.pop())

//Remove all IT companies 
const it_Company9 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(it_Company9.splice(0,7))    




//Exercise: Level 2
/* Create a separate countries.js file and store the countries array in to 
this file, create a separate file web_techs.js and store the webTechs 
array in to this file. Access both file in main.js file*/
const countries1 = [
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
  console.log(countries1)
  
  const webTechs1 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
console.log(webTechs1)

/*First remove all the punctuations and change the string to array and 
count the number of words in the array */
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//let words = text.replace(/./,'')
let words= text.split(' ')
console.log(words)
console.log(words.length)


//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
console.log(shoppingCart)

//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
console.log(shoppingCart)

//remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1)
console.log(shoppingCart)

//modify Tea to 'Green Tea'
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)

/*In countries array check if 'Ethiopia' exists in the array if it exists 
print 'ETHIOPIA'. If it does not exist add to the countries list */
console.log(countries1.includes('Ethiopia'))
countries1[4] = 'ETHIOPIA'
console.log(countries1)

/*In the webTechs array check if Sass exists in the array and if it exists 
print 'Sass is a CSS preprocess'. If it does not exist add Sass to the 
array and print the array. */
console.log(webTechs1.includes('Sass'))
webTechs1.push('Sass')
console.log(webTechs1)

/*Concatenate the following two variables and store it in a fullStack 
variable. */
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]] 



//Exercise: Level 3
//The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
let max = Math.max(...ages)
let min = Math.min(...ages)
console.log(max) 
console.log(min) 

//Find the median age(one middle item or two middle items divided by two)
console.log(ages.sort())
var middle = ages[Math.round((ages.length - 1) / 2)];
//var middle = ages[Math.floor(ages.length / 2)];
console.log(middle)

//Find the average age(all items divided by number of items)
const sum = ages.reduce((a, b) => a + b, 0);
const average = (sum / ages.length) || 0;
console.log(average)

//Find the range of the ages(max minus min)
let range = max - min
console.log(range)

/*Compare the value of (min - average) and (max - average), 
use abs() method*/
console.log(Math.abs(min))
console.log(Math.abs(max))

//Slice the first ten countries from the countries array
console.log(countries1.slice(0,10))

//Find the middle country(ies) in the countries array
var mid = countries1[Math.floor(countries1.length / 2)];
console.log(mid)

/*Divide the countries array into two equal arrays if it is even. 
If countries array is not even , one more country for the first half.*/
console.log(countries1.length)
countries1.unshift('Lesotho')
console.log(countries1)
const middleIndex = Math.ceil(countries1.length / 2);
const firstHalf = countries1.slice().splice(0, middleIndex);   
const secondHalf = countries1.slice().splice(-middleIndex);

console.log(firstHalf);  // [1, 2, 3]
console.log(secondHalf); // [4, 5, 6]
console.log(countries1);    
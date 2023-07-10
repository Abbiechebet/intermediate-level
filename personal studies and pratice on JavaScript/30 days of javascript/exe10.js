/**
 * set
 
 Set is a collection of elements. Set can only contains unique elements. 

   Creating an empty set
const companies = new Set()
console.log(companies) //Set(0) {}

             (get method)
Getting a >>>value from Map      
console.log(countriesMap.get('Finland'))
Helsinki

            (has method)   /includes
Checking >>>key in Map       
Check if a key exists in a map using has method. It returns true or false.
console.log(countriesMap.has('Finland'))
true
 */

//Exercises
//Exercises:Level 1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

//create an empty set
const companies = new Set()
console.log(companies) //Set(0) {}

//Create a set containing 0 to 10 using loop
let mySet = new Set();
for (let i = 0; i <= 10; i++) {
    mySet.add(i);
}
console.log(mySet);

//Remove an element from a set
let mySet1 = new Set([1, 2, 3]);
mySet1.delete(2);
console.log(mySet1); // Output: Set(2) {1, 3}

//Clear a set
mySet1.clear()
console.log(mySet1)

//Create a set of 5 string elements from array
let arr = ['element1', 'element2', 'element3', 'element4', 'element5'];
let mySet2 = new Set(arr);
console.log(mySet2)

//Create a map of countries and number of characters of a country
const map = new Map();
countries.forEach(country => {
  map.set(country, country.length);
});
console.log(map);



//Exercises:Level 2
//Find a union b
const union = [...new Set([...a, ...b])];
console.log(union);

let c = [...a, ...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)

//Find a intersection b / Find a with b
let D = new Set(a)
let E = new Set(b)
let c1 = a.filter((num) => E.has(num))
let F = new Set(c1)
console.log(F)


const intersection = a.filter(val => b.includes(val));
console.log(intersection);

//Find difference between a and b
let G = new Set(a)
let H = new Set(b)
let c2 = a.filter((num) => !H.has(num))
let I = new Set(c2)
console.log(I)


//Exercises:Level 3
//How many languages are there in the countries object file.
const K = 65;
const Z = 90;
const countryName = new Intl.DisplayNames(['en'], {type: 'region'});
const countries1 = {};
for (let i=K; i<=Z; ++i) {
  for (let j=K; j<=Z; ++j) {
    let code = String.fromCharCode(i) + String.fromCharCode(j);
    try {
      let name = countryName.of(code);
      countries[name] = code;
    } catch (e) {}
  }
}
console.log(countries);


//Use the countries data to find the 10 most spoken languages:

  /* // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // Your output should look like this
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]
  */
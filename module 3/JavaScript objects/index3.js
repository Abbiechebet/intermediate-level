const person ={
    name : 'Monica',
    age : 22,
}
person['height'] = '5ft';

console.log(person);

function createPerson(name, age, gender){
    return{
        name : name,
        age : age,
        gender : gender,
    }
}
const joy = createPerson("Joy", "21", "female");
const persons = createPerson("Carl", "21", "male");
console.log(persons);
console.log(joy);



//how do we copy / clone an object
// option 1 - using oject.assign()

const firstBook = {
    author: 'Chimamanda Adichie',
    title: 'Half of a Yellow Sun',
    yearPublished: 2008,
}
// //wrong way to make a copy or clone
const SecondBook = firstBook; //changes title of both

console.log('wrong way to make a copy');

console.log({firstBook});
console.log({SecondBook});
// //correct way to clone
 const secondBook = Object.assign({}, firstBook);

console.log('correct way to clone');

console.log({firstBook});
console.log({secondBook});

secondBook.title = 'Purple Hibiscus';

console.log('after changed title of second book');

console.log({firstBook});
console.log({secondBook});

// option 2 - using spread syntax ...
const thirdBook = {...firstBook};
thirdBook.title = 'Americanah';

console.log('using spread syntax ...');

console.log({firstBook});
console.log({thirdBook});

//option 3 - using method JSON.parse(JSON.stringify())
//JSON - JavaScript Object Notation

//const fourthBook = JSON.parse(JSON.stringify(firstBook));
const fourthBook = JSON.parse
fourthBook.title = 'Notes on Grief';

console.log('using method JSON.parse(JSON.stringify())');

console.log({firstBook});
console.log({fourthBook});
//console.log( JSON.parse);

//merge objects
//option 1 - using Object.assign
 const firstBookDetails = {
    publisher: 'Penguin Books',
    copiesSold: '1 million',
    pages: 502,
    edition: '3rd',
 }

 //Object.assign(target, source);

//const firstBookInfo = Object.assign(firstBook, firstBookDetails);
//console.log({firstBookInfo})

Object.assign(firstBook, firstBookDetails);
console.log('merge objects using Object.assign');
console.log({firstBook});

//option 2 - Using Spread Operator
const secondBookDetails = {
    publisher: 'Penguin Books',
    copiesSold: '1 million',
    pages: 600,
    edition: '3rd',
 }

const secondBookInfo = {...secondBook, ...secondBookDetails};
console.log({secondBookInfo});


//enumeration of properties in an object

//for...in loops - traversing


console.log('using for...in loops')

for (const property in secondBookInfo) {
    //action to be carried out on each property
    console.log(property);
    console.log(secondBookInfo[property]);
    //console.log(key);
    //console.log(secondBookInfo[key]);
  }

  console.log('using key in place of property')

  for (const key in secondBookInfo){
    console.log(key);
    console.log(secondBookInfo[key]);
}

console.log('use of Object.keys()');

//Object.keys()
console.log(Object.keys(secondBookInfo));//an array of keys
//for...of loops

console.log('use of for...of loops');

for(let key of Object.keys(secondBookInfo)) {
    console.log(key);
    console.log(secondBookInfo[key]);
}

//=======================================
function addNumbers (num1, num2) {
    //action logic
    //   console.log(num1, num2);
}

//how can we copy certain properties in an object to another
const obj = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

//using Object.assign()
Object.assign(obj, { d: obj2.d });

console.log(obj);

//using spread operator
 const obj3 = {...obj, ...{d: obj2.d}}
 console.log('object 3 is ' + obj3)




/*Add the object as a property to Musa object you created 
above in (a) above*/

// //merging objects
// //Object.assign(target, source);
// Object.assign(Musa, musaJambScores);
// console.log({Musa});


// //NESTED OBJECTS
// const musa = {
//     Name: 'Musa Dawodu',
//     Age: '19 years old',
//     Location: 'Lekki, Lagos State',
//     musaJambScores : {
//         ENG : 70,
//         GOVT : 85,
//         LIT : 82,
//         CRK : 94,
//     }
// }
// console.log({musa});

Musa.musaJambScores = new createJambScores(70, 85, 82, 94);
console.log({Musa});
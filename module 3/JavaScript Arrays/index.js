//names of students in Matunda Grammar School
let name1 = 'Daniel';
let name2 = 'Oluwaseun';
let name3 = 'Benita';
let name4 = 'Barituka';
let name5 = 'Chioma';

//let obj = {}; //empty object
//let names = []; //empty array

//options for creating arrays

//using an array literal
let names = ['Daniel','Oluwaseun','Benita','Barituka','Chioma'];
console.log(names);

//using new keyword
let names2 =new Array('Daniel','Oluwaseun','Benita','Barituka','Chioma');
console.log(names2);

let ages = [20, 25, 22, 28, 19]; //array of numbers
console.log(ages);

let arrayOfMixedDataTypes = [30, 'Kenya', false, {names:'Leo'}, 
['Us','Uk','Canada'], undefined];
console.log(arrayOfMixedDataTypes);

//Add elements to an array
let countries = ['Libya']

//adding elements to the end of an array
// push()
/**
push(element0)
push(element0, element1)
push(element0, element1,  … , elementN)

 */
countries.push('Mali');
console.log(countries);
countries.push('Botswana', 'Egypt');
console.log(countries);


//adding elements to the beginning of an array
//unshift()
/**
unshift(element0)
unshift(element0, element1)
unshift(element0, element1,  … ,elementN) 
*/
countries.unshift('Ghana');
console.log(countries.unshift('Ghana')); // returns array length
console.log(countries);
countries.unshift('Tanzania', 'Uganda');
console.log(countries);

//finding length of an array - that is number of elements in an array
//0bject.length
console.log(countries.length);

let numOfCountries = countries.length
console.log(numOfCountries);

let array1 = [];
console.log(array1.length);

//accessing items in an array
//idices (singular is index)
//['Tanzania', 'Uganda', 'Ghana', 'Libya', 'Mali', 'Botswana', 'Egypt']
//index = position - 1

//Accessing Tanzania
const firstItem = countries[0];
console.log(firstItem);

//accessing Egypt
const lastItem = countries[6];
console.log(lastItem);

const lastItemAlt = countries[countries.length - 1];
console.log('last country is ' + lastItemAlt);

countries.push('Togo');
const lastItemAlt2 = countries[countries.length - 1];
console.log('last country is ' + lastItemAlt2);

//removing elements from an array
//removing the last element
console.log(countries);
countries.pop();
console.log(countries);

const removedElement = countries.pop();
console.log(countries);
console.log('The removed element is ' + removedElement);


//removing the first element
countries.shift();
console.log(countries);

console.log(countries.indexOf('Libya'));


//merging arrays
//using concat() method
let cheapCars = ['Audi', 'Mazda', 'Nissan'];

let expensiveCars = ['Lamborghini', 'Ferari', 'Maserati'];

let commonCars = ['Honda', 'Toyota', 'Mercedes'];

let allCars = cheapCars.concat(expensiveCars, commonCars);
console.log(allCars);
/*['Audi', 'Mazda', 'Nissan', 'Lamborghini', 'Ferari', 'Maserati',
'Honda', 'Toyota' 'Mercedes'] */

//how do you know if an element is present in an array

// 1.using indexOf
let ferariIndex = allCars.indexOf('Ferari');
console.log(ferariIndex); //present

let vitzIndex = allCars.indexOf('Vitz');
console.log(vitzIndex); // not present teturns -1

//add fitz to list of cars if not present
if(vitzIndex === -1){
    allCars.push('Vitz');
}
// if(ferariIndex === -1){
//     allCars.push('Ferari');
// }
else{
    console.log('Ferari is already present');
}
console.log(allCars);


// 2.using includes()

// if(!allCars.includes('Vitz')){
//     allCars.push('Vitz');
// }

let isVitzPresent = allCars.includes('Vitz')//true
console.log( 'use of includes ' + isVitzPresent);

if(isFitzPresent){
    console.log('Vitz is already present');
}
else{
    allCars.push('Vitz');
}
console.log(allCars);

//values can be same but references are different

let a = {value: 1};//0.24468851231573363
let b = {value: 1};//0.3498217289526573
console.log(a == b); //false
console.log(Math.random());


let firstName = {value: 'Tunde'};
let secondName = firstName;//reference to value
console.log(secondName);


 let arrayOfCarsObjects = [
    {car: 'Nissan'},
    {car: 'Toyota'},
    {car: 'Audi'},
    {car: 'Maserati'},
    {car: 'Lamborghini'}
    ]
// let isNissanPresent = allCars.includes({car: 'Nissan'});
// console.log(isNissanPresent); //false

//finding if an object exists in an array
// 3. using find()
let isNissanPresent = arrayOfCarsObjects.find(function(carObject){
return carObject.car === 'Nissan';
});//carObject can be replaced by element
console.log(isNissanPresent); //

let isToyotaPresent = arrayOfCarsObjects.find(function(carObject){
    return carObject.car === 'Lamborghini';
    });
    console.log(isToyotaPresent);



//MAP - transforms each element in the array
console.log(allCars);
//convert all cars to uppercase
let allCarsInUpperCase = allCars.map(function(item){
    return item.toUpperCase();
})
console.log(allCarsInUpperCase);




 
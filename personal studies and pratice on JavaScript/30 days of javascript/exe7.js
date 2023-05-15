const calculateAge = (birthYear, currentYear = 2023) => currentYear - birthYear
console.log('Age: ', calculateAge(1997))


//💻 Exercises
//Exercises: Level 1

//Declare a function fullName and it print out your full name
// function generateFullName(firstName = 'Abigael', lastName = 'Chebet') {
//     let space = ' '
//     let fullName = firstName + space + lastName
//     return fullName
//   }
//   console.log(generateFullName())
  //console.log(generateFullName('David', 'Smith'))

  function printFullName (){
    let firstName = 'Abigael'
    let lastName = 'Chebet'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName()

//Declare a function fullName.firstName, lastName as a parameter and it returns your fullname.
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
  console.log(fullName('Abigael', 'Chebet'))

//Declare a function addNumbers and it takes two parameters and it returns sum.
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
  }
  
  console.log(sumTwoNumbers(145, 289))

/*An area of a rectangle is calculated as follows: area = length x width.
 Write a function which calculates */
 const areaOfRectangle = (length, width) => {
    let area = length * width;
    return area;
  }
console.log(areaOfRectangle(80, 5))

/*A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
 Write a function which calculates perimeterOfRectangle. */
 const perimeterOfRectangle = (length, width) => {
    let perimeter= 2*(length + width);
    return perimeter;
  }
console.log(perimeterOfRectangle(80, 5))

/*A volume of a rectangular prism is calculated as follows:volume = length x width x height.
Write a function which calculates volumeOfRectPrism. */
function volumeOfRectPrism(length, width, height) {
    let  volume = length * width * height
    return volume
  }
  
  console.log(volumeOfRectPrism(10,10,10)) 

/*Area of a circle is calculated as follows: area = π x r x r. Write a 
function which calculates areaOfCircle*/ 
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  console.log(areaOfCircle(21))

  /*Circumference of a circle is calculated as follows: circumference = 2πr.
   Write a function which calculates circumOfCircle */
  function circumOfCircle(r) {
    let circumference = Math.PI * 2 * r
    return circumference
  }
  console.log(circumOfCircle(21))

/*Density of a substance is calculated as follows:
density= mass/volume. Write a function which calculates density. */
function densityOfSubstance(mass, volume) {
    let density= mass/volume
    return density
  }
  console.log(densityOfSubstance(150, 30))

/*Speed is calculated by dividing the total distance covered by a moving 
object divided by the total amount of time taken. Write a function 
which calculates a speed of a moving object, speed. */
function speedOfObject(distance, time) {
    let speed = distance/time
    return speed
  }
  console.log(speedOfObject(180,2))

/*Temperature in oC can be converted to oF using this formula: 
oF = (oC x 9/5) + 32. Write a function which convert oC to oF 
convertCelsiusToFahrenheit. */
function convertCelsiusToFahrenheit (oC) {
    let oF = (oC * 9/5) + 32
    return oF
  }
  console.log(convertCelsiusToFahrenheit(36))


/*Body mass index(BMI) is calculated as follows: 
bmi = weight in Kg / (height x height) in m2. Write a function which 
calculates bmi. BMI is used to broadly define different weight groups 
in adults 20 years old or older.Check if a person is underweight, 
normal, overweight or obese based the information given below. 
         The same groups apply to both men and women.
         Underweight: BMI is less than 18.5
         Normal weight: BMI is 18.5 to 24.9
         Overweight: BMI is 25 to 29.9
         Obese: BMI is 30 or more*/
const bodyMassIndex = (weight, height) =>  weight/ (height * height)
  
console.log(bodyMassIndex(500, 5))


/*Write a function called checkSeason, it takes a month parameter and 
returns the season:Autumn, Winter, Spring or Summer.*/

function checkSeason (Month) {
   switch (Month) {
    case 12:
    case 1:
    case 2:
        //document.write("WINTER" + "<br/>");
        console.log("WINTER");
        break;
    case 3:
    case 4:
    case 5:
        console.log("SPRING");
        break;
    case 6:
    case 7:
    case 8:
        console.log("SUMMER");
        break;
    case 9:
    case 10:
    case 11:
        console.log("AUTUMN");
        break;
    default:
        console.log("Invalid Month number");
        break;
    } 
} 
let Month = 12;
        console.log("For Month number: "+ Month);
        checkSeason(Month);
   


/*Math.max returns its largest argument. Write a function findMax 
that takes three arguments and returns their maximum with out using
 Math.max method. */
 function findMax (a,b,c){
  if (a>b && a>c) {
    return a;
  } else if (b>a && b>c) {
    return b;
  } else {
    return c;
  }               
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))





//Exercises: Level 2

/*Linear equation is calculated as follows: ax + by + c = 0. Write a 
function which calculates value of a linear equation, solveLinEquation. */
function solveLinEquation(a, b, c) {
  if (a === 0) {
    return "a cannot be zero";
  }
  let x = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  let y = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  return [x, y];
}
console.log(solveLinEquation(1, 0, -4))


/*Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
Write a function which calculates value or values of a quadratic 
equation, solveQuadEquation.*/
function solveQuadratic(a, b, c) {
let root1, root2;
// calculate discriminant
let discriminant = b * b - 4 * a * c;
// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}





/*Write a function name showDateTime which shows time in this 
format: 08/01/2020 04:08 using the Date object. */
function showDateTime(){
  const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)
//08/01/2020 04:08
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
}
showDateTime()


//Declare a function name swapValues. This function swaps value of a to b.
function swapValues(a, b){
  // var t = a;
  // a = b;
  // b = t
  // return [a, b];

  //return [b, a]

  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}
console.log(swapValues(3, 4)) // x => 4, y=>3
console.log(swapValues(4, 5)) // x = 5, y = 4


/*Declare a function name reverseArray. It takes array as a parameter and 
it returns the reverse of the array (don't use method).*/

function reverseArray(array){
  let arrReversed = array.map(array.pop, [...array]);
  return arrReversed
}

console.log(reverseArray([1, 2, 3, 4, 5])) //[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C'])) //['C', 'B', 'A']


/*Declare a function name capitalizeArray. It takes array as a parameter 
and it returns the - capitalizedarray. */
function capitalizeArray(array) {
  const newArr = []
  for (const element of array) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}
console.log(capitalizeArray(['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']))


/*Declare a function name addItem. It takes an item parameter and it 
returns an array after adding the item*/
function addItem(item) {
  const newItem = []
  for (const element of item) {
    newItem.push(element)
  }
  return newItem
}
console.log(addItem(['Cola', 'Lemonade', 'Coffee', 'Water']))


/*Declare a function name removeItem. It takes an index parameter and 
it returns an array after removing an item*/
function removeItem( index) {
  const items =['Cola', 'Lemonade', 'Coffee', 'Water'] 
  items.pop(1, index);
  return items
}
console.log(removeItem())


/*Declare a function name sumOfNumbers. It takes a number parameter 
and it adds all the numbers in that range.*/
function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
console.log(sumOfNumbers([1,2,3,4,5]));


/*Declare a function name sumOfOdds. It takes a number parameter and 
it adds all the odd numbers in that - range.*/
function sumOfOdds(n) {
  var sumSoFar = 0; 
  var currentNumber = 1;
  while (currentNumber<=n) {
      if(currentNumber % 2 == 1 ){
          sumSoFar += currentNumber;
      }
      currentNumber += 1;
  }
  return sumSoFar;
}
console.log(sumOfOdds(5));


// function sumOfOdds(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i += 2) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumOfOdds(5));


/*Declare a function name sumOfEven. It takes a number parameter and 
it adds all the even numbers in that - range.*/
function sumOfEven(num) {
  let sum = 0;
  for (let i = 0; i <= num; i += 2) {
    sum += i;
  }
  return sum;
}
console.log(sumOfEven(6));


/*Declare a function name evensAndOdds . It takes a positive integer 
as parameter and it counts number of evens and odds in the number.
evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.
*/
function evensAndOdds(num) {
  let odds = 0;
  let evens = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
    //num = Math.floor(num);
  }
  return `The number of odds are ${odds}. 
          The number of evens are ${evens}.`;
}
console.log(evensAndOdds(100))

/*Write a function which takes any number of arguments and return 
the sum of the arguments */
function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3)) // -> 6
console.log(sum(1, 2, 3, 4)) // -> 10


//Write a function which generates a randomUserIp.
function randomUserIp() {
  const ip = [];
  for (let i = 0; i < 4; i++) {
    ip.push(Math.floor(Math.random() * 256));
  }
  return ip.join(".");
}
console.log(randomUserIp())


//Write a function which generates a randomMacAddress
function randomMacAddress() {
  const hexDigits = "0123456789ABCDEF";
  let macAddress = "";
  for (let i = 0; i < 6; i++) {
    let hex = "";
    for (let j = 0; j < 2; j++) {
      hex += hexDigits[Math.floor(Math.random() * 16)];
    }
    macAddress += hex;
    if (i < 5) {
      macAddress += ":";
    }
  }
  return macAddress;
}
console.log(randomMacAddress()) 

/*Declare a function name randomHexaNumberGenerator. When this function 
is called it generates a random hexadecimal number. The function return 
the hexadecimal number. */
function randomHexaNumberGenerator() {
  let hexaDecimal = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += hexaDecimal.charAt(Math.floor(Math.random() * hexaDecimal.length));
  }
  return result;
}
console.log(randomHexaNumberGenerator()); //'#ee33df'


/*Declare a function name userIdGenerator. When this function is called 
it generates seven character id. The function return the id. */
function userIdGenerator() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 7; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
console.log(userIdGenerator());//41XTDbE
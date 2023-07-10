/*
*Higher Order Functions

   Higher order functions are functions which take other function 
as a parameter or return a function as a value. 

   A callback is a function which can be passed as parameter to other function
   ** in  a callback function, the name of the function could be any name

   Setting time
In JavaScript we can execute some activities in a certain interval of time or 
we can schedule(wait) for some time to execute some activities.
    
            setInterval
In JavaScript, we use setInterval higher order function to do some activity 
continuously with in some interval of time. 
The setInterval global method take a callback function and a duration as a 
parameter. The duration is in milliseconds and the callback will be always 
called in that interval of time.      
    
            setTimeout
In JavaScript, we use setTimeout higher order function to execute some action
at some time in the future. The setTimeout global method take a callback 
function and a duration as a parameter.
The duration is in milliseconds and the callback wait for that amount of time.

         forEach: 
Iterate an array elements. We use forEach only with arrays. 
It takes a callback function with elements, index parameter 
and array itself. The index and the array optional.

         map: 
Iterate an array elements and modify the array elements. 
It takes a callback function with elements, index , array parameter and return a new array

            Filter: 
Filter out items which full fill filtering conditions and return a new array.

            reduce: 
Reduce takes a callback function. The call back function takes accumulator, 
current, and optional initial value as a parameter and returns a single value. 
It is a good practice to define an initial value for the accumulator value. 
If we do not specify this parameter, by default accumulator will get array first 
value. If our array is an empty array, then Javascript will throw an error.

           every: 
Check if all the elements are similar in one aspect. It returns boolean


           find: 
Return the first element which satisfies the condition

           findIndex: 
Return the position of the first element which satisfies the condition

           some: 
Check if some of the elements are similar in one aspect. It returns boolean

            sort: 
The sort methods arranges the array elements either ascending or descending order. 
By default, the sort() method sorts values as strings.This works well for string 
array items but not for numbers. If number values are sorted as strings and it give us
 wrong result. Sort method modify the original array. It is recommended to copy the 
 original data before you start using sort method.


*/
  //0101477305

  //💻 Exercises
  //Exercises: Level 1
  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'Fiji', 'France']
  const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  //Define a callback function before you use it in forEach, map, filter or reduce.
 //forEach
  let sum = 0;
 numbers.forEach(num => console.log(num))
 numbers.forEach(num => sum += num)
 console.log(sum)

 //map
 const namesA = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = namesA.map((name) => name.toUpperCase().slice(0, 3)
)
console.log(namesToUpperCase)

//filter
const namesEndsByas =namesA.filter((name) => name.endsWith('as'))
console.log(namesEndsByas)

//reduce
//const numbers = [1, 2, 3, 4, 5]
const sumA = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sumA)


  //Use forEach to console.log each country in the countries array.
  countries.forEach(country => console.log(country))


  //Use forEach to console.log each name in the names array.
  names.forEach(name => console.log(name))


  //Use forEach to console.log each number in the numbers array.
  numbers.forEach(num => console.log(num))


  //Use map to create a new array by changing each country to uppercase in the countries array.
  const countriesToUpperCase = countries.map((country) => country.toUpperCase())
  console.log(countriesToUpperCase)


  //Use map to create an array of countries length from countries array.
  const countriesLength = countries.map((country) => country.length)
  console.log(countriesLength)


  //Use map to create a new array by changing each number to square in the numbers array
  const numbersSquare = numbers.map((num) => num * num)
  console.log(numbersSquare)


  //Use map to map the products array to its corresponding prices.
  const productPrice = products.map((product) => product)
  console.log(productPrice)


  //Use filter to filter out countries containing land.
  const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)


  //Use filter to filter out countries having six character.
const countriesHaveSixLetters = countries.filter(
(country) => country.length === 6)
 console.log(countriesHaveSixLetters)


  //Use filter to filter out countries containing six letters and more in the country array.
  const countriesHaveSixOrMoreLetters = countries.filter(
   (country) => country.length > 5)
    console.log(countriesHaveSixOrMoreLetters)


  //Use filter to filter out country start with 'E';
const countriesStartingWithI = countries.filter((country) =>
country.startsWith('I'))
console.log(countriesStartingWithI)


  //Use filter to filter out only prices with values.
const filteredProducts = products.filter((product) => {
return typeof product.price === 'number' && !isNaN(product.price);
 });
 
 console.log(filteredProducts);


  /*Declare a function called getStringLists which takes an array as a parameter 
  and then returns an array only with string items.*/
 const nums = ["1", "2", 3]   
function getStringLists(nums) {
  return nums.filter(function(item) {
    return typeof item === "string";
  });
}
console.log(getStringLists(nums))


  /*Use reduce to concatenate all the countries and to produce this sentence: 
  Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries*/
 const sentence = countries.reduce((previousValue, currentValue) => {
    if (currentValue === countries[countries.length - 1]) {
      return previousValue + ', and ' + currentValue;
    } else if (previousValue === '') {
      return currentValue;
    } else {
      return previousValue + ', ' + currentValue;
    }
  }, '');
  console.log(sentence + ' are north European countries');
  

//Use some to check if some names' length greater than seven in names array
const someNames = names.some((name) => name.length > 7)
console.log(someNames) 


//Use every to check if all the countries contain the word land
const countriesContainLand = countries.every((country) =>
country.includes('land')
)
console.log(countriesContainLand)


//Use find to find the first country containing only six letters in the countries array
const findCountry = countries.find((country) => country.length === 6)
console.log(findCountry) 


//Use findIndex to find the position of the first country containing only six letters in the countries array
const findIndexCountry = countries.findIndex((country) => country.length === 6)
console.log(findIndexCountry) 


//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findIndexOfNorway = countries.findIndex((country) => country === "Norway");
console.log(findIndexOfNorway) 


//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaIndex = countries.findIndex((country) => country === "Russia");
console.log(russiaIndex) 




//Exercises: Level 2
/*Find the total price of products by chaining two or more array iterators
(eg. arr.map(callback).filter(callback).reduce(callback))*/
const totalPrice = products
  .map(item => item.price)
  .filter(price => typeof price === 'number' && !isNaN(price))
  .reduce((total, price) => total + price);

console.log(totalPrice);


//Find the sum of price of products using only reduce reduce(callback))
const sumPrice = products.reduce(function(acc, cur){
  if (Number.isInteger(cur.price)) return acc + cur.price;
  else return acc;
}, 0);
   console.log(sumPrice)


/*Declare a function called categorizeCountries which returns an array 
of countries which have some common pattern(you find the countries array 
in this repository as countries.js(eg 'land', 'ia', 'island','stan')).*/
function categorizeCountries(keyword) {

  if (keyword == 'land') {
      console.log(countries.filter((country) => country.endsWith('land')))
  } else if (keyword == 'way') {
      console.log(countries.filter((country) => country.endsWith('way')))
  } else if (keyword =='en') {
      console.log(countries.filter((country) => country.endsWith('en')))
  } else {
      console.log('Country does not Exists')
  }

}
categorizeCountries('land')
categorizeCountries('way')
categorizeCountries('en')

/*Create a function which return an array of objects, which is the letter 
and the number of times the letter use to start with a name of a country.*/
function countCountriesByFirstLetter(countries) {
  const result = {};
  countries.forEach((country) => {
    const firstLetter = country[0].toUpperCase();
    if (result[firstLetter]) {
      result[firstLetter]++;
    } else {
      result[firstLetter] = 1;
    }
  });
  return Object.entries(result).map(([letter, count]) => ({ letter, count }));
}
console.log(countCountriesByFirstLetter(countries));


/*Declare a getFirstTenCountries function and return an array of ten countries. 
Use different functional programming to work on the countries.js array/*


/*Declare a getLastTenCountries function which which returns the last ten 
countries in the countries array./*


/*Find out which letter is used many times as initial for a country name 
from the countries array (eg. Finland, Fiji, France etc)*/
function countInitialLetters(countries) {
  const counts = {}
  for (let i = 0; i < countries.length; i++) {
    const initial = countries[i][0]
    if (counts[initial]) {
      counts[initial]++
    } else {
      counts[initial] = 1
    }
  }
  return counts
}

console.log(countInitialLetters(countries))




//Exercises: Level 3
/*Try to develop a program which calculate measure of central tendency 
of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). 
In addition to those measures find the min, max, count, percentile, and frequency distribution 
of the sample. You can create an object called statistics and create all the functions which do 
statistical calculations as method for the statistics object. Check the output below.*/

const statistics = {
  ages: [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26],
  
  count() {
    return this.ages.length;
  },
  
  sum() {
    return this.ages.reduce((accu,current) => accu + current);
  },
  
  min() {
    return Math.min(...this.ages);
  },
  
  max() {
    return Math.max(...this.ages);
  },
  
  range() {
    return this.max() - this.min();
  },
  
  mean() {
    return (this.sum() / this.count()).toFixed(1);
  },
  
   median() {
    const sortedAges = this.ages.sort((a,b) => a - b);
    const middleIndex = Math.floor(sortedAges.length /2);
    if (sortedAges.length %2 ===0) {
      return ((sortedAges[middleIndex] + sortedAges[middleIndex-1])/2).toFixed(1);
    } else {
      return sortedAges[middleIndex];
    }
   },
   
   mode() {
     let modeObj = {};
     let maxFrequency =0;
     let modes = [];
     for (let i=0; i<this.ages.length; i++) {
       if (!modeObj[this.ages[i]]) modeObj[this.ages[i]] =0;
       modeObj[this.ages[i]]++;
       if (modeObj[this.ages[i]] > maxFrequency) {
         modes = [this.ages[i]];
         maxFrequency = modeObj[this.ages[i]];
       } else if (modeObj[this.ages[i]] === maxFrequency) {
         modes.push(this.ages[i]);
       }
     }
     if (modes.length ===1) {
       return {mode: modes[0], count: maxFrequency};
     } else {
       return {modes: modes.sort((a,b) => a-b), count: maxFrequency};
     }
   },
   
   var() {
     const mean = this.mean();
     const variance = this.ages.reduce((accu,current) => accu + Math.pow(current-mean ,2),0);
     return (variance / (this.count()-1)).toFixed(1);
   },
   
   std() {
     return Math.sqrt(this.var()).toFixed(1);
   },
   
   freqDist() {
     let freqDistArr = [];
     let uniqueAges = [...new Set(this.ages)];
     for (let i=0; i<uniqueAges.length; i++) {
       let frequency = this.ages.filter(age => age === uniqueAges[i]).length;
       freqDistArr.push([frequency/this.count()*100 ,uniqueAges[i]]);
     }
     freqDistArr.sort((a,b) => b[0] - a[0]);
     return freqDistArr.map(arr => [arr[0].toFixed(1), arr[1]]);
   },
   
   describe() {
     console.log(`Count: ${this.count()}
Sum: ${this.sum()}
Min: ${this.min()}
Max: ${this.max()}
Range: ${this.range()}
Mean: ${this.mean()}
Median: ${this.median()}
Mode: ${JSON.stringify(this.mode())}
Variance: ${this.var()}
Standard Deviation: ${this.std()}
Frequency Distribution: ${JSON.stringify(this.freqDist())}`);
   }
}

console.log('Count:', statistics.count()); //25
console.log('Sum:', statistics.sum()); //744
console.log('Min:', statistics.min()); //24
console.log('Max:', statistics.max()); //38
console.log('Range:', statistics.range()); //14
console.log('Mean:', statistics.mean()); //30
console.log('Median:',statistics.median()); //29
console.log('Mode:', statistics.mode()); //{"mode":26,"count":5}
console.log('Variance:',statistics.var()); //17.5
console.log('Standard Deviation:', statistics.std()); //4.2
console.log('Variance:',statistics.var()); //17.5
console.log('Frequency Distribution:',statistics.freqDist()) //[(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
//console.log(statistics.describe())



const statistics1 = {
  data: [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26],
  //data: [],
  
  // Method to set the data
  setData: function(arr) {
    this.data = arr;
  },
  
  // Method to calculate the count
  count: function() {
    return this.data.length;
  },
  
  // Method to calculate the sum
  sum: function() {
    return this.data.reduce((total, num) => total + num, 0);
  },
  
  // Method to calculate the minimum value
  min: function() {
    return Math.min(...this.data);
  },
  
  // Method to calculate the maximum value
  max: function() {
    return Math.max(...this.data);
  },
  
  // Method to calculate the range
  range: function() {
    return this.max() - this.min();
  },
  
  // Method to calculate the mean
  mean: function() {
    return this.sum() / this.count();
  },
  
  // Method to calculate the median
  median: function() {
    const sortedData = this.data.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);
    
    if (sortedData.length % 2 === 0) {
      return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
      return sortedData[middleIndex];
    }
  },
  
  // Method to calculate the mode
  mode: function() {
    const counts = {};
    
    for (let i = 0; i < this.data.length; i++) {
      if (counts[this.data[i]] === undefined) {
        counts[this.data[i]] = 1;
      } else {
        counts[this.data[i]]++;
      }
    }
    
    let mode = null;
    let maxCount = 0;
    
    for (const num in counts) {
      if (counts[num] > maxCount) {
        mode = Number(num);
        maxCount = counts[num];
      }
    }
    
    return { mode: mode, count: maxCount };
  },
  
  // Method to calculate the variance
  var: function() {
    const mean = this.mean();
    const squaredDifferences = this.data.map(num => (num - mean) ** 2);
    const variance = squaredDifferences.reduce((total, num) => total + num, 0) / this.count();
    return variance;
  },
  
  // Method to calculate the standard deviation
  std: function() {
    return Math.sqrt(this.var());
  },
  
  // Method to calculate the frequency distribution
  freqDist: function() {
    const counts = {};
    
    for (let i = 0; i < this.data.length; i++) {
      if (counts[this.data[i]] === undefined) {
        counts[this.data[i]] = 1;
      } else {
        counts[this.data[i]]++;
      }
    }
    
    const freqDist = [];
    
    for (const num in counts) {
      freqDist.push([counts[num] / this.count() * 100, Number(num)]);
    }
    
    freqDist.sort((a, b) => b[0] - a[0]);
    
    return freqDist;
  },
  
  // Method to print the descriptive statistics
  describe: function() {
    return {
      count: this.count(),
      sum: this.sum(),
      min: this.min(),
      max: this.max(),
      range: this.range(),
      mean: this.mean(),
      median: this.median(),
      mode: this.mode(),
    }
  }
}

console.log('Count:', statistics1.count()); //25
console.log('Sum:', statistics1.sum()); //744
console.log('Min:', statistics1.min()); //24
console.log('Max:', statistics1.max()); //38
console.log('Range:', statistics1.range()); //14
console.log('Mean:', statistics1.mean()); //30
console.log('Median:',statistics1.median()); //29
console.log('Mode:', statistics1.mode()); //{"mode":26,"count":5}
console.log('Variance:',statistics1.var()); //17.5
console.log('Standard Deviation:', statistics1.std()); //4.2
console.log('Variance:',statistics1.var()); //17.5
console.log('Frequency Distribution:',statistics1.freqDist())
/**
 * Promises
 * 
A Promise is a way to handle asynchronous operations in JavaScript. 
It allows handlers with an asynchronous action's eventual success value 
or failure reason

A Promise is in one of these states:
    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation completed successfully.
    rejected: meaning that the operation failed.

The Fetch API provides an interface for fetching resources (including 
across the network).

Async and await is an elegant way to handle promises. 

 */
//Callbacks
const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback)



  const doSomething2 = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(false, skills)
    }, 2000)
  }
  
  doSomething2((err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  })



  //Promise constructor
  /*   syntax
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})
*/

//settled with resolve
// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['NODE', 'EXPRESS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))


//settled with reject.
// Promise
const doPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.includes('Node')) {
        resolve('fullstack developer')
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise1
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))



    //Fetch API
    //promise
/*    
    const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens
*/

//async and await
const fetchData = async () => {
    try {
      const url = 'https://example.com/countries'
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData()



/*   
Async and Await
The word async in front of a function means that function will return a promise.
 To access the value from the promise, we will use the keyword await.
 */

 const square = async function (n) {
    return n * n
  }
  
  const calculateSquare = async function () {
    const value = await square(2)
    console.log(value)
  }
  
  calculateSquare()
  
  

 // Exercises: Level 1
/*Read the countries API using fetch and print the name of country, 
capital, languages, population and area.*/
const countriesAPI = 'https://restcountries.com/v2/all'
/*
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(`Name: ${country.name}`)
      console.log(`Capital: ${country.capital}`)
      console.log(`Languages: ${country.languages.map(lang => lang.name).join(', ')}`)
      console.log(`Population: ${country.population}`)
      console.log(`Area: ${country.area}`)
    })
  })
  .catch(error => console.error(error))
*/



//Exercises: Level 2
//Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

/*
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(cat => {
      console.log(cat);
    });
  })
  .catch(error => console.error(error));
  */



fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    let catNames = [];
    data.forEach(cat => {
      catNames.push(cat.name);
    });
    console.log(catNames);
  })
  .catch(error => console.error(error));




//Exercises: Level 3
//Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    let totalWeight = 0;
    let count = 0;
    data.forEach(cat => {
      if (cat.weight.metric) {
        totalWeight += parseInt(cat.weight.metric.split(' - ')[0]);
        count++;
      }
    });
    const averageWeight = totalWeight / count;
    console.log(`The average weight of a cat in metric units is ${averageWeight} kg`);
  })
  .catch(error => console.error(error));




//Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    // Sort countries by area in descending order
    const sortedCountries = data.sort((a, b) => b.area - a.area)

    // Get the top 10 largest countries
    const largestCountries = sortedCountries.slice(0, 10)

    // Log the name and area of each country to the console
    largestCountries.forEach(country => {
      console.log(`${country.name}: ${country.area} km²`)
    })
  })
  .catch(error => console.error(error))


/*Read the countries api and count total number of languages in the 
world used as officials.

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    let languages = [];
    data.forEach(country => {
      country.languages.forEach(language => {
        if (language.hasOwnProperty('official') && language.official) {
          if (!languages.includes(language.name)) {
            languages.push(language.name);
          }
        }
      });
    });
    console.log(`Total number of languages used as officials in the world is ${languages.length}`);
  })
  .catch(error => console.error(error));
*/


fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    let languages = [];
    data.forEach(country => {
      country.languages.forEach(language => {
        if (!languages.includes(language.name)) {
          languages.push(language.name);
        }
      });
    });
    console.log(`Total number of languages in the world is ${languages.length}`);
  })
  .catch(error => console.error(error));




fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    let languages = new Set();
    data.forEach(country => {
      country.languages.forEach(language => {
        if (!languages.has(language.name)) {
          languages.add(language.name);
        }
      });
    });
    console.log(`Total number of unique languages in the world is ${languages.size}`);
  })
  .catch(error => console.error(error));


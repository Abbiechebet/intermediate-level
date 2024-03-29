/**
 * Console Object Methods  >>>> to show output on the browser console
 
 console.log(), 
 document.write() >>> to show output on the browser document(view port)
 
 Both methods used only for testing and debugging purposes.

 or 
 document.getElementById.>> used when we like to interact with DOM try using JavaScript.

 console.log() >Showing output on browser console
               >Substitution
               >CSS
 console.warn()   ..... give warning on browse
 console.error()  ..... shows an error messages.    
 console.table()  .....  display data as a table on the console
 console.time() / console.timeEnd() .....   the browser will output the time, in milliseconds, that elapsed since the timer was started. 
 console.info() ........ It displays information message on browser console
 console.assert()...... methods writes an error message to the console if the assertion is false.
 Console.group() ...... can help to group different log groups. 
 console.count()
It prints the number of times the console.count() is called. It takes a string label parameter. 
It is very helpful to count the number of times a function is called
console.clear() ...... cleans the browser console.

 */
 console.log('%d %s of JavaScript', 30, 'Days')
 //30 Days of JavaScript

 console.log(
    '%c30 Days%c %cOf%c %cJavaScript',
    'color:green',
    '',
    'color:red',
    '',
    'color:yellow'
  )

  console.warn(
    '%cYou are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!' , 'color:yellow',
  )

  console.error('This is an error message')

  const names = ['Asabeneh', 'Brook', 'David', 'John']
  console.table(names)

  const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  console.table(user)

  const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)

  const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(users)

  const countriesB = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  
  console.time('forEach loop')
  countriesB.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')  

  console.time('Regular for loop')
  for (let i = 0; i < countriesB.length; i++) {
    console.log(countriesB[i][0], countriesB[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countriesB) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')

  console.time('While loop')
  let i = 0;
  while ( i < countriesB.length) {
    console.log(countriesB[i][0], countriesB[i][1]);
    i++;
  }
  console.timeEnd('While loop')
  


  console.info('30 Days Of fullStack challenge might be released')

  console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

const names2 = ['Asabeneh', 'Brook', 'David', 'John']
const countries2 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user2 = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users2 = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names2)
console.groupEnd()

console.group('Countries')
console.log(countries2)
console.groupEnd()

console.group('Users')
console.log(user2)
console.log(users2)
console.groupEnd()

const func = () => {
    console.count('Function has been called')
  }
  func()
  func()
  func()

  //console.clear()
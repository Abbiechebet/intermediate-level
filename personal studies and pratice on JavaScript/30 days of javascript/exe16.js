/**
 * JSON
 * 
 JSON stands for JavaScript Object Notation. 
 The JSON syntax is derived from JavaScript object notation syntax, 
 but the JSON format is text or string only.
 JSON is a light weight data format for storing and transporting. 
 JSON is mostly used when data is sent from a server to a client
 
 Converting JSON to JavaScript Object
To change the JSON to an object we parse the JSON using JSON.parse().
To change the object to JSON we use JSON.stringify().

Using a reviver function with JSON.parse()
To use the reviver function as a formatter, we put the keys we want to format



 */

const usersText = `{
        "users":[
          {
            "firstName":"Asabeneh",
            "lastName":"Yetayeh",
            "age":250,
            "email":"asab@asb.com"
          },
          {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
          },
          {
          "firstName":"Lidiya",
          "lastName":"Tekle",
          "age":28,
          "email":"lidiya@lidiya.com"
          }
        ]
        
}`
// const usersObj = JSON.parse(usersText, undefined, 4)
// console.log(usersObj)

          //Using a reviver function with JSON.parse()
const usersObj = JSON.parse(usersText, (key, value) => {
    let newValue =
      typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
  })
  console.log(usersObj)


/*
Converting Object to JSON   ( JSON.stringify())
The stringify method takes one required parameter and two optional parameters. 
The replacer is used as filter and the space is an indentations.
 If we do not want to filter out any of the keys from the object we can just pass undefined.

JSON.stringify(obj, replacer, space)
 */

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
  const txt = JSON.stringify(users, undefined, 4)
  console.log(txt) 
  // text means JSON- because json is a string form of an object.


/*
Using a Filter Array with JSON.stringify
use the replacer as a filter. The user object has long list of keys but 
we are interested only in few of them
*/

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 250,
    isLoggedIn: false,
    points: 30
  }
  
  const txtA = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
  console.log(txtA)





//Exercises Level 1
//Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const fullstack = JSON.stringify(skills, undefined, 4)
console.log(fullstack) 


//Stringify the age variable
let age = 250;
const num = JSON.stringify(age)
console.log(num) 


//Stringify the isMarried variable
let isMarried = true
const boolean = JSON.stringify(isMarried)
console.log(boolean) 


//Stringify the student object firstName, lastName and skills properties
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
const stude = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(stude) 


//Exercises Level 3
//Parse the txtB JSON to object.
const txtB = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`

const studeTxt = JSON.parse(txtB, 4)
console.log(studeTxt)



//Find the user who has many skills from the variable stored in txt.
let maxSkills = -Infinity;
let userWithMaxSkills = null;

const studeUsers = JSON.parse(txtB);

for (const user in studeUsers) {
  if (studeUsers.hasOwnProperty(user)) {
    const skillsCount = studeUsers[user].skills.length;
    if (skillsCount > maxSkills) {
      maxSkills = skillsCount;
      userWithMaxSkills = user;
    }
  }
}

console.log(`The user who has many skills is ${userWithMaxSkills}.`);

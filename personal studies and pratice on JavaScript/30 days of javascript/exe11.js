/***
 *  Destructuring and Spreading
 
Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

If we like to skip on of the values in the array we use additional comma. The comma helps to 
omit the value at that specific index

We can use default value in case the value of array for that index is undefined:

We can not assign variable to all the elements in the array. We can destructure few of the 
first and we can get the remaining as array using spread operator(...).

When we destructure the name of the variable we use to destructure should be exactly the same 
as the key or property of the object. See the example below.

0720672300 Clement
*/

//Exercises: Level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTML', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTML', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTML', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTML', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTML', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTML', 'CSS', 'JS'],
  age:20
}
]

//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp)

//Destructure and assign the elements of countries array to fin, est, sw, den, nor
//const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const [fin, est, sw, den, nor] = countries;
console.log(countries)

//Destructure the rectangle object by its properties or keys.
  let { width, height, area, perimeter } = rectangle
  console.log(width, height, area, perimeter) 


 // Exercises: Level 2
//Iterate through the users array and get all the keys of the object using destructuring
 for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
  }

  
  for (const {name, scores, skills, age} of users){
    console.log(name, scores, skills, age)
  }
  

  
users.forEach(({name, scores, skills, age}) => {
    console.log(name);
    console.log(scores);
    console.log(skills);
    console.log(age);
  });

//Find the persons who have less than two skills
const result = users.filter(user => user.skills.length < 2);
console.log(result);



//Exercises: Level 3
/*A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
Destructure the following array name to name, skills array to skills, scores array to scores, 
JavaScript score to jsScore and React score to reactScore variable in one line.*/
  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  const [studName, skills, scores] = student;
const [htmScore, cssScore, jsScore, reactScore] = scores;
  console.log(studName, skills, jsScore, reactScore)

  //David [ 'HTM', 'CSS', 'JS', 'React' ] 90 95

//Write a function called convertArrayToObject which can convert the array to a structure object.
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]
    
    function convertArrayToObject(students) {
        let result = []
        for (let i = 0; i < students.length; i++) {
            let obj = {}
            obj.name = students[i][0]
            obj.skills = students[i][1]
            obj.scores = students[i][2]
            result.push(obj)
        }
        return result
    }
    
    console.log(convertArrayToObject(students))
    
/*    console.log(convertArrayToObject(students))
    [
      {
        name: 'David',
        skills: ['HTM','CSS','JS','React'],
        scores: [98,85,90,95]
      },
      {
        name: 'John',
        skills: ['HTM','CSS','JS','React'],
        scores: [85, 80,85,80]
      }
    ]
*/



//Copy the student object to newStudent without mutating the original object. In the new object add the following ?
const studentD = {
    name: 'David',
    skills: ['HTM','CSS','JS','React'],
    scores: [98,85,90,95]
  };
  
  const newStudent = {...studentD};
  console.log(newStudent)

  const newStudentD = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
  console.log(newStudentD.name)
  console.log(newStudentD.age)
  console.log(newStudentD.skills)

//Add Bootstrap with level 8 to the front end skill sets
newStudentD.skills.frontEnd.push({skill: 'Bootstrap', level: 8});
console.log(newStudentD.name)
console.log(newStudentD.age)
console.log(newStudentD.skills)

//Add Express with level 9 to the back end skill sets
newStudentD.skills.backEnd.push({skill: 'Express', level: 9});
console.log(newStudentD.name)
console.log(newStudentD.age)
console.log(newStudentD.skills)

//Add SQL with level 8 to the data base skill sets
newStudentD.skills.dataBase.push({skill: 'SQL', level: 8});
console.log(newStudentD.name)
console.log(newStudentD.age)
console.log(newStudentD.skills)

//Add SQL without level to the data science skill sets*
newStudentD.skills.dataScience.push('SQL');
console.log(newStudentD.name)
console.log(newStudentD.age)
console.log(newStudentD.skills)

console.log(newStudentD)
   
//The copied object output should look like this:

   /* {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        {skill: 'HTML',level: 10},
        {skill: 'CSS',level: 8},
        {skill: 'JS',level: 8},
        {skill: 'React',level: 9},
        {skill: 'BootStrap',level: 8}
      ],
      backEnd: [
        {skill: 'Node',level: 7},
        {skill: 'GraphQL',level: 8},
        {skill: 'Express',level: 9}
      ],
      dataBase: [
        { skill: 'MongoDB',level: 7.5},
        { skill: 'SQL',level: 8}
      ],
      dataScience: ['Python','R','D3.js','SQL']
    }
  }
  */
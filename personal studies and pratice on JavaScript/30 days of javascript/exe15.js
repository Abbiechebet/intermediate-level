/**
 * Classes
 * 
 The class defines attributes and the behavior of the object, while 
 the object, on the other hand, represents the class.

The get method allow us to access value from the object
The setter method allow us to modify the value of certain properties. 

Static method
The static keyword defines a static method for a class. 
Static methods are not called on instances of the class. 
Instead, they are called on the class itself

The static methods are methods which can be used as utility functions.

Inheritance
Using inheritance we can access all the properties and the methods of the parent class.

Overriding methods
If we want to customize, the methods and if we want to add extra 
properties, we need to use the constructor function the child 
class too. 
Inside the constructor function we call the super() function to 
access all the properties from the parent class.


 class Person {
    constructor(firstName, lastName, age, country, city) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  */

  class Person {

    constructor(
      firstName = 'Asabeneh',
      lastName = 'Yetayeh',
      age = 250,
      country = 'Finland',
      city = 'Helsinki'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
      }
      get getScore() {
        return this.score
      }
      get getSkills() {
        return this.skills
      }
      set setScore(score) {
        this.score += score
      }
      set setSkill(skill) {
        this.skills.push(skill)
      }
      getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
          this.skills.length > 0 &&
          this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''
    
        let info = `${fullName} is ${this.age}. He lives ${this.
            city}, ${this.country}. ${formattedSkills}`

        return info
      }


  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }

}

console.log(Person.favoriteSkill())
console.log(Person.showDateTime())



/*
  const person1 = new Person()
  const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person1)
  console.log(person2)

  person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.getScore)
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)

console.log(person1.getPersonInfo())
console.log(person2.getPersonInfo())
  
 
console.log(person1.getScore) // We do not need parenthesis to call a getter method
  console.log(person2.getScore)
  
  console.log(person1.getSkills)
  console.log(person2.getSkills)


console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)
*/


  class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
      super(firstName, lastName, age, country, city)
      this.gender = gender
    }
  
    saySomething() {
      console.log('I am a child of the person class')
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
      let pronoun = this.gender == 'Male' ? 'He' : 'She'
  
      let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
  }
  
  const s1 = new Student(
    'Asabeneh',
    'Yetayeh',
    250,
    'Finland',
    'Helsinki',
    'Male'
  )
  const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
  s1.setScore = 1
  s1.setSkill = 'HTML'
  s1.setSkill = 'CSS'
  s1.setSkill = 'JavaScript'
  
  s2.setScore = 1
  s2.setSkill = 'Planning'
  s2.setSkill = 'Managing'
  s2.setSkill = 'Organizing'
  
  console.log(s1)
  
  console.log(s1.saySomething())
  console.log(s1.getFullName())
  console.log(s1.getPersonInfo())
  
  console.log(s2.saySomething())
  console.log(s2.getFullName())
  console.log(s2.getPersonInfo())



  //Exercises
//Exercises Level 1
//Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  
    getDetails() {
      return `This animal is a ${this.color} ${this.name} that is ${this.age} years old and has ${this.legs} legs.`;
    }
  
    makeSound() {
      return "The animal makes a sound.";
    }
  }

const pet = new Animal("pet", 3, "brown", 4);
console.log(pet.getDetails()); // This animal is a brown dog that is 3 years old and has 4 legs.
console.log(pet.makeSound()); // The animal makes a sound.


//Create a Dog and Cat child class from the Animal Class.
 class Dog extends Animal {
    constructor(name, age, color, legs) {
      super(name, age, color, legs);
    }
  
    bark() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color, legs) {
      super(name, age, color, legs);
    }
  
    meow() {
      console.log(`${this.name} meows.`);
    }
  }
const dog = new Dog("Fido", 3, "brown", 4);
console.log(dog.getDetails());
dog.bark(); 

const cat = new Cat("Whiskers", 3, "grey", 4);
console.log(cat.getDetails());
cat.meow();



//Exercises Level 3
/*Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of 
variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and 
frequency distribution of the sample. You can create a class called Statistics and create all the functions which do 
statistical calculations as method for the Statistics class. Check the output below.

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// you output should look like this
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, 
totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its 
description and expenses is also a set of expenses and its description.
*/
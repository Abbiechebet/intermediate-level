class Human {
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  callName() {
    console.log(this.name, "THE NAME HAS BEEN CALLED");
  }
}

const newHuman = new Human("Adam", 45);
// const newHuman = new Human('Adam', 45, ['farmer', "eating forbidden fruits", 'eve'])
console.log(newHuman)

class Female extends Human {
  constructor(name, age, hobbies) {
    super(name, age, hobbies);
    this.sex = "female";
    this.occupation = "lawyer";
  }
}

// console.log(newHuman)
// newHuman.callName()

const newFemale = new Female("Cherop", 21, [
  "travelling",
  "making new friends",
  "sky diving",
]);
const newFemale2 = new Female("Alonso", 23, [
  "cooking",
  "gym",
  "visiting childrens home",
]);

newFemale.callName();
console.log(newFemale);
console.log(newFemale2);

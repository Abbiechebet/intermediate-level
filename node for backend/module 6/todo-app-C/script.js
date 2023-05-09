class Human{
    constructor(name, age, hobbies){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

callName(){
        console.log(this.name, "THE NAME HAS BEEN CALLED")
    }
}


const newHuman = new Human('Cherop', 20, ['lawyer', 'travelling', 'making new friends'])
//const newHuman = new Human('Cherop', 45)

class Female extends Human{
    constructor(name, age, hobbies){
     super(name, age, hobbies)
        this.sex = 'female';
        this.company = 'Lawfirm';
    } 
}
console.log(newHuman)
newHuman.callName()

const newFemale = new Female('Chirie', 25, ['nurse', 'cooking', 'watching movies'])
const newFemale2 = new Female('Alonso', 23, ['footballer', "gym", 'snooker'])

newFemale.callName()
console.log(newFemale)
console.log(newFemale2)
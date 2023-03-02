//create js object named 'address' that has three properties
//street, city and zipcode using object literal syntax


//    const objectName = {
//     key1 : value1, // key-value pair
//     key2 : value2,
//     key3 : value3,
//    }
//literal notation
// const address1 = {
//     street : 'Tom Mboya',
//     city : 'Nakuru',
//     zipcode : 20200,
// }
// console.log(address1);


// //constructor notation
// const address2 = new Object();
//     address2.street = 'Moi Avenue';
//     address2.city = 'Nairobi';
//     address2.zipcode = 450100;
// console.log(address2);-

//constructor notation 2
function address(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}
const address3 = new address("Golf", "Nakuru", 30400);
const address4 = new address("Prisons", "Nakuru", 30200);

console.log(address3);
console.log(address4);

// using factory method
function houseAddress(street, city, zip){
    return{
        street : street,
        city : city,
        zip : zip,
    }
}
const address5 = new houseAddress("sportsview", "Kasarani", 10100);
const address6 = new houseAddress("milimani", "Kericho", 20200);
console.log(address5);
console.log(address6);

//NESTED OBJECTS
const student = {
    firstName : 'Chimatara',
    lastName : 'Kalu',
    age : 18,
    jambScores : {
        MTH : 85,
        ENG : 90,
        PHY : 95,
        CHM : 90,

    }
}
console.log(student);

let chemScore = student.CHM; //Using dot notation
console.log('chemScore is ' + chemScore );

let mathScore = student['jambScores']['MTH'];
console.log('math score is ' + mathScore );

//modifying created objects
student.course = 'Computer Science';
console.log(student);

student.jambScores.BIO = 89;
console.log(student);

// constuctor function / method

function Student(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
const chioma = new Student('Chioma', 'Ibeh', 20);
const omodibo = new Student('Omodibo', 'Vani', 22);

 function JambScores(phy, chm, bio, govt, econs, eng, mth, lit, comm){
    this.PHY = phy;
    this.CHM = chm;
    this.BIO = bio;
    this.GOVT = govt;
    this.ECONS = econs;
    this.ENG = eng;
    this.MTH = mth;
    this.LIT = lit;
    this.COMM = comm;
 }
 console.log(chioma);
 chioma.JambScores = new JambScores(80, 70, 67, 0, 0, 0, 95, 90, 0);
 
 console.log(chioma);
 console.log(chioma.JambScores.MTH);


 //assignment: create this using the factory method

function Learner(firstName, lastName, age){
    return{
        firstName : firstName,
        lastName : lastName,
        age : age,
    }
    }
    const gichora = new Learner('Samantha', 'Gichora', 23);

    function kcseScores(phy, chm, bio, govt, econs, eng, mth, lit, comm){
        return{
            PHY : phy,
            CHM : chm,
            BIO : bio,
            GOVT : govt,
            ECONS : econs,
            NG : eng,
            MTH : mth,
            LIT : lit,
            COMM : comm,
        }
        }
        gichora.kcseScores = new kcseScores(80, 70, 67, 0, 0, 0, 95, 90, 0);
        
        console.log(gichora);
        console.log(kcseScores.MTH);//undefined
        console.log(gichora.kcseScores.MTH);



 //Value vs Reference Types

 //Primitive Data Types - are passed by vaues 
 //(string, number, boolean, null, undefined)

 //Non-Primitive Data Types - are passed by reference 
 //(arrays, objects, functions)  
   
 let a = 15;
 let b = 'Nigeria';
 
 let c = a;
 let d = b;
 console.log(c);
 console.log(d);

 a = 20;
 b = 'Kenya';

 console.log(a, b, c, d);

 //Reference
 let x = {value: 10}
 x.value = 20;
 console.log('value of x is ' + x);
 console.log(x);

 y = x; // y is {value: 20}
 console.log(y);

 x.value = 40;
 console.log('y is ' + y);
 console.log(y);
 

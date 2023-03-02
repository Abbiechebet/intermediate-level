/**
 * Objects are collections of key-value pairs that allows you to 
  encapsulate properties that are highly related inside of an object.
 */


//Function(verb) in an object is called a method(verb), is a value of an 
//object property, and therefore a task that an object can perform


/**variable in an object is called a property(noun)
A property is the association between a name (key) and value within an
object, and it can contain any datatype. A property generally refers 
to the characteristic of an object.
*/

//CAR
/**
 * PROPERTIES - brand, color, number of tyres, num of doors,isAutomatic
 * FUNCTIONALITIES - move forward, reverse, accelerate, play music,
   stop, start 
 */

   //how we can create an object
   /**
    * literal notation - uses curly brackets{}
          const objectLiteral = {}
    
    * constructor notation- uses new keyword
          const objectConstructor = new Object()
    */

   //literal notation
   
//    const objectName = {
//     key1 : value1, // key-value pair
//     key2 : value2,
//     key3 : value3,
//    }

//property declaration
const Car1 = {
    brand : 'Porshe',
    color : 'black',
    numberOfTyres : 4,
    numberOfDoors : 4, 
    isAutomatic : true,
    currentDistance : 0,
    //functionality declaration
    displayNumberOfTyres : function(){
        return this.numberOfTyres;
    },
    moveForward : function() {
        this.currentDistance++;
        return this.currentDistance;
    }
   }
   console.log(Car1);

//constructor notation
//syntax
// const objectName = new <what you want to create an instance of >
//new - used when you are creating an instance of a function
const Car2 = new Object();
    Car2.brand = 'Mercedes Benz',
    Car2.color = 'white',
    Car2.numberOfTyres = 4,
    Car2.numberOfDoors = 4, 
    Car2.isAutomatic = false,

    Car2.displayNumberOfTyres = function() {
        return this.numberOfTyres;
    }
    console.log(Car2);

    //TODO: Accessing Object Properties
    /**
     * Dot notation
     */
    console.log('Brand of car one is ' + Car1.brand);
    console.log('Brand of car two is ' + Car2.brand);

    /**
     * bracket notation
     */
    console.log('Color of car one is ' + Car1['color']);
    console.log('Color of car two is ' + Car2['color']);


    //TODO: //accessing object methods
    //syntax = objectName.method();

    console.log('The number of tyres in car one are ' + Car1.displayNumberOfTyres());
    console.log('The number of tyres in car one are' + Car1.numberOfTyres);

    console.log(Car1.moveForward());

    //constructor notation can be used as a template or blueprint for creating new

    //TOYOTA
    //Avensis, Corolla, Rav4, Camry, Highlander
    //common properties and methods a Toyota Car ha
    /**
     * properties - numberOfTyres, brand, numberOfDoors, numberOfSpareTyres, isAutomatic
     * methods - reverse, move forward, accelerate, stop, start
     */
function Toyota( model, year, numberOfTyres, isAutomatic, currentDistance){
    this.numberOfTyres = numberOfTyres;
    this.brand = 'Toyota';
    this.model = model;
    this.year = year;
    this.isAutomatic = isAutomatic;
    this.currentDistance = currentDistance;
    this. accelerate = function() {
        this.currentDistance +=5;
    },
    this.displayCurrentDistance = function(){
        return this.currentDistance;
    }
}
let camry = new Toyota('camry', '2020', 5, true, 0)
console.log(camry);

let camry2007 = new Toyota('camry', '2007', 5, false, 1000)
console.log(camry2007);

let rav42022 = new Toyota('Rav4', '2021', 4, true, 20)
console.log(rav42022);

console.log(camry.currentDistance);
console.log(camry2007.currentDistance);
console.log(rav42022.currentDistance);

camry.accelerate();
camry2007.accelerate();
rav42022.accelerate();

console.log('After acceleration');
console.log(camry.displayCurrentDistance());
console.log(camry2007.displayCurrentDistance());
console.log(rav42022.displayCurrentDistance());



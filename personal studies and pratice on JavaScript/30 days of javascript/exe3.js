/**
 * Booleans, Operators, Date
 */

//Exercises: Level 1
/**Declare firstName, lastName, country, city, age, isMarried, year 
 variable and assign value to it and use the typeof operator to check 
 different data types.*/
 let firstName = 'Allison';
 let lastName = 'Sirgoi';
 let country = 'Kenya';
 let city = 'Nakuru';
 let age = 90;
 let isMarried = true;
 let yr = 2023;
 console.log(typeof firstName);
 console.log(typeof lastName)
 console.log(typeof country)
 console.log(typeof city)
 console.log(typeof age)
 console.log(typeof isMarried)
 console.log(typeof yr)
 
 //Check if type of '10' is equal to 10
 console.log(typeof '10' == 10)
 
 //Check if parseInt('9.8') is equal to 10
 console.log(parseInt('9.8') == 10)
 
 //Boolean value is either true or false.
 //Write three JavaScript statement which provide truthy value.
 // let numbers = (1,-5,10);
 // let strings = ('truthy');
 // let boolean =true;
 console.log(1 > 0);
 console.log(3 === 3);
 console.log(5 !== '5');
 //Write three JavaScript statement which provide falsy value.
 // - 0
 // - 0n
 // null
 // let undefined = undefined;
 // let nan = NaN;
 // let falsy = false;
 // let emptyString= ('', "", ``);
 console.log(5 != '5');
 console.log(3 >= 6);
 console.log(10 < 1);
 
 //Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
 console.log('truthy and falsy')
 console.log(4 > 3)       //true
 console.log(4 >= 3)      //true
 console.log(4 < 3)       //false
 console.log(4 <= 3)      //false
 console.log(4 == 4)      //true
 console.log(4 === 4)     //true
 console.log(4 != 4)      //false
 console.log(4 !== 4)     //false
 console.log(4 != '4')    //false
 console.log(4 == '4')    //true
 console.log(4 === '4')   //false
 
 
 //Find the length of python and jargon and make a falsy comparison statement.
 console.log('jargon'.length, 'python'.length)
 console.log('jargon'.length != 'python'.length)
 
 
 //Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
 console.log(4 > 3 && 10 < 12)    //true
 console.log(4 > 3 || 10 < 12)    //true
 console.log(4 > 3 || 10 > 12)    //true
 console.log(!(4 > 3))            //false
 console.log(!(4 < 3))            //true
 console.log(!(false))            //true
 console.log(!(4 > 3 && 10 < 12)) //false
 console.log(!(4 > 3 && 10 > 12)) //true
 console.log(!(4 === '4'))        //true
 
 //There is no 'on' in both dragon and python
 console.log(`There is no 'on' in both dragon and python`)
 //console.log(!(4 > 3 && 10 > 12)) //true
 
 
 //Use the Date object to do the following activities
 //What is the year today?
 console.log(new Date().getFullYear()) 
 //What is the month today as a number?
 console.log(new Date().getMonth()) 
 //What is the date today?
 console.log(new Date().getDate())
 //What is the day today as a number?
 console.log(new Date().getDay())
 //What is the hours now?
 console.log(new Date().getHours())
 //What is the minutes now?
 console.log(new Date().getMinutes())
 //Find out the numbers of seconds elapsed from January 1, 1970 to now.
 console.log(new Date().getTime())
 
 
 
 //Exercises: Level 2
 /*Write a script that prompt the user to enter base and height of the 
 triangle and calculate an area of a triangle (area = 0.5 x b x h). */
 prompt('Enter base: 20 Enter height: 10')
 let area = prompt('area = 0.5 x b x h)', 'The area of the triangle is 100')
 console.log(area)
 
 /**Write a script that prompt the user to enter side a, side b, and side c 
  of the triangle and and calculate the perimeter of triangle 
  (perimeter = a + b + c) */
  prompt('Enter side a: 5 Enter side b: 4 Enter side c: 3')
 let perimeter = prompt(('perimeter = a + b + c'), 'The perimeter of the triangle is 100')
 console.log(perimeter)
 
 /**Get length and width using prompt and calculate an area of rectangle 
  (area = length x width and the perimeter of rectangle 
  (perimeter = 2 x (length + width))*/
  prompt('length = 20, width = 10')
  let areaPerimeter = prompt('perimeter = 2 x (length + width),area = length x width', 'The rectangle\'s area is 200 and it\'s perimeter is 60')
  console.log(areaPerimeter)
 
  /*Get radius using prompt and calculate the area of a circle 
  (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) 
  where pi = 3.14.*/
  prompt('radius = 100')
  let areaCircumference = prompt('area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.', 'The circle\'s area is 31400 and it\'s perimeter is 628')
  console.log(areaCircumference)
 //Calculate the slope, x-intercept and y-intercept of y = 2x -2
 console.log(slope1 = 2)
 //In order to find the x-intercept, the y variable must be set equal to zero
 console.log(x = 1)
 //In order to find the y-intercept, the x variable must be set equal to zero
 console.log(y = -2)
 
 /**Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)*/ 
 console.log(slope2 = 8/4)
 
 //Compare the slope of above two questions.
 console.log (slope1 == slope2)
 
 /*Calculate the value of y (y = x2 + 6x + 9). Try to use different x 
 values and figure out at what x value y is 0.*/
 //y (y = x2 + 6x + 9)
 
 /**Write a script that prompt a user to enter hours and rate per hour. 
  Calculate pay of the person?*/
  prompt('Enter hours: 40 Enter rate per hour: 28')
  let pay = prompt(40*28, 'Your weekly earning is 1120')
  console.log(pay)
 
 /*If the length of your name is greater than 7 say, your name is long 
 else say your name is short.*/
 let myName = 'Abigael';
 myName.length <= 7 
 ?console.log(`${myName} my name is short`)
 :console.log(`${myName} my name is long`)
 
 //Compare your first name length and your family name length and you should get this output.
 let fName = 'Joy'
 let lName = 'Bett'
 fName.length > lName.length
 ?console.log(`Your first name, ${fName} is longer than your family name ${lName}`)
 :console.log(`Your first name, ${fName} is shorter than your family name ${lName}`)
 
 //Declare two variables myAge and yourAge and assign them initial values
 let myAge = 250
 let yourAge = 25
 console.log('I am 225 years older than you.')
 
 /**Using prompt get the year the user was born and if the user is 18 or 
  above allow the user to drive if not tell the user to wait a certain 
  amount of years.*/
  prompt('Enter birth year: 1995')
  let age1 = prompt('above 18','You are 25. You are old enough to drive')
  console.log(age1)
 
  prompt('Enter birth year: 2005')
  let age2 = prompt('below 18', 'You are 15. You will be allowed to drive after 3 years.')
  console.log(age2)
 
 /**Write a script that prompt the user to enter number of years. 
 Calculate the number of seconds a person can live. Assume some one 
 lives just hundred years */
 prompt('Enter number of years you live: 100')
 let live = prompt('You lived 3153600000 seconds.')
 console.log(live)
 
 //1. Create a human readable time format using the Date time object
 const now = new Date()
 const year = now.getFullYear() // return year
 const month = now.getMonth() + 1 // return month(0 - 11)
 const date = now.getDate() // return date (1 - 31)
 const hours = now.getHours() // return number (0 - 23)
 const minutes = now.getMinutes() // return number (0 -59)
 //YYYY-MM-DD HH:mm
 console.log(`${year}/${month}/${date} ${hours}:${minutes}`)
 //DD-MM-YYYY HH:mm
 console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
 //DD/MM/YYYY HH:mm
 console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
 
 
  //Exercises: Level 3
 /** Create a human readable time format using the Date time object. The 
 hour and the minute should be all the time two digits
 (7 hours should be 07 and 5 minutes should be 05 ) */
         //YYY-MM-DD HH:mm eg. 20120-01-02 07:05
         now.toLocaleTimeString('en-US', {
                 year:   'numeric',
                 month:  'numeric',
                 date:   'numeric',
                 hours:   '2-digit',
                 minutes: '2-digit',
             });
             console.log(now)         
 
 
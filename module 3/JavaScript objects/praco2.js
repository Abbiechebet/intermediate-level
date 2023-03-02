const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1,
	},
isVisible: true,
	draw: function(){
		console.log(draw);
	}
}
console.log(circle);

/**
 * Object oriented programming is basically a style of programming where 
we see a program as a collection of objects that talk to each other to
perform some functionality
 */

//factory funtions
function createCircle(){
    const circle = {
     radius: 1,
     location: {
         x: 1,
         y: 1,
     },
 isVisible: true,
     draw: function(){
         console.log(draw)
     }
    }
    return circle;
 }
 function createCircle(radius, location){
    return {
     radius: radius,
     location: location,
     draw: function(){
         console.log(draw)
     }
    }
 }

function createCircle(radius){
   return {
	radius,
	draw: function(){
		console.log(draw)
	}
   }
}

const circle1 = createCircle(1);
console.log(circle1) // { radius: 1, draw: f}
console.log(circle1.draw()) // ‘draw’

const circle2 = createCircle(2);
console.log(circle2) // { radius: 2, draw: f}
console.log(circle2.draw()) // ‘draw’

/**
 * Camel Notation - the first letter of the first word is lowercase, but 
   the first letter of every word after is uppercase
 * Pascal Notation - the first letter of every word should be uppercase
 */

//constructor function
   function Circle(radius){
    this.radius = radius;
    this.draw = function () {
      console.log(draw);
    }
  }
  
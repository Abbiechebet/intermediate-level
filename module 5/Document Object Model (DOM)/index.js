//Accessing the body tag by id
let bodyElement = document.getElementById("container");
console.log(bodyElement);

let everyoneElement = document.getElementById("everyone");
console.log(everyoneElement);

//accessing element using query selector
let container = document.querySelector("#container");
console.log(bodyElement);

let helloDiv = document.querySelector(".hello");
console.log(helloDiv);

//access elements by class name
//can also use indexing for className 
let helloByClassName = document.getElementsByClassName("hello");
console.log(helloByClassName);

//or

let helloByClassName2 = document.querySelectorAll(".hello");
console.log(helloByClassName2);

//access elements by tag name
let buttonElement = document.getElementsByTagName("button");
console.log(buttonElement);


//DOM Manipulation
// let helloElement = document.getElementsByTagName("div")[0];
//  console.log(helloElement)
//  helloElement.innerHTML ="<h2>Good morning Stutern Learners!</h2>";

let helloElement = document.getElementsByTagName("div");
let firstDiv = helloElement[0];
firstDiv.innerText = 'WE ARE STUTERN!!!!!';
firstDiv.style = 'background-color:indigo; color:yellow;padding:10px; font-size:30px;' 

let secondDiv = helloElement[4];
secondDiv.innerText = 'WE ARE STUTERN!!!!!!';
secondDiv.style = 'background-color:indigo; color:yellow; padding:10px; font-size:30px;' 

// let everyoneElem = document.getElementsByTagName("div")[2];
// everyoneElem.innerText = "I hope you all are enjoying JavaScript!"

let everyoneElem = document.getElementsByTagName("div")[3];
everyoneElem.innerHTML = "<h2>DOM is interesting part of JavaScript!</h2>"

//helloElement.style.color = 'green';
helloElement.style.color = 'yellow';
//dot notation - camel casing
helloElement.style.backgroundColor = 'indigo';
//square bracket notation - we use hyphen
//helloElement.style["background-color"] = 'pink';
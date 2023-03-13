//CREATING AN ELEMENT
let paragraphElem = document.createElement('p');
paragraphElem.innerText ='we are celebrating Happy International Women Day'

//APPENDING AN ELEMENT
let body = document.getElementById('element-creation');
//let body = document.querySelector("#element-creation");
body.appendChild(paragraphElem);

//REMOVING AN ELEMENT
//1. Get the element you want to remove
let questionElem = document.querySelector('#question');
//2. Get the parent element(through appending 'body')
body.removeChild(questionElem);


//changing multiple elements
//let holidays = document.querySelectorAll('li');
//let holidays = document.querySelectorAll('.holiday');
let holidays = document.getElementsByClassName('holiday');

//holidays.style.backgroundColor = 'blue';
for(let i = 0; i < holidays.length; i++){
    // holidays[i].style.backgroundColor = "whitesmoke";
    // holidays[i].style.width = "50%";
    // holidays[i].style.color = "orange";
    // holidays[i].style.margin = "10px";
    // holidays[i].style.fontSize = "20px";
    holidays[i].style ='padding: 10px; font-size: 30px; margin: 10px; color: purple; width: 50%; background-color: violet;'
}

//EVENT - is an action that occurs on the wed page.

//adding an event lisener / event handler
let wishButton = document.getElementById("wish-button");

// //method 2
// wishButton.onclick = function () {
//     alert('Wishing you a Happy International Women\'s Day');
// }

// //method 3
// wishButton.addEventListener("click", function (){
//     alert('Wishing you a Happy International Women\'s Day');
// })

const alertMessage = function () {
    alert('Wishing you a Happy International Women\'s Day'); 
}
wishButton.addEventListener("click", alertMessage);


//removing an event listener
let removeEventButton = document.getElementById("remove-event-button");

removeEventButton.addEventListener('click', function(){
    alert("Removed event");
    wishButton.removeEventListener("click", alertMessage);  
}) 


//Accessing the value of what has been clicked

for(let i = 0; i < holidays.length; i++){
    holidays[i].addEventListener('click', function (event){
        console.log(event);
        alert('The holiday clicked on is ' + event.target.innerText);
    })
}

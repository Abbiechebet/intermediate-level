// console.log('Stutern Cohort 1.4');
// document.getElementById("name").innerText= 'Abigael Chebet';
// document.getElementById("wrapper").innerHTML= '<h1>Abbie Bett</h1>';

//function that gets difference between two numbers
function subtract (number1, number2) {
    return number1 - number2;
}
console.log(subtract(20, 5))

//function that multiply two numbers
function multiply (number1, number2) {
    return number1 * number2;
}
console.log(multiply(20, 5))



function sendMessageWithConsole(message) {
    console.log(message);
  }
  sendMessageWithConsole("Hello Mary");
  
  function sendMessageWithAlert(message) {
    alert(message);
  }
  sendMessageWithAlert("Hello Jennifer");
  
  function sendMessageWithConfirm(message) {
    confirm(message);
  }
  sendMessageWithConfirm("Hello Bayo");
  
  function sendMessageWithPrompt(message) {
    prompt(message);
  }
  sendMessageWithPrompt("Hello Joy");
  
  // Simplifying solution using Higher-order functions & Callback functions
  function sendMessageHOF(message, callbackFunction) {
    callbackFunction(message);
  }
  
  sendMessageHOF("Hello Abbie", console.log);
  sendMessageHOF("Hello Amanda", alert);
  sendMessageHOF("Hello Alice", confirm);
  sendMessageHOF("Hello Akinyi", prompt);
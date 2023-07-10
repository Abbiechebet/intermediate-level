const currentDiv = document.querySelector("body");
const newDiv = document.createElement("div");
currentDiv.appendChild(newDiv);


	  const keyPressedElement = document.createElement('input');
      keyCodeElement.placeholder = 'Press any keyboard key';
      newDiv.appendChild(keyPressedElement)
	  const keyCodeElement = document.createElement('div');
      newDiv.appendChild(keyCodeElement)

	  // Add event listener for keydown event
	  document.addEventListener("keydown", function(event) {
		const keyPressed = event.key;
	    //const keyCode = event.keyCode || event.which;
	    const keyCode = event.code;
  
		// Update the textContent of the elements
		keyPressedElement.textContent = 'You Pressed' + keyPressed;
		keyCodeElement.textContent = keyCode;
      })
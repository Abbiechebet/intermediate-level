const wrapper = document.querySelector('.wrapper')
const h1 = document.querySelector('h1')
h1.style =`color:green; text-align:center;` 

const h2 = document.querySelector('h2')
h2.style =`text-align:center; line-height:0px;`

const h3 = document.querySelector('h3')
h3.style =`text-align:center; line-height:0px;`

const main = document.querySelector('.main')
main.style = `width:50%; margin:auto;background-color:#98fb98;`


const input = document.createElement('input');
input.type = 'number';
input.placeholder = 'generate more numbers...';
input.style = `padding:10px; font-size:15px; width:60%; margin-left:80px; border:2px solid green;`

/*
$('input[type="number"]').on('wheel', function(e) {
    $(this).blur();
});

input.addEventListener("mousewheel", function() {
    this.blur();
  });
  */

wrapper.appendChild(input);

const button = document.createElement('button');
button.innerHTML = 'Generate Numbers';
button.style = `background-color:green; padding:10px; font-size:15px; margin-left:20px`
wrapper.appendChild(button);

const table = document.createElement('table');
table.className = 'table';
table.style = `margin-top:20px;`
wrapper.appendChild(table);

function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1 && num !== 0;
}

// function checkInput() {
//     var input = document.getElementById("myInput").value;
//     if (isNaN(input)) {
//       var errorDiv = document.createElement("div");
//       errorDiv.innerHTML = "Input is not a number";
//       errorDiv.style.color = "red";
//       input.parentNode.insertBefore(errorDiv, input);
//       throw new Error("Input is not a number");
//     }
//   }
  
  
function generateNumbers() {
  const number = parseInt(input.value);
  if (isNaN(number)) {
    alert('Please enter a valid number!');
   return;  
  }

  table.textContent = '';
  let row; // Declare row here
  for (let i = 0; i <= number; i++) {
    if (i % 10 === 0) {
      row = document.createElement('tr'); // Assign row here
    }
    const cell = document.createElement('td');
    cell.textContent = i;
    cell.style = `width:100px; height:30px; text-align:center; color:white; 
    font-weight:bold; font-size:30px;`

    if (i % 2 === 0 ) {
      cell.style.backgroundColor = 'green';
    } else {
      cell.style.backgroundColor = 'yellow';
    }
    
    if (isPrime(i)) {
      cell.style.backgroundColor = 'red';
    }
    
    row.appendChild(cell);
    table.appendChild(row);
  }
}

button.addEventListener('click', generateNumbers); 
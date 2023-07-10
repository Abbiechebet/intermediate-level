const wrapper = document.querySelector('.wrapper');
wrapper.style = `width: 50%; margin: auto; font-family: serif; background-color:pink;` 

const h1 = document.querySelector('h1');
h1.style = 'text-align:center;font-weight:bold;'

const h2 = document.querySelector('h2');
h2.style = 'text-align:center; font-weight:light; text-decoration-line: underline; color:grey;'

const h3 = document.querySelector('h3');
h3.style = 'text-align:center; font-weight:light; text-decoration-line: underline; color:grey;'

const container = document.querySelector('.container');
container.style = `display: flex;
flex-wrap: wrap;  
margin-top: 20px;`

// function isPrime(num) {
//     if (num <= 1) return false; // negatives and 1 are not prime
//     if (num === 2) return true; // 2 is prime
//     if (num % 2 === 0) return false; // even numbers are not prime
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//       if (num % i === 0) return false; // divisible by an odd number
//     }
//     return true;
//   }

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  


  for (let i = 0; i <= 101; i++) {
    const number = document.createElement('div');
    number.classList.add('number');
    number.textContent = i;
    number.style = `display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% / 7);
    height: 50px;
    font-size: 30px;
    font-weight: bold;
    color: white;
    border:2px solid white;
    text-align: center;`

    if (i % 2 === 0) {
      number.classList.add('even');
      //even.style ='background-color: green;'
    } else {
      number.classList.add('odd');
      //odd.style ='background-color: yellow;'
    }

    if (isPrime(i)) {
      number.classList.add('prime');
      //prime.style ='background-color: red;'
    }

    container.appendChild(number);
  }
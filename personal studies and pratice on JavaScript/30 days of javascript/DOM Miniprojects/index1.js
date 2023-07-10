// box container
const wrapper = document.querySelector('.wrapper')
wrapper.style= 'justify-content:center; text-align:center; margin:auto; width:40%; font-family:Sans-serif;'

//h1
const h1 =  document.querySelector('h1')
h1.style = 'color:grey;  font-weight:bold; text-align:left; padding-left:40px'


//h2
const h2 =  document.querySelector('h2')
h2.style = 'color:grey;  font-weight:light; text-decoration-line:underline;'
// the year
const year = document.querySelector('#year')
setInterval(function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    year.style.color = "#" + randomColor;
  }, 1000);
  
year.style = 'font-size:60px; ' 

// date with timer
const dateTime  = document.querySelector('h3')
let second = 0;
let timer = setInterval(function() {
     second++;
     const now = new Date()
     const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
     const formattedDate = now.toLocaleTimeString('en-US', options);
     dateTime.innerHTML = formattedDate
    }, 1000);


setInterval(function() {
    var date = new Date();
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    dateTime.style.backgroundColor = "#" + randomColor;;
  }, 1000);
dateTime.style= 'width:300px; margin:auto;'


//unordered list
  const ul = document.querySelector('ul')
  ul.style = 'list-style:none; text-align:left;'

  const li = document.querySelectorAll('li') 
  li[0].style = 'padding:10px; background-color: green; border-bottom:2px solid white;' 
  li[1].style = 'padding:10px; background-color: yellow; border-bottom:2px solid white;' 
  li[2].style = 'padding:10px; background-color: red; border-bottom:2px solid white;' 
  li[3].style = 'padding:10px; background-color: red; border-bottom:2px solid white;' 
  li[4].style = 'padding:10px; background-color: red; border-bottom:2px solid white;' 
  li[5].style = 'padding:10px; background-color: red; border-bottom:2px solid white;' 
  li[6].style = 'padding:10px; background-color: red; border-bottom:2px solid white;' 

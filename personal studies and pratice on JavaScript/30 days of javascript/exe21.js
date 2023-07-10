/**
 * Document Object Model (DOM) - Day 1
 *
 * An HTMLCollection does not support all array methods therefore we should 
  use regular for loop instead of forEach.

 Getting elements by tag name 
 Getting elements by class name
 Getting an element by id
   
Getting elements by using querySelector methods
The document.querySelector method can select an HTML or HTML elements by tag 
name, by id or by class name.

Adding attribute using setAttribute
The setAttribute() takes two parameters the type of the attribute and 
the name of the attribute.

Adding class using classList
The class list method is a good method to append additional class. It 
does not override the original class if a class exists rather it adds 
additional class for the element

Adding Text to HTML element
We can add a text content using the property textContent or 
*innerHTML.

*/
/*
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

const allTitlesA = document.querySelectorAll('.title') 
allTitlesA.forEach(title => console.log(title))
 
const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'

const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')

//append the class, doesn't over ride
titles[3].classList.add('title', 'header-title')
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove('title', 'header-title')

const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'

//innerHTML can add a text or HTML element or elements as a child.



//adding style
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
    title.style.backgroundColor = 'pink'
    title.style.fontSize = '30px'
  } else {
    title.style.color = 'violet'
    title.style.backgroundColor = 'teal'
    title.style.fontSize = '25px'
  }
})
*/


let firstPara = document.querySelector('p')
let secondPara = document.querySelector('#second-para')
let thirdPara = document.querySelector('#third-para')

const nodeList = document.querySelectorAll("p");

for (let i = 0; i < nodeList.length; i++) {
    console.log(nodeList[i])
  }

nodeList[3].textContent = 'Fourth Paragraph'
nodeList[3].setAttribute('id', 'fourth-para')
nodeList[3].classList.add('title', 'para')

nodeList[0].style.backgroundColor = 'teal'
nodeList[1].style.backgroundColor = 'pink'
nodeList[2].style.backgroundColor = 'tomato'
nodeList[3].style.backgroundColor = 'orange'

nodeList.forEach((paragraph, i) => {
    paragraph.style.fontSize = '24px'
    if (i % 2 === 0) {
        paragraph.style.color = 'green'
        paragraph.style.backgroundColor = 'pink'
        paragraph.style.fontSize = '35px'
    } else {
        paragraph.style.color = 'violet'
        paragraph.style.backgroundColor = 'teal'
        paragraph.style.fontSize = '25px'
    }
})
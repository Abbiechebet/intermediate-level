/**
 * HTML5 Web Storage
 * 
 Web Storage(sessionStorage and localStorage) is a new HTML5 API offering 
important benefits over traditional cookies.

 Web storage is more secure, and large amounts of data can be stored 
 locally, without affecting website performance

localStorage is similar to sessionStorage, except that while data stored 
in localStorage has no expiration time, data stored in sessionStorage 
gets cleared when the page session ends — that is, when the page is 
closed.

It should be noted that data stored in either localStorage or 
sessionStorage is specific to the protocol of the page.

just like cookies, Web Storage data is, in both cases, not available 
between different browsers.

 There are five methods to work on local storage: 
                 setItem(),   
 //syntax
localStorage.setItem('key', 'value')
                 getItem(), 
                 removeItem(), 
                 clear(), 
                 key()

window.localStorage - stores data with no expiration date
window.sessionStorage - stores data for one session

Web Storage objects:

localStorage - to display the localStorage object
localStorage.clear() - to remove everything in the local storage
localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
 
objects and arrays must be stringified inorder to keep the format
 */

localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)

localStorage.setItem('age', 200)
console.log(localStorage)

const skills = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)
/**
      The Document Object Model (DOM)
 * programming interface for HTML, XML and SVG documents. 
 * It provides a structured representation of the document as a tree. 
 * DOM defines methods that allow access to the tree, so that they can 
   change the document structure, style and content. 
 * DOM provides a representation of the document as a structured group of 
   nodes and objects, possessing various properties and methods. 
   Nodes can also have event handlers attached to them, and once an event 
   is triggered, the event handlers get executed. 
 * DOM connects web pages to scripts or programming languages.

*To access the DOM, we make use of the document object. 
This object has properties and functions that we use to access our HTML 
elements which we can manipulate with JavaScript

If we want to access/modify attributes on elements, we can do that with 
getAttribute and setAttribute:

*We can also add and remove classes to elements using classList

 */
var firstDiv = document.getElementsByTagName("div")[0];
firstDiv.style.color = "red";
firstDiv.style.backgroundColor = "teal";

//getAttribute and setAttribute:
var body = document.getElementById("container");
body.getAttribute("id"); // "container"
body.setAttribute("id", "new_container");
body.getAttribute("id"); // "new_container"


//classlist
var secondDiv = document.getElementsByTagName("div")[1];
secondDiv.classList; // ["hello"]
secondDiv.classList.add("another_class");
secondDiv.classList; // ["hello", "another_class"]
secondDiv.classList.remove("hello");
secondDiv.classList; // [another_class"]
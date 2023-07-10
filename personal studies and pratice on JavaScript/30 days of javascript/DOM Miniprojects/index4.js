// const body = document.querySelector("body");
// body.style.backgroundImage = "url('./solar images/galaxy.gif')";

// const div = document.createElement("div");
// body.appendChild(div);
// div.style.width = "50%";
// div.style.margin = "auto";
// div.style.textAlign = "center";

// const header = document.querySelector("header");
// div.appendChild(header);

// const h1 = document.querySelector("h1");
// h1.setAttribute("style", "color:whitesmoke; text-shadow: 5px 5px 5px grey; font-weight:bold; font-size:35px; margin-bottom:70px;");

// const input = document.querySelector("#mass");
// input.style = `padding:10px; color:grey;`;

// var select = document.querySelector("select");
// select.style = `padding:10px; color:grey; border-radius:5px;`;
// // var planets = [
// //   "Mercury",
// //   "Venus",
// //   "Earth",
// //   "Moon",
// //   "Mars",
// //   "Jupiter",
// //   "Saturn",
// //   "Uranus",
// //   "Neptune",
// //   "Pluto",
// // ];
// // var upperCasePlanets = planets.map(function (planets) {
// //   return planets.toUpperCase();
// // });
// // for (var i = 0; i < planets.length; i++) {
// //   var opt = planets[i];
// //   var option = document.createElement("option");
// //   option.style = `color:black; background-color:grey;`;
// //   option.textContent = opt;
// //   option.value = planets;
// //   option.text = upperCasePlanets[i];
// //   select.add(option);
// // }

// const button = document.querySelector("button");
// button.style = `padding:10px; color:white; background-color:grey; border-radius:5px;`;
// button.addEventListener("click", calculateWeight);

// const main = document.querySelector("main");
// div.appendChild(main);

// const flexContainer = document.querySelector(".flex-container");
// div.appendChild(flexContainer);

// flexContainer.style = `display:flex; background-color: rgb(123, 123 ,123 , 0.5);
// margin-top:20px;`;

// const flexItemImage = document.querySelector(".flex-item image");

// const flexItemDescription = document.querySelector(".flex-item description");
// //const flexItemDescription = document.querySelector(".flex-item description").value;
// flexItemDescription.style = `background-color: rgb(152, 151 ,151 , 0.5); color:white; font-size:30px;`;


// function calculateWeight() {
//   if (input.value === "") {
//     const noMassOutput = document.createElement("div");
//     flexContainer.appendChild(noMassOutput);
//     noMassOutput.style = `color:white; width:50%; margin: 0 auto; background-color: rgb(152, 151 ,151 , 0.5); 
//     padding:10px; text-align:center; margin-top:40px; margin-bottom:40px;font-size:20px;`;

//     noMassOutput.textContent = "Mass is required.";
//     return;
//   }

// var mass = parseFloat(input.value);
// var planet = select.value;
// var weight;
// var image;
// flexItemImage.textContent = image;

//   switch (planet) {
//     case "Mercury":
//       weight = mass * 0.38;
//       image = "mercury.png";
//       break;
//     case "Venus":
//       weight = mass * 0.91;
//       image = "venus.png";
//       break;
//     case "Earth":
//       weight = mass;
//       image = "earth.png";
//       break;
//     case "Moon":
//       weight = mass * 0.165;
//       image = "moon.png";
//       break;
//     case "Mars":
//       weight = mass * 0.38;
//       image = "mars.png";
//       break;
//     case "Jupiter":
//       weight = mass * 2.34;
//       image = "jupiter.png";
//       break;
//     case "Saturn":
//       weight = mass * 1.06;
//       image = "saturn.png";
//       break;
//     case "Uranus":
//       weight = mass * 0.92;
//       image = "uranus.png";
//       break;
//     case "Neptune":
//       weight = mass * 1.19;
//       image = "neptune.png";
//       break;
//     case "Pluto":
//       weight = mass * 0.063;
//       image = "pluto.png";
//       break;
//     default:
//       weight = 0;
//       image = "";
//   }
//   flexItemDescription.innerHTML = "The weight of the object on " + option.text + ": " + weight.toFixed(2);
//   flexItemImage.innerHTML = "<img src='./solar images/" + image + "' alt='" + planet + "'>";
// }






const body = document.querySelector("body");
body.style.backgroundImage = "url('./solar images/galaxy.gif')";
//body.setAttribute("style", ".backgroundImage:url('./solar images/galaxy.gif')");

const div = document.createElement("div");
body.appendChild(div);
div.style.width = "50%";
div.style.margin = "auto";
div.style.textAlign = "center";

const header = document.querySelector("header");
div.appendChild(header);

const h1 = document.querySelector("h1");
h1.setAttribute("style", "color:whitesmoke; text-shadow: 5px 5px 5px grey; font-weight:bold; font-size:35px; margin-bottom:70px;");

const input = document.querySelector("#mass");
input.style = `padding:10px; color:grey;`;

var select = document.querySelector("select");
select.style = `padding:10px; color:grey; border-radius:5px;`;

const button = document.querySelector("button");
button.style = `padding:10px; color:white; background-color:grey; border-radius:5px;`;

const main = document.querySelector("main");
div.appendChild(main);

const flexContainer = document.querySelector(".flex-container");
div.appendChild(flexContainer);

flexContainer.style = `display:flex; background-color: rgb(123, 123 ,123 , 0.5);
margin-top:20px;`;

const flexItemImage = document.querySelector(".flex-item image");

const flexItemDescription = document.querySelector(".flex-item description");
//const flexItemDescription = document.querySelector(".flex-item description").value;
flexItemDescription.style = `background-color: rgb(152, 151 ,151 , 0.5); color:white; font-size:30px;`;

function calculateWeight() {
  if (input.value === "") {
    const noMassOutput = document.createElement("div");
        flexContainer.appendChild(noMassOutput);
        noMassOutput.style = `color:white; width:50%; margin: 0 auto; background-color: rgb(152, 151 ,151 , 0.5); 
        padding:10px; text-align:center; margin-top:40px; margin-bottom:40px;font-size:20px;`;
    
        noMassOutput.textContent = "Mass is required.";
        return;
      } 
var mass = parseFloat(input.value);
var planet = select.value;
var weight;
var image;

  switch (planet) {
    case "Mercury":
      weight = mass * 0.38;
      image = "mercury.png";
      break;
    case "Venus":
      weight = mass * 0.91;
      image = "venus.png";
      break;
    case "Earth":
      weight = mass;
      image = "earth.png";
      break;
    case "Moon":
      weight = mass * 0.165;
      image = "moon.png";
      break;
    case "Mars":
      weight = mass * 0.38;
      image = "mars.png";
      break;
    case "Jupiter":
      weight = mass * 2.34;
      image = "jupiter.png";
      break;
    case "Saturn":
      weight = mass * 1.06;
      image = "saturn.png";
      break;
    case "Uranus":
      weight = mass * 0.92;
      image = "uranus.png";
      break;
    case "Neptune":
      weight = mass * 1.19;
      image = "neptune.png";
      break;
    case "Pluto":
      weight = mass * 0.063;
      image = "pluto.png";
      break;
    default:
      weight = 0;
      image = "";
  }

  flexItemDescription.innerHTML = "Weight: " + weight.toFixed(2) + " kg<br>";
  flexItemImage.innerHTML += "<img src='./solar images/" + image + "' alt='" + planet + "'>";

  // flexItemDescription.innerHTML = "The weight of the object on " + option.text + ": " + weight.toFixed(2);
  // flexItemImage.innerHTML = "<img src='./solar images/" + image + "' alt='" + planet + "'>";
}
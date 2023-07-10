const abigaelChallenges2023 = {
  description: "Abigael Chebet challenges",
  challengeTitle: "Abigael Chebet challenges",
  challengeSubtitle: "30DaysOfJavaScript Challenge",
  challengeYear: 2023,
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "JS",
    "JavaScript",
    "ES6",
    "Promise",
    "async await",
    "Database",
    "React",
    "React Hooks",
    "Context API",
    "React Router",
    "Web Storage",
    "localStorage",
    "sessionStorage",
    "Redux",
    "Node",
    "MongoDB",
    "SQL",
    "API",
    "DOM",
    "data science",
    "MERN",
    "Python",
    "Flask",
    "Statistics",
    "Linear Algebra",
    "Numpy",
    "Pandas",
    "Scipy",
    "Scikit-learn",
    "Visualization",
    "D3.js",
  ],
  author: {
    firstName: "Abigael",
    lastName: "Chebet",
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
    qualifications: [
      "MSc. Computer Science Ongoing",
      "BSc. Information and Communication Eng.",
      "MSc. Food Technology",
      "BSc.Food Technology",
    ],
    socialLinks: [
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/in/asabeneh/",
        fontawesomeIcon: '<i class="fab fa-linkedin">',
      },
      {
        social: "Twitter",
        url: "https://twitter.com/Asabeneh",
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
      },
      {
        social: "Github",
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: "https://github.com/Asabeneh",
      },
      {
        social: "DEV.to",
        fontawesomeIcon: "",
        url: "https://dev.to/asabeneh",
      },
    ],
    skills: [
      "Web Development",
      "Data Analysis",
      "Data Visualization",
      "Programming",
      "Databases",
      "Developing API",
    ],
    bio: `I am an educator, developer, motivator and content creator. I am a life-long learner. 
        If you like to know more about me checkout my LinkedIn or Github profile. Thank you 
        so much for joining in my quest of changing everyone to developer.`,
  },
  challenges: [
    {
      name: "30 Days Of Python",
      topics: [
        "Python",
        "Flask",
        "Numpy",
        "Pandas",
        "Statistics",
        "API",
        "MongoDB",
      ],
      days: 30,
      status: "Done",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
    },
    {
      name: "30 Days Of JavaScript",
      topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
      days: 30,
      status: "Ongoing",
      questions: "Above 500",
      projects: "About 30",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
    },
    {
      name: "30 Days Of HTML & CSS",
      topics: ["CSS", "Flex", "Grid", "CSS Animation"],
      days: 30,
      status: "Coming",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of React",
      topics: [
        "React",
        "React Router",
        "Redux",
        "Context API",
        "React Hooks",
        "MERN",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of ReactNative",
      topics: ["ReactNative", "Redux"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Fullstack",
      topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Data Analysis",
      topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Machine Learning",
      topics: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Scipy",
        "Linear Algebra",
        "Statistics",
        "Visualization",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
  ],
};

//main
const main = document.createElement("main");
main.style = " background-color:#f5f5f5; width:70%;  margin:auto;";
document.body.appendChild(main);

// box container
const wrapper = document.querySelector(".wrapper");
wrapper.style = `justify-content:center; text-align:center; margin:auto; 
width:70%; font-family:Verdana;`;
main.appendChild(wrapper);

//h1
const h1 = document.createElement("h1");
h1.style = "color:black;  font-weight:bold; text-align:left; padding-left:40px";
const text = document.createTextNode(
  `${abigaelChallenges2023.description}  in `
);
h1.appendChild(text);
wrapper.appendChild(h1);

// the year
const yearSpan = document.createElement("span");
h1.appendChild(yearSpan);
yearSpan.className = "year";
yearSpan.textContent = abigaelChallenges2023.challengeYear;
setInterval(function () {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  yearSpan.style.color = "#" + randomColor;
}, 1000);

yearSpan.style = "font-size:40px; ";

//h2
const h2 = document.createElement("h2");
h2.textContent = abigaelChallenges2023.challengeSubtitle;
h2.style = "color:grey;  font-weight:light; text-decoration-line:underline;";
wrapper.appendChild(h2);

// date with timer
const dateTime = document.createElement("h3");
wrapper.appendChild(dateTime);
let second = 0;
let timer = setInterval(function () {
  second++;
  const now = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedDate = now.toLocaleTimeString("en-US", options);
  dateTime.innerHTML = formattedDate;
}, 1000);

setInterval(function () {
  var date = new Date();
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  dateTime.style.backgroundColor = "#" + randomColor;
}, 1000);
dateTime.style = "width:300px; margin:auto; font-size:18px;";

function generateChallengeList(challenges) {
  const listContainer = document.createElement("ul");
  listContainer.style.listStyle = 'none';
  listContainer.classList.add("challenge-list");

  challenges.forEach((challenge) => {
    const listItem = document.createElement("li");
    listContainer.appendChild(listItem);
    listItem.style.backgroundColor = getStatusColor(challenge.status);
    listItem.style.padding = '12px';
    listItem.style.borderBottom = '2px solid white'; 
    listItem.style.width = '100%'; 
    listItem.style.marginLeft = '-30px'; 
    listItem.style.display = 'flex'; 

    const challengeDetails = document.createElement("span");
    challengeDetails.style.width= '250px' 
    challengeDetails.style.textAlign = 'left'
    challengeDetails.textContent = challenge.name;
    listItem.appendChild(challengeDetails)

      // Create the summary tag element
const topicHeading = document.createElement("span")
const details = document.createElement("details");
const summary = document.createElement("summary");
summary.style.marginLeft = '80px'
summary.style.marginRight = '150px'
summary.textContent = "Python";
summary.textContent = "JavaScript";
summary.textContent = 'HTML & CSS';
summary.textContent = 'React';
summary.textContent = 'TeactNative';
summary.textContent = 'Fullstack';
summary.textContent = 'Data Analysis';
summary.textContent = 'Machine Learning';
listItem.appendChild(topicHeading)
topicHeading.appendChild(details)
details.appendChild(summary)


    const topicDropdown = document.createElement("div");
      topicDropdown.textContent = challenge.topics;
details.appendChild(topicDropdown)
/*
const topicDropdown = document.createElement("select");
challenge.topics.forEach((topic) => {
  const option = document.createElement("option");
  option.value = topic;
  option.textContent = topic;
  topicDropdown.appendChild(option);
  details.appendChild(topicDropdown)
});
*/

    const statusText = document.createElement("span");
    statusText.textContent = challenge.status;
    statusText.style.textAlign = 'right'
    listItem.appendChild(statusText);
  });


  return listContainer;
}

function getStatusColor(status) {
  switch (status) {
    case "Done":
      return "green";
    case "Ongoing":
      return "yellow";
    case "Coming":
      return "red";
    default:
      return "white";
  }
}

const challenges = abigaelChallenges2023.challenges;
const challengeList = generateChallengeList(challenges);
wrapper.appendChild(challengeList);


//author
const divName = document.createElement("div");
wrapper.appendChild(divName);
const fullName =
  abigaelChallenges2023.author.firstName +
  " " +
  abigaelChallenges2023.author.lastName;
divName.textContent = fullName;
divName.style = `font-size:20px; font-weight:bold;  letter-spacing: 2px; margin-top:20px;`;

//socials
const socialLink = document.createElement("div");
wrapper.appendChild(socialLink);
const links =
  abigaelChallenges2023.author.socialLinks[0].fontawesomeIcon +
  " " +
  abigaelChallenges2023.author.socialLinks[1].fontawesomeIcon +
  " " +
  abigaelChallenges2023.author.socialLinks[2].fontawesomeIcon;
socialLink.textContent = links;

//bio
const bio = document.createElement("p");
wrapper.appendChild(bio);
bio.style = `font-size:15px; margin-top:20px;`;
bio.textContent = abigaelChallenges2023.author.bio;

//titles skills qualifications
const tsq = document.createElement("div");
wrapper.appendChild(tsq);
tsq.style = "display:flex; margin-top:20px;";
//width: calc(100% / 3)

const titlesL = document.createElement("div");
tsq.appendChild(titlesL);
titlesL.style = `text-align:left; margin-right:50px;`;
//title
const titles = document.createElement("p");
titles.textContent = "Titles";
titles.style = `font-size:18px; padding-left:10px; font-weight:bold;line-height:0px;`;
titlesL.appendChild(titles);

//title list
for (let i = 0; i < abigaelChallenges2023.author.titles.length; i++) {
  const title = document.createElement("div");
  title.style = `font-size:15px; `;
  title.textContent =
    abigaelChallenges2023.author.titles[i][0] +
    " " +
    abigaelChallenges2023.author.titles[i][1];
  titlesL.appendChild(title);
}

const skillsL = document.createElement("div");
tsq.appendChild(skillsL);
skillsL.style = `text-align:left; margin-right:50px;`;

//skill
const skills = document.createElement("p");
skills.textContent = "Skills";
skills.style = `font-size:18px; padding-left:10px; font-weight:bold; line-height:0px`;
skillsL.appendChild(skills);

// skill list
for (let i = 0; i < abigaelChallenges2023.author.skills.length; i++) {
  const skill = document.createElement("div");
  skill.style = `font-size:15px;`;
  skill.textContent = abigaelChallenges2023.author.skills[i];
  skillsL.appendChild(skill);
}

const quaL = document.createElement("div");
tsq.appendChild(quaL);
quaL.style = `text-align:left;`;

//qualification
const qua = document.createElement("p");
qua.textContent = "Qualifications";
qua.style = `font-size:18px; padding-left:10px; font-weight:bold; line-height:0px`;
quaL.appendChild(qua);

//qualification list
for (let i = 0; i < abigaelChallenges2023.author.qualifications.length; i++) {
  const qualifications = document.createElement("div");
  qualifications.textContent = abigaelChallenges2023.author.qualifications[i];
  qualifications.style = `font-size:15px;`;
  quaL.appendChild(qualifications);
}
// keyword
const keyDiv = document.createElement("div");
keyDiv.textContent = "Keywords";
keyDiv.style = `text-align:left; font-size:18px; font-weight:bold; margin-left:15px; 
margin-top:20px;`;
wrapper.appendChild(keyDiv);

//keywords
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.marginLeft = "45px";
//container.style.lineHeight = '0px';

// Helper function to generate random background color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

abigaelChallenges2023.keywords.forEach((keyword) => {
  const cell = document.createElement("div");
  cell.style.padding = "5px";
  cell.style.paddingRight = "20px";
  cell.style.margin = "5px";
  cell.style.borderRadius = "20px";
  cell.style.fontSize = "12px";
  cell.style.fonteight = "bold";
  cell.style.border = "1px solid black";
  cell.style.backgroundColor = getRandomColor();
  cell.textContent = "#" + " " + keyword;
  container.appendChild(cell);
});

wrapper.appendChild(container);


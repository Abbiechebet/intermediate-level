/*
*** Objects

Object methods: Object.assign, Object.keys, Object.values, Object.entries
      Object.assign: To copy an object without modifying the original object
      const copyPerson = Object.assign({}, person)

      Object.keys: To get the keys or properties of an object as an array

      Object.values:To get values of an object as an array

      Object.entries:To get the keys and values in an array

      hasOwnProperty: To check if a specific key or property exist in an object
*/

//💻 Exercises

//Exercises: Level 1
//Create an empty object called dog
let dog = {};

//Print the the dog object on the console
console.log(dog);

/*Add name, legs, color, age and bark properties for the dog object. The bark 
property is a method which return woof woof*/
dog = {
  name: "Jimmie",
  legs: 4,
  color: "brown",
  age: 4,
  bark: function () {
    return "woof woof";
  },
};

//Get name, legs, color, age and bark value from the dog object
console.log(dog.name); // Jimmie
console.log(dog.legs); // 4
console.log(dog.color); // brown
console.log(dog.age); // 4
console.log(dog.bark()); // woof woof

//Set new properties the dog object: breed, getDogInfo
dog.breed = "Labrador";
dog.getDogInfo = function () {
  return `${this.name} is a ${this.color} ${this.breed} with ${this.legs} legs and is ${this.age} years old.`;
};
console.log(dog.breed);
console.log(dog.getDogInfo);

//Exercises: Level 2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
//Find the person who has many skills in the users object.
let maxSkills = 0;
let personWithMaxSkills = "";
for (const user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    personWithMaxSkills = user;
  }
}
console.log(personWithMaxSkills);

//Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedInUsers = 0;
let highPointsUsers = 0;
for (const user in users) {
  if (users[user].isLoggedIn) {
    loggedInUsers++;
  }
  if (users[user].points >= 50) {
    highPointsUsers++;
  }
}
console.log(`Logged in users: ${loggedInUsers}`);
console.log(`Users with more than or equal to 50 points: ${highPointsUsers}`);

//Find people who are MERN stack developer from the users object
const mernStackDevelopers = Object.entries(users).filter(
  ([key, value]) =>
    value.skills.includes("MongoDB") &&
    value.skills.includes("Express") &&
    value.skills.includes("React") &&
    value.skills.includes("Node")
);
console.log(mernStackDevelopers);

//Set your name in the users object without modifying the original users object
const Users = {
  ...users,
  Chebet: {
    email: "chebet@chebet.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 45,
  },
};
console.log(Users);

//Get all keys or properties of users object
const userKeys = Object.keys(users);
console.log(userKeys);

//Get all the values of users object
const userValues = Object.values(users);
console.log(userValues);

//Exercises: Level 3
/*Create an object literal called personAccount. It has firstName, 
lastName, incomes, expenses properties and it has totalIncome, 
totalExpense, accountInfo,addIncome, addExpense and accountBalance 
methods. Incomes is a set of incomes and its description and expenses 
is a set of incomes and its description.*/
const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: new Map(),
  expenses: new Map(),

  addIncome: function (description, amount) {
    this.incomes.set(description, amount);
  },

  addExpense: function (description, amount) {
    this.expenses.set(description, amount);
  },

  totalIncome: function () {
    let total = 0;
    for (const amount of this.incomes.values()) {
      total += amount;
    }
    return total;
  },

  totalExpense: function () {
    let total = 0;
    for (const amount of this.expenses.values()) {
      total += amount;
    }
    return total;
  },

  accountInfo: function () {
    return `Account Information:\nName: ${this.firstName} ${
      this.lastName
    }\nTotal Income: $${this.totalIncome()}\nTotal Expenses: $${this.totalExpense()}`;
  },

  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

// Example usage:
personAccount.addIncome("Salary", 5000);
personAccount.addIncome("Freelance Work", 1000);
personAccount.addExpense("Rent", 1500);
personAccount.addExpense("Groceries", 300);

console.log(personAccount.accountInfo());
console.log("Account Balance:", personAccount.accountBalance());

/***** Questions:2, 3 and 4 are based on the following two arrays:
 * users and products ()*/

const users1 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];


//Imagine you are getting the above users collection from a MongoDB database.
/*a. Create a function called signUp which allows user to add to the collection. 
If user exists, inform the user that he has already an account.*/
const signUp = (users1, newUser) => {
  const userExists = users1.some((user) => user.email === newUser.email);
  if (userExists) {
    return "User already exists";
  }
  users1.push(newUser);
  return "User added successfully";
};

const newUser = {
  _id: "ghderc",
  username: "Thomas",
  email: "thomas@thomas.com",
  password: "123333",
  createdAt: "08/01/2020 10:00 AM",
  isLoggedIn: false,
};

console.log(signUp(users1, newUser));


//b. Create a function called signIn which allows user to sign in to the application
const signIn = (users1, username, password) => {
  for (let i = 0; i < users1.length; i++) {
    if (users1[i].username === username && users1[i].password === password) {
      return "Login successful!";
    }
  }
  return "Invalid username or password";
};
console.log(signIn(users1, "Thomas","123333"));


const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
//The products array has three elements and each of them has six properties.
//a. Create a function called rateProduct which rates the product
function rateProduct(products, productId, userId, rating) {
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {
      products[i].ratings.push({ userId: userId, rate: rating });
      return products[i];
    }
  }
  return null;
}
console.log(rateProduct(products, "aegfal", "fg12cy", 2))

//b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productId) {
  const product = products.find((product) => product._id === productId);
  if (!product) {
    console.log("Product not found");
    return;
  }
  if (product.ratings.length === 0) {
    return 0;
  }
  const sum = product.ratings.reduce((acc, rating) => acc + rating.rate, 0);
  return sum / product.ratings.length;
}
console.log(averageRating("eedfcf"))


/*Create a function called likeProduct. This function will helps 
to like to the product if it is not liked and remove like if it was liked.*/
function likeProduct(products, productId, userId) {
  const product = products.find((product) => product._id === productId);
  if (!product) {
    console.log("Product not found");
    return;
  }

  const userLiked = product.likes.includes(userId);
  if (userLiked) {
    product.likes = product.likes.filter((id) => id !== userId);
    console.log("Product unliked successfully");
  } else {
    product.likes.push(userId);
    console.log(`Product liked successfully`);
  }
}
likeProduct(products, "eedfcf", "fg12cy")


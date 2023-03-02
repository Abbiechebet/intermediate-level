const gimli = {
    name: 'Gimli',
    race: 'dwarf',
    weapon: 'axe',
    greet: function () {
      return `Hi, my name is ${this.name}!`
    },
  }

  //accessing
  console.log(gimli.weapon);
  console.log(gimli['weapon']);
  console.log(gimli.greet());
  console.log(gimli['greet']());

//adding
gimli.age = 139 // gimli['age'] = 139
console.log(gimli.age);

gimli.fight = function () {
    return `Gimli attacks with an ${this.weapon}.`
  }
  console.log(gimli.fight);


  //modifying
  // Update weapon from axe to battle axe
gimli.weapon = 'battle axe'
console.log(gimli.weapon);
console.log(gimli);

// Remove weapon from gimli - by using delete keyword
delete gimli.weapon;
console.log(gimli);



//The for...in loop is not to be confused with the for...of loop, which
// is used exclusively on the Array object type
//Looping Through Object Properties
// Iterate through properties of gimli
for (let key in gimli) {
    console.log(gimli[key])
  }

  // Get keys and values of gimli properties
for (let key in gimli) {
    console.log(key.toUpperCase() + ':', gimli[key])
  }

  // Initialize method on gimli object to return property keys
Object.keys(gimli)
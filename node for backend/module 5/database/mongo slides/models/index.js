exports.Instructor = require("./instructor");

//invoke the constructor 
const elie = new this.Instructor({firstName: "Elie"})
//call.saveon the object created from the constructor (which is the model)
elie.save()
.then (newElie =>{
    console.log(newElie)
})
.catch(err =>{
    console.log("Error saving!", err)
})

//OR
//invoke the create method directly on the model
Instructor.create ({firstName: "Elie"})
.then (newInst =>{
    console.log(newInst)
})
.catch (err =>{
    console.log("Error creating! ")
})
const mongoose = require("mongoose");
mongoose.set("debug", true); // logs mongo queries to the terminal
mongoose.Promise = global.Promise; //ES2015 for promise

//connect to the db
mongoose
  .connect("mongodb://127.0.0.1/first_app", {
    //useMongoClient: true, // this option is necessary for mongoose 4.11 and up
  })
  .then(() => {
    //once connected, give a success message
    console.log("connected to mongodb");
  })
  .catch((err) => {
    //if sth goes wrong let us know
    console.log(err);
  });

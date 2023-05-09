

const mongoose = require("mongoose");
const User = require("./user.model");

mongoose
  .connect("mongodb://127.0.0.1/MytestDB")
  .then(() => {
    console.log("Database connection established");
  })
  .catch((e) => console.log(e.message));

run();

async function run() {
  //const user = new User({
  //const user = await User.create({
//     username: "tes4tUser89",
//     firstName: "Test",
//     lastName: "Adam",
//     age: 49,
//     currency: "EUR",
//     address: {
//       street: "Somewhere on earth",
//       lga: "same as address",
//       houseNumber: 1,
//       country: "In the abroad",
//     },
//     hobbies: ["Making jokes", "Video games"],
//     email: "Test@emai.co",
//     password: "aLongPassword",
//     isMale: true,
//        relatives: ["644f6bd0ae2815d5a3cda381"]
//  });
  // await User.deleteMany()
  // const savedUser = await user.save()
  // const users = await User.find({ username: 'JamesIweobi'})

  const users = await User.findOne({username: "tes4tUser89",}).populate('relatives')
  // const user = await User.findByIdAndUpdate("", {
  //   lastName: "Grampa"
  // }, {new: true});
  // await User.findByIdAndDelete("")
  // const users = await User.find()

  console.log(users, "THE UNSAVED INSTANCE OF A NEW USER");
}

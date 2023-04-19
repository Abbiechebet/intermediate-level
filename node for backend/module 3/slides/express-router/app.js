const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const userRoutes = require("./routes");

app.use(bodyParser.json());

//telling our app about those routes we made

//app.use(userRoutes);
app.use("/users", userRoutes);

// app.get("/", (req, res) => {
//   return res.json(`start with .route("/users:id")`);
// });

// app.listen(3000, () => {
//   console.log("Server is listening on port 3000");
// });

app.get("/", function (req, res, next) {
    return res.json("we made it to the root route");
  });

app.use(function (req, res, next) {
  console.log(`"middleware just ran")`);
  return next();
});

app.listen(3000, () => {
  console.log("Server starting");
});
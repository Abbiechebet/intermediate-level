const express = require("express");

const { userRouter } = require("./src/routes/user/users.route");
const { logUserRequestAndTimePath } = require("./src/middlewares/logger");
//const { notFound, badRequestError } = require("./src/middlewares/error.utils");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 4000;

console.log("Node running in evironment:", app.get("env"));

//middlewares
//app.use(badRequestError);
app.use(express.json());
app.use(logUserRequestAndTimePath);
app.use(morgan("tiny"));
app.use(morgan("combined"));

//user Routes
app.use("/users", userRouter);

app.use((err, req, res, next) => {
  //console.log(app.get("NODE_ENV") === "development") //false
  console.log(process.env.NODE_ENV); //development
  return res.status(err.status || 404).json({
    message: err.message,
    status: "failed",
    //err: app.get("env") === "development" ? err : {},
    //.toString()
    err:
      process.env.NODE_ENV === "development"
        ? { message: err.message, errorStack: err.stack }
        : {},
  });
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));

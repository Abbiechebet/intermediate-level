const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  return res.json("Hello!");
});

//catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("not found");
  err.status = 404;
  return next(err);
});

//error handlers
app.use((err, req, res, next) => {
  err.status(err.status || 500);
  return res.json({
    message: err.message,
    error: app.get("env") === "development" ? err : {},
  });
});

app.listen(3000, () => {
  console.log("Server is lisening on port 3000");
});

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

//importing user routes
//import userRouter from "./route/user.route.js"
import userRouter, { obj as userObj, callName } from "./route/user.route.js";

console.log(userObj);
callName();

//creating express app
const app = express();

//exposing environment variables
dotenv.config();

//Database connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_URL)
  .then(() => console.log("Database connection established"))
  .catch((e) => console.log(e.message));

//port configuration
const port = Number(process.env.Port || 3000);

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});

const express = require("express");

const app = express();

const { userRouter } = require("./src/routes/user/users.route");
const { logUserRequestAndTimePath } = require("./src/middlewares/logger");

const database = {};

const port = 4000;

//middlewares
app.use(express.json());
app.use(logUserRequestAndTimePath);

//user Routes
app.use("/users", userRouter);

app.listen(port, () => console.log(`Server listening on port: ${port}`));

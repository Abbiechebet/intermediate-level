const express = require("express");
const app = express();
const router = require("./route/route");

const port = 8080;
app.use(express.json());
app.use("/api/v1/users/", router);

app.listen(port, () => {
  console.log("Thankyou Lord for this far. on PORT:8080");
});

import express, { json, urlencoded } from "express";
import cors from "cors";
import router from "./app/routes/tutorial.routes.js";

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(json()); 
app.use(urlencoded({ extended: true }));
app.use('/api/tutorial', router);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Abbie's application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
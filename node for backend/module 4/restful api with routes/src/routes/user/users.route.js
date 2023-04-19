const express = require("express");

const {
    createUserController,
    getUsersController,
    getSingleUserController,
    deleteOneUserController,
    searchController
  } = require("../../controllers/user.controller");

  const {responder} = require("../../middlewares/logger")

const router = express.Router();

//router.get('/users', (req, res)=>{}).post('/search', (req, res)=>{})

//"users/create"
router.post("/create", createUserController);
//"users/list"
router.get("/list", getUsersController);

router.get("/search", searchController);
//"users/:name"
router.get("/:name",  getSingleUserController);
//"users/:id"
router.delete("/:id", deleteOneUserController);



module.exports = { userRouter: router };

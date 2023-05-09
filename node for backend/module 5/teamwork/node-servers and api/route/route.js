const express = require("express");

const {
    createUser,
    getUser,
    getAnotherUser,
    getReqQuery
  } = require("../controller/user.controller");

  const router = express.Router();


router.get('/get', getUser)
router.post('/create', createUser)
router.get("/:id/:name/:age/:sex", getAnotherUser)
router.get('/reqquery', getReqQuery)

module.exports = router;
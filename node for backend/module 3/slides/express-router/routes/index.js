const express = require("express");

const router = express.Router();

module.exports = router;

const users =[]
var id = 1;

// //instead of app.get
// router.get("/users", (req, res) => {
//   return res.json(users);
// });

// router.get("/users:id", (req, res) => {
//   const user = users.find((val) => val.id === Number(req.params.id));
//   return res.json(user);
// });

// //instead of app.post
// router.post("/users", (req, res) => {
//   users.push({
//     name: req.body.name,
//     id: ++id,
//   });
//   return res.json({ message: "Created" });
// });

// //instead of app.patch
// router.patch("/users:id", (req, res) => {
//   const user = users.find((val) => val.id === Number(req.params.id));
//   user.name = req.body.name;
//   return res.json({ message: "Updated" });
// });

// //instead of app.delete
// router.delete("/users:id", (req, res) => {
//   const userIndex = users.findIndex((val) => val.id === Number(req.params.id));
//   users.splice(userIndex, 1);
//   return res.json({ message: "Deleted" });
// });




//more declarative router syntax
//declare route first, then all methods on it
// router
//   .route("/users")
//   .get(() => {
//     return res.json(users);
//   })

//   .post(() => {
//     users.push({
//       name: req.body.name,
//       id: ++id,
//     });
//     return res.json({ message: "Created" });
//   });

// router
//   .route("/users:id")
//   .get((req, res) => {
//     const user = users.find((val) => val.id === Number(req.params.id));
//     return res.json(user);
//   })

//   .patch((req, res) => {
//     users.name = req.body.name;
//     return res.json({ message: "Updated" });
//   })

//   .delete((req, res) => {
//     users.splice(users.id, 1);
//     return res.json({ masage: "Deleted" });
//   });




//declarative router synthax with a prefix
router
  .route("")
  .get((req, res) => {
    return res.json(users);
  })

  .post((req, res) => {
    users.push({
      name: req.body.name,
      id: ++id,
    });
    return res.json({ message: "Created" });
  });

router
  .route("/:id")
  .get((req, res) => {
    const user = users.find((val) => val.id === Number(req.params.id));
    return res.json(user);
  })

  .patch((req, res) => {
    const user = users.find((val) => val.id === Number(req.params.id));
    users.name = req.body.name;
    return res.json({ message: "Updated" });
  })

  .delete((req, res) => {
    const user = users.find((val) => val.id === Number(req.params.id));
    users.splice(users.id, 1);
    return res.json({ masage: "Deleted" });
  });
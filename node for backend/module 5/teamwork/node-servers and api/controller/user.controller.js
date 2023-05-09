const fs = require("fs");

//${__dirname}

const userData = JSON.parse(
  fs.readFileSync(`./src/usersData.json`, "utf-8", (err, data) => {
    if (err) console.log(err);
  })
);

const getUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "200 okay",
    data: userData,
  });
};

const createUser = (req, res) => {
  userData.push(req.body);
  fs.writeFile(
    `./src/usersData.json`,
    JSON.stringify(userData),
    "utf-8",
    (err) => {
      console.log(err);
    }
  );
  res.status(201).json({
    status: "success",
    message: "user successfully created",
    data: userData,
  });
};

const getAnotherUser= (req, res)=>{
    res.status(201).json({
        status: "success",
        message: "user found",
        data: req.params
    })
}

const getReqQuery = (req, res) =>{
    const{search,page,limit} = req.query
    res.status(200).json({
      status: "success",
      message:"search result found",
      data:{search, limit, page}
    })
}

module.exports = {
  getUser,
  createUser,
  getAnotherUser,
  getReqQuery
};

const { userValidator } = require("../validators/user.validator")

const users = [
  {
    name: "John",
    sex: "male",
    age: 46,
    password: "password1",
  },
  {
    name: "Anne",
    sex: "female",
    age: 78,
    password: "password1",
  },
  {
    name: "Prosper",
    sex: "male",
    age: 40,
    password: "password1",
  },
  {
    name: "Ada",
    sex: "female",
    age: 19,
    password: "password1",
  },
];

class UserController {
  static createNewUser(req, res) {
    const { error, value } =  userValidator.validate(req.body)
    if(error) throw new Error(error.details[0].message)



    // const newUser = req.body;
    // const userKeys = Object.keys(users[0]);
    // //console.log(userKeys, " ALL USE KEYS");

    // const clientUserKeys = Object.keys(req.body);
    // if (clientUserKeys.length < userKeys.length)
    //   throw new Error("incomplete user object");
    // for (const key of clientUserKeys) {
    //   if (!userKeys.includes(key))
    //     throw new Error`${key.toLocaleUpperCase()} is not a valid user key`();

    //   if (typeof users[0][key] !== typeof req.body[key])
    //     throw new Error(`Invalid key @ ${key}, should be type of 
    // ${typeof userKeys[key]}`);
    // }

    //users.push(newUser);

    users.push(value);
    res.status(201).json({
      message: "user created successfully",
      status: "success",
      data: {
        users,
      },
    });
  }
}

module.exports = UserController;

const users = [
    {
      name: 'John',
      sex: 'male',
      age: 46
    },
    {
      name: 'Anne',
      sex: 'female',
      age:78
    },
    {
      name: 'Prosper',
      sex: 'male',
      age: 40
    },
    {
      name: 'Ada',
      sex: 'female',
      age: 19
    }
    ]

module.exports = {

    createUserController:  (req, res) => {
        const userObject = req.body
        users.push(userObject)
        res.status(201).json({
          status: 'success',
          message: 'User Created',
          users
        })
  
      },  

 getSingleUserController:  (req, res) => {
    const name = req.params.name
    console.log(`The user is: ${name}`)
    if(!name) return res.status(404).json({
      status: 'failed',
      message: 'Please pass in a user name',
    })
  
    const user = users.find(user => user.name.toLowerCase() == name.toLowerCase())
  
    if(!user) return res.status(404).json({
      status: 'failed',
      message: 'User not found',
    })
  
    return res.json({
      status: 'success',
      message: 'User found',
      user
    })
  },

  getUsersController:(req, res) => {
    res.status(200).json({
      status: 'success',
      message: users.length < 1 ? "Users not found" :  "Users found",
      users
    })
  },

 deleteOneUserController:(req, res) => {
    return res.status(200).json({
      status: 'success',
      message: "User deleted"
    })
},

  searchController: function(req, res){
    const{search,page,limit} = req.query
    res.status(200).json({
      status: "success",
      message:"search result found",
      data:{search, limit, page}
    })
  }
  
}
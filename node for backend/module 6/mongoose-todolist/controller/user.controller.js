import user from "../model/user.model.js"
export default class UserController{
    
    static async createUser(req, res){
        //joi
        const data = req.body

        const newUser = await user.createUser(data)
        return newUser
    }
}
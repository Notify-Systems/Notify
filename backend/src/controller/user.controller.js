import service from "../service/user.service.js"

class UserController{
    async view(req, res){
        const user = await service.view(req.userId)
        res.status(200).json(user)
    }
}
export default new UserController ()
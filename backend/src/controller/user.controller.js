import service from "../service/user.service.js"

class UserController{
    async view(req, res){
        const user = await service.view(req.userId)
        res.status(200).json(user)
    }
    async delete(req, res){
        const response = await service.delete(req.userId)
        res.status(200).json(response)
    }
}
export default new UserController ()
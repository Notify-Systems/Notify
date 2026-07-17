import service from "../service/user.service.js";

class UserController{
    async create(req, res){
        const result = await service.create(req.body)
        res.status(201).json(result)
    }
}

export default new UserController()
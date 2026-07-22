import service from "./auth.service.js";

class AuthController{
    async create(req, res){
        const result = await service.create(req.body)
        res.status(201).json(result)
    }
    async login(req, res){
        const result = await service.login(req.body)
        res.status(200).json(result)
    }
    async refresh(req, res){
        const result = await service.refresh(req.headers.authorization);
        res.status(200).json(result)
    }
}

export default new AuthController()
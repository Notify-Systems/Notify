import service from "./collection.service.js";

class CollectionController{
    async create(req, res){
        const collection = await service.create(req.userId, req.body);
        res.status(201).json(collection);
    }
    async read(req, res){
        const collection = await service.read(req.userId, req.params.id);
        res.status(200).json(collection);
    }
}

export default new CollectionController();
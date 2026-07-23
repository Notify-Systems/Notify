import service from "./collection.service.js";

class CollectionController{
    async create(req, res){
        const collection = await service.create(req.userId, req.body);
        res.status(201).json(collection);
    }

}

export default new CollectionController();
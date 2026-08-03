import service from "./collection.service.js";

class CollectionController{
    async create(req, res){
        const collection = await service.create(req.userId, req.body);
        res.status(201).json(collection);
    }
    async read(req, res){
        const collection = await service.read(req.collection);
        res.status(200).json(collection);
    }
    async readAll(req, res){
        const collections = await service.readAll(req.userId)
        res.status(200).json(collections)
    }
    async update(req, res){
        const collection = await service.update(req.body, req.params.id);
        res.status(200).json(collection);
    }
    async delete(req, res){
        const result = await service.delete(req.params.id);
        res.status(200).json(result);
    }
}

export default new CollectionController();
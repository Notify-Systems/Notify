import repository from "./collection.repository.js"
import userRepository from "../user/user.repository.js"
import AppError from "../../errors/AppError.js";

class CollectionService{
    async create(userId, data){
        data.creatorId = userId
        const collection = await repository.create(data);
        return collection;
    }
    async read(collection){
        return collection;
    }
    async readAllMe(userId){
        const collations = await repository.findByUserId(userId)
        return collations
    }
    async readAll(userId){
        const collations = await repository.findAll(userId)
        return collations
    }
    async update(data, collectionId){
        const collection = await repository.update(collectionId, data);
        return collection
    }
    async updateVisibility(data, collectionId, collection){
        if(collection.visibility == data.visibility)
            throw new AppError("A visibilidade precisa ser diferente")
        if(collection.visibility == "shared"){
            await repository.deleteShares(collectionId)
        }
        const newCollection = await repository.update(collectionId, data);
        return newCollection;
    }
    async delete(collectionId){
        const collection = await repository.delete(collectionId);
        const response = {message: `Coleção ${collection.name} foi deletado`}
        return response
    }
}

export default new CollectionService();
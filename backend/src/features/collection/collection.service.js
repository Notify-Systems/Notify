import repository from "./collection.repository.js"
import userRepository from "../user/user.repository.js"
import userExist from "../../utils/userExist.js";
import collectionExist from "../../utils/collectionExist.js";

class CollectionService{
    async create(userId, data){
        data.creatorId = userId
        const collection = await repository.create(data);
        return collection;
    }
    async read(userId, collectionId){
        const collection = await collectionExist(collectionId);
        return collection;
    }
    async readAll(userId){
        const collations = await repository.findByUserId(userId)
        return collations
    }
    async update(userId, data, collectionId){
        await collectionExist(collectionId, userId)

        const collection = await repository.update(collectionId, data);
        return collection
    }
    async delete(userId, collectionId){
        await collectionExist(collectionId, userId);
        const collection = await repository.delete(collectionExist);
        const response = {message: `Coleção ${collection.name} foi deletado`}
        return response
    }
}

export default new CollectionService();
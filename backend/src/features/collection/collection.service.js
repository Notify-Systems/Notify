import repository from "./collection.repository.js"
import userRepository from "../user/user.repository.js"
import userExist from "../../utils/userExist.js";

class CollectionService{
    async create(userId, data){
        data.creatorId = userId
        const newCollection = await repository.create(data);
        return newCollection;
    }
    async read(userId, collectionId){
        const collection = await repository.findById(collectionId);

        if(!collection)
            throw new NotFoundError("Coleção não encontrada");
        if(collection.creatorId !== userId)
            throw new NotFoundError("Coleção não encontrada");

        return collection;
    }
}

export default new CollectionService();
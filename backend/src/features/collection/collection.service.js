import repository from "./collection.repository.js"
import userRepository from "../user/user.repository.js"
import userExist from "../../utils/userExist.js";

class CollectionService{
    async create(userId, data){
        await userExist(userId);
        
        data.creatorId = userId
        const newCollection = await repository.create(data);
        return newCollection;
    };
}

export default new CollectionService();
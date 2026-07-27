import repository from "../features/collection/collection.repository.js";
import { NotFoundError } from "../errors/errorIndex.js";

async function collectionExist(colletionId, userId){
    const collection = await repository.findById(colletionId);
    
    if(!collection)
       throw new NotFoundError("Coleção não encontrada");
    if(collection.creatorId !== userId)
        throw new NotFoundError("Coleção não encontrada");
    return collection;
}

export default collectionExist;
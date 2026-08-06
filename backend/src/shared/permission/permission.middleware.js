import { ForbiddenError, NotFoundError} from "../errors/errorIndex.js";
import permission from "./permission.service.js";

function can(action, resource){ 
    return async (req, res, next) =>{
        const userId = req.userId;
        const resourceId = req.params.id;
        switch (resource){
            case "collection":
            
                switch(action){
                    case "view":{
                        const collection = await permission.collectionView(userId, resourceId)
                        if(collection == false)
                          throw new NotFoundError("Colleção não encontrada")
                        req.collection = collection
                        return next()
                    }
                    case "edit":{
                        const collection = await permission.collectionEdit(userId, resourceId)
                        if(collection == false)
                          throw new ForbiddenError("Permissão de editar negada")
                        req.collection = collection
                        return next()
                    }
                    case "owner":{
                        const collection = await permission.collectionOwner(userId, resourceId)
                        if(collection == false)
                          throw new ForbiddenError("Permissão negada")
                        req.collection = collection
                        return next()
                    }
                }
        }   
    }
}

export default can
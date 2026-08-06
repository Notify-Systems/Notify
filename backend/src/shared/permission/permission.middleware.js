import { ForbiddenError, NotFoundError} from "../errors/errorIndex.js";
import permission from "./permission.service.js";

function can(action, resource){ 
    return async (req, res, next) =>{
        const userId = req.userId;
        const resourceId = req.params.id ?? req.body[`${resource}Id`];
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
            case "section":
                switch(action){
                    case "view":{
                        const section = await permission.sectionView(userId, resourceId)
                        if(section == false)
                          throw new NotFoundError("Colleção não encontrada")
                        req.section = section
                        return next()
                    }
                    case "edit":{
                        const section = await permission.sectionEdit(userId, resourceId)
                        if(section == false)
                          throw new ForbiddenError("Permissão de editar negada")
                        req.section = section
                        return next()
                    }
                    case "owner":{
                        const section = await permission.sectionOwner(userId, resourceId)
                        if(section == false)
                          throw new ForbiddenError("Permissão negada")
                        req.section = section
                        return next()
                    }
                }
        }   
    }
}

export default can
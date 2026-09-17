import { ForbiddenError, NotFoundError } from "../../shared/errors/errorIndex.js"
import userRepository from "../user/user.repository.js"
import repository from "./share.repository.js"

class ShareService{
    async shareCollection(userId, data, collection){
        const user = await userRepository.findById(data.userId)
        if(!user) throw new NotFoundError("Usuario não encontrado")
        if(data.role == "editor" && collection.creatorId !== userId)
            throw new ForbiddenError ("Você não tem permissão pra dar esse cargo a alguem")
        data.collectionId = collection.id
        const share = await repository.shareColletion(data)
        return{message: "Conjunto compartilhado com sucesso"}
    }
}

export default new ShareService()
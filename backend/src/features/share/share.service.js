import { ForbiddenError, NotFoundError } from "../../shared/errors/errorIndex.js"
import userRepository from "../user/user.repository.js"
import repository from "./share.repository.js"

class ShareService{
    async share(userId, data, shareitem, item){
        const user = await userRepository.findById(data.userId)
        if(!user) throw new NotFoundError("Usuario não encontrado")
        if(data.role == "editor" && item.creatorId !== userId)
            throw new ForbiddenError ("Você não tem permissão pra dar esse cargo a alguem")
        const share = await repository[`share${shareitem}`](data, shareitem);
        return{message: "Conjunto compartilhado com sucesso"}
    }
}

export default new ShareService()
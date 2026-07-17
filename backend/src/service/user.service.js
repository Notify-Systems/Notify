import { NotFoundError } from "../errors/errorIndex.js"
import repository from "../repository/user.repository.js"
import userSafe from "../utils/showUser.js"

class UserService{
    async view(id){
        const user = await repository.findById(id)
        if(!user)
            throw new NotFoundError("Usuario não encontrado")
        return userSafe(user)
    }
    async delete(id){
        const user = await repository.delete(id)
        if (!user) 
            throw new NotFoundError("Usuario não encontrado");
        const response = {message: `Usuario ${user.username} foi deletado`}
        return response
    }

}
export default new UserService()
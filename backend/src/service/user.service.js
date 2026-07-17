import AppError from "../errors/AppError.js"
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
    async updateProfile(id, data){
        const user = await repository.findById(id)
        if (!user) 
            throw new NotFoundError("Usuario não encontrado");
        if(!data.biografia || data.biografia == user.biografia){
            if(!data.nickname || data.nickname == user.nickname){
                throw new AppError("Insira alguma mudança");
            }
        }
        const newUser = await repository.update(id, data)
        return userSafe(newUser)
    }

}
export default new UserService()
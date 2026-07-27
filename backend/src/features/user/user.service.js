import AppError from "../../errors/AppError.js"
import { NotFoundError } from "../../errors/errorIndex.js"
import repository from "./user.repository.js"
import userSafe from "../../utils/showUser.js"
import userExist from "../../utils/userExist.js"

class UserService{
    async view(id){
        const user = await userExist(id)
        return userSafe(user)
    }
    async delete(id){
        const user = await repository.delete(id)
        if (!user) 
            throw new NotFoundError("Usuario não encontrado");
        const response = {message: `Usuario ${user.username} foi deletado`}
        return response
    }
    async update(id, data){
        const newUser = await repository.update(id, data)
        return userSafe(newUser)
    }

}
export default new UserService()
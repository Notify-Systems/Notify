import userRepository from "../features/user/user.repository.js";
import { NotFoundError } from "../errors/errorIndex.js"

async function userExist(id){
    const user = await userRepository.findById(id); 
    if(!user) throw new NotFoundError("Usuario não encontrado");
    return user
}

export default userExist;
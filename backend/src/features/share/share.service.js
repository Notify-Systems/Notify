import { ForbiddenError, NotFoundError, UnauthorizedError } from "../../shared/errors/errorIndex.js"
import userRepository from "../user/user.repository.js"
import repository from "./share.repository.js"

class ShareService {
  async share(userId, data, shareItem, item) {
    const user = await userRepository.findById(data.userId);
    if (!user) throw new NotFoundError("Usuario não encontrado");
    if (data.role == "editor" && item.creatorId !== userId)
      throw new ForbiddenError(
        "Você não tem permissão pra dar esse cargo a alguem",
      );
    data.grantedById = userId
    const shareExist = await repository.searchShare(data.userId, shareItem, item.id)
    if(!shareExist){
      await repository.share(data, shareItem);
      return { message: "Recurso compartilhado com sucesso" };
    }else if(shareExist.valid == false){
      data.valid = true
      await repository.updateShare(data, shareItem, item.id);
      return { message: "Recurso compartilhado com sucesso" };
    }else{
      return {message: "Recurso ja compartilhado"}
    }
  }
  async updateShare(userId, data, shareItem, item) {
    const user = await userRepository.findById(data.userId);
    if (!user) throw new NotFoundError("Usuario não encontrado");
    const shareExist = await repository.searchShare(data.userId, shareItem, item.id)
    if(!shareExist || shareExist.valid == false) throw new NotFoundError ("Compartilhamento não encontrado")
    if (shareExist.grantedById !== userId && item.creatorId !== userId)
       throw new ForbiddenError("Você não pode modificar essa permissão")
    if (data.role == "editor" && item.creatorId !== userId)
      throw new ForbiddenError(
        "Você não tem permissão pra dar esse cargo a alguem",
      );
    const share = await repository.updateShare(data, shareItem, item.id);
    return { message: "Recurso alterado com sucesso" };
  }
  async revokeShare(userId, data, shareItem, item){
    const user = await userRepository.findById(data.userId)
    if(!user) throw new NotFoundError("Usuario não encontrado")
    const share = await repository.searchShare(data.userId, shareItem, item.id)
    if(!share || share.valid == false) throw new NotFoundError("Compartilhamento não encontrado")
      if (shareExist.grantedById !== userId && item.creatorId !== userId)
        throw new ForbiddenError("Você não pode revogar essa compartilhamento");
    if (share.role == "editor" && item.creatorId !== userId)
      throw new ForbiddenError(
        "Você não tem permissão pra tirar esse compartilhamento de alguem",
      );
    await repository.revokeShare(data.userId, shareItem, item.id)
    return {message: `Permissões do usuario ${user.username} foi revogada`}
  }
}

export default new ShareService()
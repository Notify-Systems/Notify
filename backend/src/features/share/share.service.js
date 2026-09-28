import { ForbiddenError, NotFoundError } from "../../shared/errors/errorIndex.js"
import userRepository from "../user/user.repository.js"
import repository from "./share.repository.js"

class ShareService {
  async share(userId, data, shareitem, item) {
    const user = await userRepository.findById(data.userId);
    if (!user) throw new NotFoundError("Usuario não encontrado");
    if (data.role == "editor" && item.creatorId !== userId)
      throw new ForbiddenError(
        "Você não tem permissão pra dar esse cargo a alguem",
      );
    const share = await repository.share(data, shareitem);
    return { message: "Conjunto compartilhado com sucesso" };
  }
  async updateShare(userId, data, shareitem, item) {
    const user = await userRepository.findById(data.userId);
    if (!user) throw new NotFoundError("Usuario não encontrado");
    if (data.role == "editor" && item.creatorId !== userId)
      throw new ForbiddenError(
        "Você não tem permissão pra dar esse cargo a alguem",
      );
    const share = await repository.updateShare(data, shareitem, item.id);
    return { message: "Conjunto compartilhado com sucesso" };
  }
  async revokeShare(userId, data, shareItem, item){
    const user = await userRepository.findById(data.userId)
    if(!user) throw new NotFoundError("Usuario não encontrado")
    const share = await repository.searchShare(data.userId, shareItem, item.id)
    if(!share) throw new NotFoundError("Usuario não tem permissões")
    if (share.role == "editor" && item.creatorId !== userId)
      throw new ForbiddenError(
        "Você não tem permissão pra tirar esse cargo de alguem",
      );
    await repository.revokeShare(data.userId, shareItem, item.id)
    return {message: `Permissões do usuario ${user.username} foi revogada`}
  }
}

export default new ShareService()
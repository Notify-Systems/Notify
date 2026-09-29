import { ConflictError, NotFoundError } from "../../shared/errors/errorIndex.js"
import userRepository from "../user/user.repository.js"
import repository from "./friendship.repository.js"

class friendshipService {
  async invite(userId, receiverId) {
    if (userId == receiverId)
      throw new ConflictError("Você não pode enviar um convite para si mesmo");
    const reciver = await userRepository.findById(receiverId);
    if (!reciver) throw new NotFoundError("Usuario não encontrado");
    const inviteExists = await repository.findInvite(receiverId, userId);
    if (inviteExists) throw new ConflictError("Convite não pode ser enviado");
    const data = { senderId: userId, receiverId: receiverId };
    const invite = await repository.invite(data);
    return { message: "Convite enviado", invite: invite };
  }
  async cancel(userId, receiverId) {
    const invite = await repository.findInvite(userId, receiverId);
    if (invite && invite.status == "pendente" && invite.senderId == userId) {
      await repository.delete(userId, receiverId);
      return { message: "Convite cancelado", invite: invite };
    }
    throw new NotFoundError("Convite não encontrado");
  }
  async accepted(userId, senderId) {
    const invite = await repository.findInvite(senderId, userId);
    if (invite && invite.status == "pendente") {
      await repository.accepted(senderId, userId);
      return { message: "Convite aceito", invite: invite };
    }
    throw new NotFoundError("Convite não encontrado");
  }
  async rejected(userId, senderId) {
    const invite = await repository.findInvite(senderId, userId);
    if (invite && invite.status == "pendente") {
      await repository.rejected(senderId, userId);
      return { message: "Convite rejeitado", invite: invite };
    }
    throw new NotFoundError("Convite não encontrado");
  }
  async deleteFriendship(userId, user2Id) {
    let friendship = await repository.findInvite(userId, user2Id);
    if (!friendship) {
      friendship = await repository.findInvite(user2Id, userId);
    }
    if (!friendship || friendship.status !== "aceito") {
      throw new NotFoundError("Amizade não encontrada");
    }
    await repository.delete(friendship.senderId, friendship.receiverId);
    return {message: "Amizade removida"}
  }
}

export default new friendshipService()
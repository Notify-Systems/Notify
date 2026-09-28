import { prisma } from "../../shared/lib/db.js";

class friendshipRepository {
  async invite(data) {
    const invite = await prisma.friendship.create({ data: data });
    return invite;
  }

  async findInvite(senderId, receiverId){
    const invite = await prisma.friendship.findUnique({
      where: {
        senderId_receiverId: { senderId: senderId, receiverId: receiverId },
      },
    });

    return invite
  }

  async delete(senderId, receiverId) {
    const invite = await prisma.friendship.delete({
      where: {
        senderId_receiverId: { senderId: senderId, receiverId: receiverId },
      },
    });
    return invite;
  }

  async accepted(senderId, receiverId) {
    const invite = await prisma.friendship.update({
      where: {
        senderId_receiverId: { senderId: senderId, receiverId: receiverId },
      },
      data: {
        status: "aceito",
      },
    });
  }
  async rejected(senderId, receiverId) {
    const invite = await prisma.friendship.update({
      where: {
        senderId_receiverId: { senderId: senderId, receiverId: receiverId },
      },
      data: {
        status: "recusado",
      },
    });
  }
}

export default new friendshipRepository();

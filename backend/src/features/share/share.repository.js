import { prisma } from "../../shared/lib/db.js";

class ShareRepository {
  async share(data, shareItem) {
    const share = await prisma[`${shareItem}Member`].create({ data: data });
    return share;
  }
  async updateShare(data, shareItem, resourceId) {
    const share = await prisma[`${shareItem}Member`].update({
      where: {
        [`${shareItem}Id_userId`]: {
          [`${shareItem}Id`]: resourceId,
          userId: data.userId,
        },
      },
      data,
    });
    return;
  }
  async searchShare(userId, shareItem, resourceId) {
    const share = await prisma[`${shareItem}Member`].findUnique({
      where: {
        [`${shareItem}Id_userId`]: {
          [`${shareItem}Id`]: resourceId,
          userId: userId,
        },
      },
    });
    return share;
  }
  async revokeShare(userId, shareItem, resourceId) {
    const share = await prisma[`${shareItem}Member`].delete({
      where: {
        [`${shareItem}Id_userId`]: {
          [`${shareItem}Id`]: resourceId,
          userId: userId,
        },
      },
    });
    return share;
  }
}
export default new ShareRepository();

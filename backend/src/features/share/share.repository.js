import { prisma } from "../../shared/lib/db.js"

class ShareRepository {
  async sharecollection(data, shareitem) {
    const share = await prisma[`${shareitem}Membro`].create({ data: data });
    return share;
  }
}
export default new ShareRepository()
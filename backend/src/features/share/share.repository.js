import { prisma } from "../../shared/lib/db.js"

class ShareRepository {
  async shareColletion(data) {
    const share = await prisma.collectionMember.create({ data: data });
    return share;
  }
  async shareSection(data) {
    const share = await prisma.sectionMember.create({ data: data });
    return share;
  }
}
export default new ShareRepository()
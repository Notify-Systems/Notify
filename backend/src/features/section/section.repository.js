import { prisma } from "../../shared/lib/db.js";

class SectionRepository {
  async create(data) {
    const newSection = await prisma.section.create({ data: data });
    return newSection;
  }
  async findById(id) {
    const section = await prisma.section.findUnique({ where: { id: id } });
    return section;
  }
  async findByCollection(collectionId) {
    const sections = await prisma.section.findMany({
      where: { collectionId: collectionId },
    });
    return sections;
  }
  async update(id, data) {
    const newSection = await prisma.section.update({
      where: { id: id },
      data: data,
    });
    return newSection;
  }
}
export default new SectionRepository();

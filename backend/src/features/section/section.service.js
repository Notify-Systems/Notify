import { boolean } from "zod";
import { NotFoundError } from "../../shared/errors/errorIndex.js";
import repository from "./section.repository.js";

class SectionService {
  async create(userId, data) {
    data.creatorId = userId;
    const newSection = await repository.create(data);
    return newSection;
  }

  async read(section) {
    return section;
  }
  async readAll(userId, collectionId) {
    const sections = await repository.findByCollection(collectionId);
    if (!sections) throw new NotFoundError("Seções não encontradas");
    const sectionsAllowed = await Promise.all(
      sections.map(async (section)=>{
      if(section.creatorId == userId){
        return section
      }
      if(section.visibility == "public") return section

      const allowed = await repository.findSectionShared(userId, section)
      if (allowed) return section
    })
  )
    
    return sectionsAllowed.filter(boolean);
  }
  async update(id, data) {
    const newSection = await repository.update(id, data);
    return newSection;
  }
}

export default new SectionService();

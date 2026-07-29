import { NotFoundError } from "../../errors/errorIndex.js";
import respository from "./section.repository.js"

class SectionService {
  async create(userId, data) {
    data.creatorId = userId;
    const newSection = await respository.create(data)
    return newSection
  }

  async read(section){
    return section
  }
   async readAll(collectionId){
    const sections = await respository.findByCollection(collectionId)
    if(!sections)
      throw new NotFoundError("Seções não encontradas")
    return sections
   }
   async update(id, data){
    const newSection = await respository.update(id, data)
    return newSection
   }
}

export default new SectionService();

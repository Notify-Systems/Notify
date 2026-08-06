import collectionRepository from "../../features/collection/collection.repository.js";
import sectionRepository from "../../features/section/section.repository.js";

class Permission{
    // Permições dos conjuntos
    async collectionView(userId, id){
            const collection = await collectionRepository.findById(id);
            if (!collection) return false;

            switch (collection.visibility) {
              case "public":
                return collection;
              case "private":
                if (collection.creatorId === userId) return collection;
              case "shared":
                const member = await collectionRepository.findCollectionShared(userId, id);
                if (member) return collection;
            }
            return false;
        }
    async collectionEdit(userId, id){
        const collection = await collectionRepository.findById(id);
        if (!collection) return false;
        if (collection.creatorId === userId) return collection;
        if (collection.visibility === "shared"){
            const member = await collectionRepository.findCollectionShared(userId, id);
            if (member && member.role == "editor") return collection;
        }
        return false;
    }
    async collectionOwner(userId, id){
        const collection = await collectionRepository.findById(id);
        if (!collection) return false;
        if (collection.creatorId === userId) return collection;
        return false
    }

    //Permições das seções
    async sectionView(userId, id){
        const section = await sectionRepository.findById(id)
        if (!section) return false
        switch (section.visibility) {
          case "public":
            return section;
          case "private":
            if (section.creatorId === userId) return section;
          case "shared":
            const member = await sectionRepository.findSectionShared(userId, id)
            if (member) return section;
        }
        const collection = await this.collectionView(userId, section.collectionId)
        if (collection) return section;

        return false;
    }

    async sectionEdit(userId, id) {
    const section = await sectionRepository.findById(id);
    if (!section) return false;

    if (section.creatorId === userId) return section;

    if (section.visibility === "shared") {
        const member = await sectionRepository.findSectionShared(userId, id);

        if (member && member.role === "editor") {
            return section;
        }
    }

    const collection = await this.collectionEdit(userId, section.collectionId);
    if (collection) return section;

    return false;
}

async sectionOwner(userId, id) {
    const section = await sectionRepository.findById(id);
    if (!section) return false;

    if (section.creatorId === userId) return section;

    const collection = await this.collectionOwner(userId, section.collectionId);
    if (collection) return section;

    return false;
}
}

export default new Permission()
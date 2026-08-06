import collectionRepository from "../../features/collection/collection.repository.js";

class Permission{
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
}

export default new Permission()
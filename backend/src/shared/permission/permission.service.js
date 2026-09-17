import collectionRepository from "../../features/collection/collection.repository.js";
import sectionRepository from "../../features/section/section.repository.js";
import taskRepository from "../../features/task/task.repository.js";

class Permission {
  // Permições dos conjuntos
  async collectionView(userId, id) {
    const collection = await collectionRepository.findById(id);
    if (!collection) return false;

    switch (collection.visibility) {
      case "public":
        return collection;
      case "private":
        if (collection.creatorId === userId) return collection;
        const member = await collectionRepository.findCollectionShared(userId, id);
        if (member && member.valid == true) return collection;
    }
    return false;
  }
  async collectionEdit(userId, id) {
    const collection = await collectionRepository.findById(id);
    if (!collection) return false;
    if (collection.creatorId === userId) return collection;
      const member = await collectionRepository.findCollectionShared(userId, id);
      if (member && member.role == "editor" && member.valid == true) return collection;
    return false;
  }
  async collectionOwner(userId, id) {
    const collection = await collectionRepository.findById(id);
    if (!collection) return false;
    if (collection.creatorId === userId) return collection;
    return false;
  }

  //Permições das seções
  async sectionView(userId, id) {
    const section = await sectionRepository.findById(id);
    if (!section) return false;
    switch (section.visibility) {
      case "public":
        return section;
      case "private":
        if (section.creatorId === userId) return section;
        const member = await sectionRepository.findSectionShared(userId, id);
        if (member && member.valid == true) return section;
    }
    const collection = await this.collectionView(userId, section.collectionId);
    if (collection) return section;

    return false;
  }

  async sectionEdit(userId, id) {
    const section = await sectionRepository.findById(id);
    if (!section) return false;

    if (section.creatorId === userId) return section;

    const member = await sectionRepository.findSectionShared(userId, id);
    if (member && member.valid == true && member.role === "editor")
      return section;

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
  
  async taskView(userId, id) {
    const task = await taskRepository.findById(id);
    if (!task) return false;

    // Permissão pela própria task
    switch (task.visibility) {
      case "public":
        return task;

      case "private":
        if (task.creatorId === userId) return task;
        const member = await taskRepository.findTaskShared(userId, id);
        if (member && member.valid) return task;
    }

    const collection = await this.collectionView(userId, task.collectionId);
    if (collection) return task;

    const section = await this.sectionView(userId, task.sectionId);
    if (section) return task;

    return false;
  }

  async taskEdit(userId, id) {
    const task = await taskRepository.findById(id);
    if (!task) return false;

    if (task.creatorId === userId) return task;

    const member = await taskRepository.findTaskShared(userId, id);
    if (member && member.valid == true && member.role === "editor") return task;

    const collection = await this.collectionEdit(userId, task.collectionId);
    if (collection) return task;

    const section = await this.sectionEdit(userId, task.sectionId);
    if (section) return task;

    return false;
  }
  async taskCreate(userId, sectionId, collectionId){
    if(sectionId){
        const section = await this.sectionEdit(userId, sectionId);
        if (section) return true;
    }
    const collection = await this.collectionEdit(userId, collectionId);
    if (collection) return true;

    return false;
  }

  async taskOwner(userId, id) {
    const task = await taskRepository.findById(id);
    if (!task) return false;

    if (task.creatorId === userId) return task;

    const collection = await this.collectionOwner(userId, task.collectionId);
    if (collection) return task;

    const section = await this.sectionOwner(userId, task.sectionId);
    if (section) return task;

    return false;
  }
}

export default new Permission()
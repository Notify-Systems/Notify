import userRepository from "../features/user/user.repository.js";
import collectionRepository from "../features/collection/collection.repository.js";
import sectionRepository from "../features/section/section.repository.js";
import taskRepository from "../features/task/task.repository.js";
import { NotFoundError } from "../errors/errorIndex.js";
class TableExist {
  async user(req, res, next) {
    const user = await userRepository.findById(req.userId);
    if (!user) throw new NotFoundError("Usuario não encontrado");
    req.user = user;
    next();
  }
  async collection(req, res, next) {
    if (req.body?.collectionId) {
      var collection = await collectionRepository.findById(
        req.body.collectionId,
      );
    } else {
      var collection = await collectionRepository.findById(req.params.id);
    }
    if (!collection || collection.creatorId !== req.userId)
      throw new NotFoundError("Coleção não encontrada");
    req.collection = collection;

    next()
  }
  async section(req, res, next) {
    if (req.body?.sectionId) {
      var section = await sectionRepository.findById(req.body.sectionId);
    } else {
      var section = await sectionRepository.findById(req.params.id)
    }
    if(!section || section.creatorId !== req.userId)
      throw new NotFoundError("Seção não encontrada");
    req.section = section
    next()
  }
  async task(req, res, next) {
    if (req.body?.taskId) {
      var task = await taskRepository.findById(req.body.taskId);
    } else {
      var task = await taskRepository.findById(req.params.id)
    }
    if(!task || task.creatorId !== req.userId)
      throw new NotFoundError("Tarefa não encontrada");
    req.task = task
    next()
  }
}

export default new TableExist();

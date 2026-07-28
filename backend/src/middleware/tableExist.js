import userRepository from "../features/user/user.repository.js";
import collectionRepository from "../features/collection/collection.repository.js";
import { NotFoundError } from "../errors/errorIndex.js";
class TableExist {
  async user(req, res, next) {
    const user = await userRepository.findById(req.userId);
    if (!user) throw new NotFoundError("Usuario não encontrado");
    req.user = user;
    next();
  }
  async collection(req, res, next) {
    if (req.body.collectionId) {
      const collection = await collectionRepository.findById(
        req.body.collectionId,
      );
    } else {
      const collection = await collectionRepository.findById(req.params.id);
    }
    if (!collection) throw new NotFoundError("Coleção não encontrada");
    if (collection.creatorId !== req.userId)
      throw new NotFoundError("Coleção não encontrada");
    req.collection = collection;
  }
}

export default new TableExist();

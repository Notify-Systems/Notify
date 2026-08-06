import userRepository from "../../features/user/user.repository.js";
import collectionRepository from "../../features/collection/collection.repository.js";
import sectionRepository from "../../features/section/section.repository.js";
import taskRepository from "../../features/task/task.repository.js";
import taskNoteRepository from "../../features/taskNote/taskNote.repository.js";
import { NotFoundError } from "../errors/errorIndex.js";

class EntityLoader {
  async section(req, res, next) {
    if (req.body?.sectionId) {
      var section = await sectionRepository.findById(req.body.sectionId);
    } else {
      var section = await sectionRepository.findById(req.params.id);
    }
    if (!section) throw new NotFoundError("Seção não encontrada");
    req.section = section;
    next();
  }
  async task(req, res, next) {
    if (req.body?.taskId) {
      var task = await taskRepository.findById(req.body.taskId);
    } else {
      var task = await taskRepository.findById(req.params.id);
    }
    if (!task) throw new NotFoundError("Tarefa não encontrada");
    req.task = task;
    next();
  }
  async taskNote(req, res, next) {
    if (req.body?.taskNoteId) {
      var taskNote = await taskNoteRepository.findById(req.body.taskNoteId);
    } else {
      var taskNote = await taskNoteRepository.findById(req.params.id);
    }
    if (!taskNote) throw new NotFoundError("Nota não encontrada");
    req.taskNote = taskNote;
    next();
  }
}

export default new EntityLoader();

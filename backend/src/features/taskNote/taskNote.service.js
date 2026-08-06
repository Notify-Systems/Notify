import { NotFoundError } from "../../shared/errors/errorIndex.js";
import repository from "./taskNote.repository.js";

class TaskNoteService {
  async create(userId, data) {
    data.authorId = userId;
    const newNote = await repository.create(data);
    return newNote;
  }
  async read(note) {
    return note;
  }
  async readByTask(taskId) {
    const notes = await repository.findByTask(taskId);
    if (!notes) throw new NotFoundError("Notas não encontradas");
    return notes;
  }
  async update(id, data) {
    const newNote = await repository.update(id, data);
    return newNote;
  }
}

export default new TaskNoteService();

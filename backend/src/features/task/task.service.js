import { boolean } from "zod";
import { NotFoundError } from "../../shared/errors/errorIndex.js";
import repository from "./task.repository.js";

class TaskService {
  async create(userId, data) {
    data.creatorId = userId;
    const newTask = await repository.create(data);
    return newTask;
  }
  async read(task) {
    return task;
  }
  async readByCollection(userId, collectionId) {
    const tasks = await repository.findByCollection(collectionId);
    if (!tasks) throw new NotFoundError("Tarefas não encontradas");
    const tasksAllowed = await Promise.all(
      tasks.map(async (task) => {
        if (task.creatorId == userId) {
          return task;
        }
        if (task.visibility == "public") return;

        const allowed = await repository.findTaskShared(userId, task.id);
        if (allowed) return task;
      }),
    );
    return tasksAllowed.filter(boolean);
  }
  async readBySection(userId, sectionId) {
    const tasks = await repository.findBySection(sectionId);
    if (!tasks) throw new NotFoundError("Tarefas não encontradas");
    const tasksAllowed = await Promise.all(
      tasks.map(async (task) => {
        if (task.creatorId == userId) {
          return task;
        }
        if (task.visibility == "public") return;

        const allowed = await repository.findTaskShared(userId, task.id);
        if (allowed) return task;
      }),
    );
    return tasksAllowed.filter(boolean);
  }
  async update(id, data) {
    const newTask = await repository.update(id, data);
    return newTask;
  }
}

export default new TaskService();

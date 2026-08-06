import { prisma } from "../../shared/lib/db.js";

class TaskRepository {
  async create(data) {
    const newTask = await prisma.task.create({ data: data });
    return newTask;
  }
  async findById(id) {
    const task = await prisma.task.findUnique({ where: { id: id } });
    return task;
  }
  async findByCollection(collectionId) {
    const tasks = await prisma.task.findMany({
      where: { collectionId: collectionId },
    });
    return tasks;
  }
  async findBySection(sectionId) {
    const tasks = await prisma.task.findMany({
      where: { sectionId: sectionId },
    });
    return tasks;
  }
  async update(id, data) {
    const newTask = await prisma.task.update({ where: { id: id }, data: data });
    return newTask;
  }
}

export default new TaskRepository();

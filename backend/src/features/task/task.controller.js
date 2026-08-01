import service from "./task.service.js";

class TaskController {
  async create(req, res) {
    const newTask = await service.create(req.userId, req.body);
    res.status(201).json(newTask);
  }
  async read(req, res) {
    const tasks = await service.read(req.task);
    res.status(200).json(tasks);
  }
  async readByCollection(req, res) {
    const tasks = await service.readByCollection(req.params.id);
    res.status(200).json(tasks);
  }
  async readBySection(req, res) {
    const tasks = await service.readBySection(req.params.id);
    res.status(200).json(tasks);
  }
  async update(req, res) {
    const newTask = await service.update(req.params.id, req.body);
    res.status(200).json(newTask);
  }
}

export default new TaskController();

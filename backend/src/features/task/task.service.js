import { NotFoundError } from "../../errors/errorIndex.js";
import repository from "./task.repository.js";

class TaskService {
    async create(userId, data) {
        data.creatorId = userId;
        const newTask = await repository.create(data);
        return newTask;
    }
    async read(task){
        return task;
    }
    async readByCollection(collectionId){
        const tasks = await repository.findByCollection(collectionId);
        if(!tasks)
            throw new NotFoundError("Tarefas não encontradas");
        return tasks;
    }
    async readBySection(sectionId) {
        const tasks = await repository.findBySection(sectionId);
        if(!tasks)
            throw new NotFoundError("Tarefas não encontradas");
        return tasks;
    }
    async update(id, data){
        const newTask = await repository.update(id, data);
        return newTask;
    }
}

export default new TaskService();
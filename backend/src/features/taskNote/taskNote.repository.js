import { prisma } from "../../lib/db.js";

class TaskNoteRepository {
    async create(data){
        const newNote = await prisma.taskNote.create({ data: data });
        return newNote;
    }
    async findById(id){
        const note = await prisma.taskNote.findUnique({ where: { id: id } });
        return note;
    }
    async findByTask(taskId){
        const notes = await prisma.taskNote.findMany({ where: { taskId: taskId } });
        return notes;
    }
    async update(id, data){
        const newNote = await prisma.taskNote.update({ where: { id: id }, data: data });
        return newNote;
    }
}

export default new TaskNoteRepository();
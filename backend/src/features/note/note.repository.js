import { prisma } from "../../shared/lib/db.js";

class NoteRepository{
    async create(data){
        const newNote = await prisma.note.create({data:data});
        return newNote;

    }
    async update(id, data){
        const newNote = await prisma.note.update({where: { id: id }, data: data});
        return newNote
    }
}

export default new NoteRepository();
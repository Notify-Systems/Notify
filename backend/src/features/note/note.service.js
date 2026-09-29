import id from "zod/v4/locales/id.cjs";
import repository from "./note.repository.js";

class NoteService{
    async crate(userId, data){
        data.creatorId = userId;
        const newNote = await repository.create(data);
        return newNote;
    }
    async update(data, id){
        const newNote = await repository.update(data, id);
        return newNote;
    }
}

export default new NoteService();
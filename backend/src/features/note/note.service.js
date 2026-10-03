import { NotFoundError } from "../../shared/errors/errorIndex.js";
import permission from "../../shared/permission/permission.service.js";
import repository from "./note.repository.js";

class NoteService {
    async create(userId, data) {
        data.creatorId = userId;
        const newNote = await repository.create(data);
        return newNote;
    }

    async read(note) {
        return note;
    }

    async readByCollection(userId, collectionId) {
        const notes = await repository.findByCollection(collectionId);
        if (!notes) throw new NotFoundError("Anotações não encontradas");

        const notesAllowed = await Promise.all(
            notes.map((note) => permission.noteView(userId, note.id)),
        );
        return notesAllowed.filter(Boolean);
    }

    async readBySection(userId, sectionId) {
        const notes = await repository.findBySection(sectionId);
        if (!notes) throw new NotFoundError("Anotações não encontradas");

        const notesAllowed = await Promise.all(
            notes.map((note) => permission.noteView(userId, note.id)),
        );
        return notesAllowed.filter(Boolean);
    }

    async update(id, data) {
        const updatedNote = await repository.update(id, data);
        return updatedNote;
    }
}

export default new NoteService();

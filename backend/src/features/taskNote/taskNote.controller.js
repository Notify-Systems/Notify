import service from "./taskNote.service.js";

class TaskNoteController {
    async create(req, res) {
        const newNote = await service.create(req.userId, req.body);
        res.status(201).json(newNote);
    }
    async read(req, res) {
        const notes = await service.read(req.taskNote);
        res.status(200).json(notes);
    }
    async readByTask(req, res) {
        const notes = await service.readByTask(req.params.id);
        res.status(200).json(notes);
    }
    async update(req, res) {
        const newNote = await service.update(req.params.id, req.body);
        res.status(200).json(newNote);
    }
}

export default new TaskNoteController();
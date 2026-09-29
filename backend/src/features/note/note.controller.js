import service from "./note.service.js";

class NoteController{
    async create(req, res){
        const newNote = await service.crate(req.userId, req.body);
        res.status(201).json(newNote);
    }
    async update(req, res){
        const newNote = await service.update(req.body, req.params.id);
        res.status(201).json(newNote);
    }
}
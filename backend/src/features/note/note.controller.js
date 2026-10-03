import service from "./note.service.js";

class NoteController {
  async create(req, res) {
    const newNote = await service.create(req.userId, req.body);
    res.status(201).json(newNote);
  }

  async read(req, res) {
    const note = await service.read(req.note);
    res.status(200).json(note);
  }

  async readByCollection(req, res) {
    const notes = await service.readByCollection(req.userId, req.params.id);
    res.status(200).json(notes);
  }

  async readBySection(req, res) {
    const notes = await service.readBySection(req.userId, req.params.id);
    res.status(200).json(notes);
  }

  async update(req, res) {
    const updatedNote = await service.update(req.params.id, req.body);
    res.status(200).json(updatedNote);
  }
}

export default new NoteController();
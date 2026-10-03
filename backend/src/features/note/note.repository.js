import { prisma } from "../../shared/lib/db.js";

class NoteRepository {
  async create(data) {
    const newNote = await prisma.note.create({ data: data });
    return newNote;
  }

  async findById(id) {
    const note = await prisma.note.findUnique({ where: { id: id } });
    return note;
  }

  async findByCollection(collectionId) {
    const notes = await prisma.note.findMany({
      where: { collectionId: collectionId },
    });
    return notes;
  }

  async findBySection(sectionId) {
    const notes = await prisma.note.findMany({
      where: { sectionId: sectionId },
    });
    return notes;
  }

  async findNoteShared(userId, id) {
    const member = await prisma.noteMember.findFirst({
      where: { noteId: id, userId: userId },
    });
    return member;
  }

  async update(id, data) {
    const updatedNote = await prisma.note.update({
      where: { id: id },
      data: data,
    });
    return updatedNote;
  }
}

export default new NoteRepository();
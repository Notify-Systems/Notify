import service from "./section.service.js"

class SectionController{
    async create(req, res){
        const newSection = await service.create(req.userId, req.body);
        res.status(201).json(newSection);
    }
    async read(req, res){
        const section = await service.read(req.section)
        res.status(200).json(section)
    }
    async readAll(req, res){
        const sections = await service.readAll(req.params.id)
        res.status(200).json(sections)
    }
    async update(req, res){
        const newSection = await service.update(req.params.id, req.body)
        res.status(200).json(newSection)
    }
}

export default new SectionController();
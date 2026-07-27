import { prisma } from "../../lib/db.js"

class ColletionRepository{
    async create(data){
        const newCollection = await prisma.collection.create({data: data})
        return newCollection;
    }
    async findById(id){
        const collection = await prisma.collection.findUnique({where: {id : id}});
        return collection;
    }
    async update(id, data){
        const collection = await prisma.collection.update({where: {id:id}, data:data});
        return collection;
    }
    async delete(id){
        const collection = await prisma.collection.delete({where: {id:id}});
        return collection;
    }
}
export default new ColletionRepository()
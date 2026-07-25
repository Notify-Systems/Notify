import { prisma } from "../../lib/db.js"

class ColletionRepository{
    async create(data){
        const newCollection = await prisma.collection.create({data: data})
        return newCollection;
    }
    async read(id){
        const collection = await prisma.collection.findUnique({where: {id : id}});
        return collection;
    }
}
export default new ColletionRepository()
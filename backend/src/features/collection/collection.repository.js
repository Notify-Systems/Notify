import { prisma } from "../../lib/db.js"

class ColletionRepository{
    async create(data){
        const newCollection = await prisma.collection.create({data: data})
        return newCollection;
    }
}
export default new ColletionRepository()
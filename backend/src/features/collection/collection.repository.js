import { prisma } from "../../shared/lib/db.js"

class ColletionRepository{
    async create(data){
        const newCollection = await prisma.collection.create({data: data})
        return newCollection;
    }
    async findById(id){
        const collection = await prisma.collection.findUnique({where: {id : id}});
        return collection;
    }
    async findByUserId(userId){
        const collections = await prisma.collection.findMany({where: {creatorId: userId}})
        return collections
    }
    async findAll(userId){
        const publicColletions = await prisma.collection.findMany({where: {visibility: "public"}})
        const privateColletions = await prisma.collection.findMany({where: {visibility: "private", creatorId: userId}})
        const sharedColletions = await prisma.collectionMember.findMany({
            where: 
                {userId: userId, role:{not: "owner"}}, 
                include:{collection: true}
            })
        const colletions = { publicColletions, privateColletions, sharedColletions}
        return colletions
    }
    async findCollectionShared(userId, collectionId){
        const collection = await prisma.collectionMember.findFirst({where: {collectionId: collectionId, userId: userId}})
        return collection
    }
    async update(id, data){
        const collection = await prisma.collection.update({where: {id:id}, data:data});
        return collection;
    }
    async delete(id){
        const collection = await prisma.collection.delete({where: {id:id}});
        return collection;
    }
    async deleteShares(id){
        await prisma.collectionMember.deleteMany({where: {collectionId: id}})
    }
}
export default new ColletionRepository()
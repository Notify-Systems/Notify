import { prisma } from "../lib/db.js";

class UserRepository{
    async findByEmail(email){
        const user = await prisma.user.findUnique({where: {email: email}})
        return user
    }
    async findByUsername(username){
        const user = await prisma.user.findUnique({where: {username: username} });
        return user;
    }
    async create(data){
        const newUser = await prisma.user.create({data:data})
        return newUser
    }
    async update(id, data){
        const user = await prisma.user.update({where: id, data: data})
        return user
    }
    async findById(id){
        const user = await prisma.user.findUnique({where:{id: id}})
        return user
    }
    async delete(id){
        const user = await prisma.user.delete({where:{id: id}})
        return user
    }
}

export default new UserRepository()
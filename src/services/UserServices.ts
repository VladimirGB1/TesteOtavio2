import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UserService {
    constructor(){

    }

    async listUsers(id?: string){
        try{
            if(id){
                const user = await prisma.usuario.findUnique({
                    where: {
                        id
                    }
                });
                return user;
            }else{
                const users = await prisma.usuario.findMany();
                return users;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createUser(user: Prisma.UsuarioCreateInput){
        try{
            const newuser = await prisma.usuario.create({
                data: user
            });
            return newuser;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateUser(id: string, user: Prisma.UsuarioUpdateInput){
        try{
            const updatedUser = await prisma.usuario.update({
                where: {
                    id
                },
                data: user
            });

            return updatedUser;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteUser(id: string){
        try{
            const deletedUser = await prisma.usuario.delete({
                where: {
                    id
                }
            });

            return deletedUser;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new UserService();
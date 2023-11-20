import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UserServices from "../services/UserServices";

class UserController{

    constructor(){}

    async createUser(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;
        
        if(dados.email !== "" && dados.name !== ""){
            const newuser = await UserServices.createUser(dados)
            res.status(200).json({
                status: 'ok',
                newuser: newuser
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listUsers(req: Request, res: Response){
        const users = UserServices.listUsers();

        res.status(200).json({
            status: 'ok',
            users: users
        })
    }

    async updateUser(req: Request, res: Response){
        res.send('Update user');
    }

    async deleteUser(req: Request, res: Response){
        res.send('Delete user');
    }
}

export default new UserController;
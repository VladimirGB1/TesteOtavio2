import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceServices from "../services/LanceServices";

class LanceController{

    constructor(){}

    async createLance(req: Request, res: Response){
        const dados: Prisma.LanceCreateInput = req.body;
        
        if(dados.comprador !== "" && dados.leilao !== "" && dados.valor!== ""){
            const newlance = await LanceServices.createLance(dados)
            res.status(200).json({
                status: 'ok',
                newlance: newlance
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listLance(req: Request, res: Response){
        const lances = LanceServices.listLance();

        res.status(200).json({
            status: 'ok',
            lances: lances
        })
    }

    async updateLance(req: Request, res: Response){
        res.send('Update Leilão');
    }

    async deleteLance(req: Request, res: Response){
        res.send('Delete Leilão');
    }
}

export default new LanceController;
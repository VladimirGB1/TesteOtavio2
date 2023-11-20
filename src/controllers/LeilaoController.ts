import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoServices from "../services/LeilaoServices";

class LeilaoController{

    constructor(){}

    async createLeilao(req: Request, res: Response){
        const dados: Prisma.LeilaoCreateInput = req.body;
        
        if(dados.produto !== "" && dados.preco !== "" && dados.dono !== "" && dados.listaDeLances !== ""){
            const newleilao = await LeilaoServices.createLeilao(dados)
            res.status(200).json({
                status: 'ok',
                newleilao: newleilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listLeilao(req: Request, res: Response){
        const leilaos = LeilaoServices.listLeilao();

        res.status(200).json({
            status: 'ok',
            leilaos: leilaos
        })
    }

    async updateLeilao(req: Request, res: Response){
        res.send('Update Leilão');
    }

    async deleteLeilao(req: Request, res: Response){
        res.send('Delete Leilão');
    }
}

export default new LeilaoController;
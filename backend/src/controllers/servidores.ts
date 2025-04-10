import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import { Servidor } from '../models/servidor'
import { Op } from 'sequelize'
import jwt from 'jsonwebtoken'
import { Dependencia } from "./../models/dependencia";
import { Direccion } from "./../models/direccion";


export const ReadServidor = async (req: Request, res: Response) => {
    const listServidor = await Servidor.findAll({
        include: [
            {
                model: Dependencia, 
                as : 'dependencia'
            },
            {
                model: Direccion, 
                as : 'direccion'
            }
        ]
    }); 

    res.json(
        listServidor
    );
}
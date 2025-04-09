import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import { Servidor } from '../models/servidor'
import { Op } from 'sequelize'
import jwt from 'jsonwebtoken'


export const ReadServidor = async (req: Request, res: Response) => {
    const listServidor = await Servidor.findAll();
    res.json(
        listServidor
    );
}
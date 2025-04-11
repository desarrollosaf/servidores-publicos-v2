import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import { Servidor } from '../models/servidor'
import { Op } from 'sequelize'
import jwt from 'jsonwebtoken'
import moment from 'moment';
import { Dependencia } from "./../models/dependencia";
import { Direccion } from "./../models/direccion";
import { Declaraciones } from "./../models/declaraciones";


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

export const getMovimientos = async (req: Request, res: Response) => {

    const { id } = req.params;
    const fechaActual = moment();

        const servidor = await Servidor.findOne({ where: { id: id },
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
        const declaraciones = await Declaraciones.findAll({
            where: { servidor_publico_id:id }, // Relacionar por el ID de servidor
        });
        
        declaraciones.map((d: any) => {
            const data = d.dataValues;
            const fechaDeclaracion = moment(data.fecha_declaracion);
            const fechaMaxima = fechaDeclaracion.clone().add(60, 'days');
            let fechaMaximaModificacion;
      
            if (fechaDeclaracion.year() === 2021) {
              fechaMaximaModificacion = fechaDeclaracion.clone().add(91, 'days');
            } else {
              fechaMaximaModificacion = fechaDeclaracion.clone().add(30, 'days');
            }

            if (!data.fecha_envio) {
              if (data.tipo_movimiento_id !== 3) {
                data.estatusEnvio = fechaMaxima.isBefore(fechaActual) ? 'OMISO' : 'EN TIEMPO';
              } else {
                data.estatusEnvio = fechaMaximaModificacion.isBefore(fechaActual) ? 'OMISO' : 'EN TIEMPO';
              }
            } else {
              const fechaEnvio = moment(data.fecha_envio);
              if (data.tipo_movimiento_id !== 3) {
                data.estatusEnvio = fechaEnvio.isAfter(fechaMaxima) ? 'ENVIO EXTEMPORANEO' : 'ENVIO EN TIEMPO';
              } else {
                data.estatusEnvio = fechaEnvio.isAfter(fechaMaximaModificacion) ? 'ENVIO EXTEMPORANEO' : 'ENVIO EN TIEMPO';
              }
            }
      
      
            if (data.obligado) {
              data.estatus = 'OBLIGADO';
            } else if (data.motivo_no_obligado_id) {
              data.estatus = 'NO OBLIGADO - ';
            } else {
              data.estatus = 'NO OBLIGADO';
            }
           
            return data;
        });
        
        const servidorConDeclaraciones = {
            servidor,
            declaraciones
        };
          
        console.log(declaraciones)
        res.json(servidorConDeclaraciones);

    
   
   
}
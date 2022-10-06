import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class ListPublisherDAO{
    public static async getPublisher(sqlConsulta: string, parameters: any, res: Response):Promise<any>{
        pool.result(sqlConsulta,parameters)
        .then((result)=>{
            res.status(200).json(result.rows);
        })
        .catch((err)=>{
            console.log("Error listing publisher", err);
            res.status(400).json({answer: 'Error listing publisher'});
        });
    }
}

export default ListPublisherDAO;
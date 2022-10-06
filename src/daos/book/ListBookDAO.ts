import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class ListBookDAO{
    public static async getBook(sqlConsulta: string, parameters: any, res: Response):Promise<any>{
        pool.result(sqlConsulta,parameters)
        .then((result)=>{
            res.status(200).json(result.rows);
        })
        .catch((err)=>{
            console.log("Error listing book", err);
            res.status(400).json({answer: 'Error listing book'});
        });
    }
}

export default ListBookDAO;
import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class ListAuthorsBooksDAO{
    public static async getAuthorsBooks(sqlConsulta: string, parameters: any, res: Response):Promise<any>{
        pool.result(sqlConsulta,parameters)
        .then((result)=>{
            res.status(200).json(result.rows);
        })
        .catch((err)=>{
            console.log("Error listing authors books", err);
            res.status(400).json({answer: 'Error listing authors books'});
        });
    }
}

export default ListAuthorsBooksDAO;
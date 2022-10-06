import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class ListCustomerDAO{
    public static async getCustomer(sqlConsulta: string, parameters: any, res: Response):Promise<any>{
        pool.result(sqlConsulta,parameters)
        .then((result)=>{
            res.status(200).json(result.rows);
        })
        .catch((err)=>{
            console.log("Error listing Customer", err);
            res.status(400).json({answer: 'Error listing Customer'});
        });
    }
}

export default ListCustomerDAO;
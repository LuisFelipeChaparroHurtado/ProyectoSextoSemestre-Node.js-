import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class ListLoanDetailDAO{
    public static async getLoanDetail(sqlConsulta: string, parameters: any, res: Response):Promise<any>{
        pool.result(sqlConsulta,parameters)
        .then((result)=>{
            res.status(200).json(result.rows);
        })
        .catch((err)=>{
            console.log("Error listing Loan Detail", err);
            res.status(400).json({answer: 'Error listing Loan Detail'});
        });
    }
}

export default ListLoanDetailDAO;
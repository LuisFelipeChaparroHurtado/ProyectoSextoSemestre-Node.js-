import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class UpdateLoanDetailDAO {

    public static async updateLoanDetail(sqlActualizar: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
           return await consulta.result(sqlActualizar, parametros);
        })
            .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({respuesta: "Updated Loan Detail"});
            })
            .catch((miErr) => {
                console.log("Error ", miErr);
                res.status(400).json({ respuesta: "Error in teh query updateLoanDetail" });
            });
    }

}

export default UpdateLoanDetailDAO;
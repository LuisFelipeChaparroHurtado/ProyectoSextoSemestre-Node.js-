import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class UpdateLoansDAO {

    public static async updateLoans(sqlActualizar: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
           return await consulta.result(sqlActualizar, parametros);
        })
            .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({respuesta: "Updated Loans"});
            })
            .catch((miErr) => {
                console.log("Error ", miErr);
                res.status(400).json({ respuesta: "Error in the updateLoans" });
            });
    }

}

export default UpdateLoansDAO;
import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class CreateLoansDAO {

    public static async createLoans(sqlConfirm: string, sqlCreate: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            const dato = await consulta.one(sqlConfirm, parametros);
            if (dato.amount == 0) {
                //Crear registro
                return await consulta.one(sqlCreate, parametros);
            } else {
                return { id_loan: 0 }
            }
        })
            .then((respuesta) => {
                if (respuesta.id_loan != 0) {
                    res.status(200).json({ respuesta: 'Successful Loans', nuevoCodigo: respuesta.id_loan });
                } else {
                    res.status(402).json({ respuesta: "Error creating LOAN, probably repeated" });
                }
            })
            .catch((miErr) => {
                console.log("Error ", miErr);
                res.status(400).json({ respuesta: "Error in the query createLoans" });
            });
    }

}

export default CreateLoansDAO;
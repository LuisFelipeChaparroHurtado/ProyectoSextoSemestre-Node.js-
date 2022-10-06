import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class CreateLoanDetailDAO {

    public static async createLoanDetail(sqlConfirm: string, sqlCreate: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            const dato = await consulta.one(sqlConfirm, parametros);
            if (dato.amount == 0) {
                //Crear registro
                return await consulta.one(sqlCreate, parametros);
            } else {
                return { fk_book: 0 }
            }
        })
            .then((respuesta) => {
                if (respuesta.fk_book != 0) {
                    res.status(200).json({ respuesta: 'Successful Loan Detail', nuevoCodigo: respuesta.fk_book });
                } else {
                    res.status(402).json({ respuesta: "Error creating LOAN DETAIL, probably repeated the title of book" });
                }
            })
            .catch((miErr) => {
                console.log("Error ", miErr);
                res.status(400).json({ respuesta: "Error in the query createLoanDetail" });
            });
    }

}

export default CreateLoanDetailDAO;
import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class UpdateBookDAO {

    public static async updateBook(sqlActualizar: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
           return await consulta.result(sqlActualizar, parametros);
        })
            .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({respuesta: "Updated Book"});
            })
            .catch((miErr) => {
                console.log("Error ", miErr);
                res.status(400).json({ respuesta: "Error in the query updateBook" });
            });
    }

}

export default UpdateBookDAO;
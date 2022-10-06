import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class UpdateAuthorDAO {

    public static async updateAuthor(sqlActualizar: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
           return await consulta.result(sqlActualizar, parametros);
        })
            .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({respuesta: "Updated Author"});
            })
            .catch((miErr) => {
                console.log("Error ", miErr);
                res.status(400).json({ respuesta: "Error in the query updateAuthor" });
            });
    }

}

export default UpdateAuthorDAO;
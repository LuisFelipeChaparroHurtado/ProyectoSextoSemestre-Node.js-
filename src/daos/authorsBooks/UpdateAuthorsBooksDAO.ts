import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class UpdateAuthorsBooksDAO {

    public static async updateAuthorsBooks(sqlActualizar: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
           return await consulta.result(sqlActualizar, parametros);
        })
            .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({respuesta: "Updated Authors Books"});
            })
            .catch((miErr) => {
                console.log("Error ", miErr);
                res.status(400).json({ respuesta: "Error in the query updateAuthorsBooks" });
            });
    }

}

export default UpdateAuthorsBooksDAO;
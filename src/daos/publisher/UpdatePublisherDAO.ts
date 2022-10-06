import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class UpdatePublisherDAO {

    public static async updatePublisher(sqlActualizar: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
           return await consulta.result(sqlActualizar, parametros);
        })
            .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({respuesta: "Updated Publisher"});
            })
            .catch((miErr) => {
                console.log("Error ", miErr);
                res.status(400).json({ respuesta: "Error in the query updatePublisher" });
            });
    }

}

export default UpdatePublisherDAO;
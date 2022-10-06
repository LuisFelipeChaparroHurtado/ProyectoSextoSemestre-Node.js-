import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class CreateAuthorDAO {

    public static async createAuthor(sqlConfirm: string, sqlCreate: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            const dato = await consulta.one(sqlConfirm, parametros);
            if (dato.amount == 0) {
                //Crear registro
                return await consulta.one(sqlCreate, parametros);
            } else {
                return { id_author: 0 }
            }
        })
            .then((respuesta) => {
                if (respuesta.id_author != 0) {
                    res.status(200).json({ respuesta: 'Successful Author', nuevoCodigo: respuesta.id_author });
                } else {
                    res.status(402).json({ respuesta: "Error creating AUTHOR, probably repeated" });
                }
            })
            .catch((miErr) => {
                console.log("Error ", miErr);
                res.status(400).json({ respuesta: "Error en la consulta createAuthor" });
            });
    }

}

export default CreateAuthorDAO;
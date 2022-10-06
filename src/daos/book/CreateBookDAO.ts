import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class CreateBookDAO {

    public static async createBook(sqlConfirm: string, sqlCreate: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            const dato = await consulta.one(sqlConfirm, parametros);
            if (dato.amount == 0) {
                //Crear registro
                return await consulta.one(sqlCreate, parametros);
            } else {
                return { id_book: 0 }
            }
        })
            .then((respuesta) => {
                if (respuesta.id_book != 0) {
                    res.status(200).json({ respuesta: 'Successful Book', nuevoCodigo: respuesta.id_book });
                } else {
                    res.status(402).json({ respuesta: "Error creating BOOK, probably repeated" });
                }
            })
            .catch((miErr) => {
                console.log("Error ", miErr);
                res.status(400).json({ respuesta: "Error in the query createBook" });
            });
    }

}

export default CreateBookDAO;
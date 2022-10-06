import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class CreateAuthorsBooksDAO {

    public static async createAuthorsBooks(sqlConfirmBook: string,sqlConfirmAuthor: string, sqlCreate: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            const book = await consulta.one(sqlConfirmBook, parametros);
            const author = await consulta.one(sqlConfirmAuthor, parametros);
            if (book.amount == 1 && author.amount==1) {
                //Crear registro
                //Aca vamos hacer las consultas
                return await consulta.one(sqlCreate, parametros);
                
            } else {
                return { fk_book: 0 }
            }
        })
            .then((respuesta) => {
                if (respuesta.fk_book != 0) {
                    res.status(200).json({ respuesta: 'Successful Authors Books', nuevoCodigo: respuesta.fk_book });
                } else {
                    res.status(402).json({ respuesta: "Error creating AUTHORS BOOKS, probably repeated" });
                }
            })
            .catch((miErr) => {
                console.log("Error ", miErr);
                res.status(400).json({ respuesta: "Error in the query createAuthorsBooks" });
            });
    }

}

export default CreateAuthorsBooksDAO;
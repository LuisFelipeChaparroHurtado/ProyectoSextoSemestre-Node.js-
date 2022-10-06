import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class DeleteAuthorDAO {
    protected static async deleteByIdAuthor(sqlDelete: string, params: any, res:Response): Promise<any> {
        await pool.result(sqlDelete, params)
        .then((data)=>{
            console.log(data);
            return res.status(201).json({ respuesta: 'Author removed. '+data.rowCount+' pieces of information remain' });
        })
        .catch((myErr)=>{
            console.log(myErr);
            return res.status(400).json({ respuesta: 'Error removed author' });
        });
    }

}

export default DeleteAuthorDAO;
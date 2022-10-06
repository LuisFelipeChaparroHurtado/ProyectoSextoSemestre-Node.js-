import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class DeleteAuthorsBooksDAO {
    protected static async deleteByIdAuthorsBooks(sqlDelete: string, params: any, res:Response): Promise<any> {
        await pool.result(sqlDelete, params)
        .then((data)=>{
            console.log(data);
            return res.status(201).json({ respuesta: 'Authors Books removed. '+data.rowCount+' pieces of information remain' });
        })
        .catch((myErr)=>{
            console.log(myErr);
            return res.status(400).json({ respuesta: 'Error removed authors Books' });
        });
    }

}

export default DeleteAuthorsBooksDAO;
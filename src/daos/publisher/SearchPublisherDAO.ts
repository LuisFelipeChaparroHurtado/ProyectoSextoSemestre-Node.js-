import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class SearchPublisherDAO {

    protected static async findByIdPublisher(sqlSearch: string, params: any, res:Response): Promise<any> {
        await pool.one(sqlSearch, params)
        .then((data)=>{
            console.log(data);
            return res.status(200).json({ respuesta: data });
        })
        .catch((myErr)=>{
            console.log(myErr);
            return res.status(400).json({ respuesta: 'Error looking for id publisher' });
        });
    }

}

export default SearchPublisherDAO;
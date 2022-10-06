import { json, Response } from "express";
import pool from "../../configurate/connection/connectionDB";

class UpdateCustomerDAO {

    public static async updateCustomer(sqlActualizar: string, parametros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
           return await consulta.result(sqlActualizar, parametros);
        })
            .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({respuesta: "Updated Customer"});
            })
            .catch((miErr) => {
                console.log("Error ", miErr);
                res.status(400).json({ respuesta: "Error in the query updateCustomer" });
            });
    }

}

export default UpdateCustomerDAO;
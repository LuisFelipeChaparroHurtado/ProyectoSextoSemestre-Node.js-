import { Request, Response } from "express";
import SearchCustomerDAO from "../../daos/customer/SearchCustomerDAO";
import { SQL_SEARCH_CUSTOMER } from "../../repository/customer/SearchCustomerSQL";

class ControllerSearchCustomer extends SearchCustomerDAO{
    public searchCustomer(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchCustomer.findByIdCustomer(SQL_SEARCH_CUSTOMER.CARGAR, parameter, res);
    }
}


const controllerSearchCustomer = new ControllerSearchCustomer();
export default controllerSearchCustomer;
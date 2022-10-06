import { Request, Response } from "express";
import DeleteCustomerDAO from "../../daos/customer/DeleteCustomerDAO";
import { SQL_DELETE_CUSTOMER } from "../../repository/customer/DeleteCustomerSQL";

class ControllerDeleteCustomer extends DeleteCustomerDAO{

    public deleteCustomer(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerDeleteCustomer.deleteByIdCustomer(SQL_DELETE_CUSTOMER.BORRAR, parameter, res);
    }
}


const controllerDeleteCustomer = new ControllerDeleteCustomer();
export default controllerDeleteCustomer;
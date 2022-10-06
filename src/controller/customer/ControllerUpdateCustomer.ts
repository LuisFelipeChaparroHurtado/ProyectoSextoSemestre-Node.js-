import { Request, Response } from "express";
import UpdateCustomerDAO from "../../daos/customer/UpdateCustomerDAO";
import { SQL_UPDATE_CUSTOMER } from "../../repository/customer/UpdateCustomerSQL";

class ControllerUpdateCustomer extends UpdateCustomerDAO{
    public updateCustomer(req: Request, res:Response):void{
        const id = req.body.idCustomer;
        const identification = req.body.customerIdentification;
        const name = req.body.nameCustomer;
        const surname = req.body.surnameCustomer;
        const address = req.body.customerAddress;
        const numberPhone = req.body.numberPhoneCustomer;
        const parameter = [id, identification, name, surname, address, numberPhone];
        ControllerUpdateCustomer.updateCustomer(SQL_UPDATE_CUSTOMER.UPDATE, parameter, res);
    }
}


const controllerUpdateCustomer = new ControllerUpdateCustomer();
export default controllerUpdateCustomer;
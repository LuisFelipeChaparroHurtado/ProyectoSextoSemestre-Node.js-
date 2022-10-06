import { Request, Response } from "express";
import CreateCustomerDAO from "../../daos/customer/CreateCustomerDAO";
import { SQL_CREATE_CUSTOMER } from "../../repository/customer/CreateCustomerSQL";

class ControllerCreateCustomer extends CreateCustomerDAO{
    public recordCustomer(req: Request, res:Response):void{
        const identification = req.body.customerIdentification;
        const name = req.body.nameCustomer;
        const surname = req.body.surnameCustomer;
        const address = req.body.customerAddress;
        const numberPhone = req.body.numberPhoneCustomer;
        const parameter = [identification, name, surname, address, numberPhone];
        ControllerCreateCustomer.createCustomer(SQL_CREATE_CUSTOMER.CONFIRM, SQL_CREATE_CUSTOMER.CREATE, parameter, res);
    }
}


const controllerCreateCustomer = new ControllerCreateCustomer();
export default controllerCreateCustomer;
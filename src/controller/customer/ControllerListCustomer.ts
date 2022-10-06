import { Request, Response } from "express";
import ListCustomerDAO from "../../daos/customer/ListCustomerDAO";
import { SQL_LIST_CUSTOMER } from "../../repository/customer/ListCustomerSQL";

class ControllerListCustomer extends ListCustomerDAO{
    public bringCustomer(req: Request, res:Response):void{
        ControllerListCustomer.getCustomer(SQL_LIST_CUSTOMER.LIST, [],res);
    }
}
const controllerListCustomer = new ControllerListCustomer();
export default controllerListCustomer;
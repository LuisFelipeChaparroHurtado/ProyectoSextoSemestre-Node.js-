import {Router} from 'express';
import createCustomerController from '../controller/customer/ControllerCreateCustomer';
import deleteCustomerController from '../controller/customer/ControllerDeleteCustomer';
import listCustomerController from '../controller/customer/ControllerListCustomer';
import searchCustomerController from '../controller/customer/ControllerSearchCustomer';
import updateCustomerController from '../controller/customer/ControllerUpdateCustomer';
import searchIdLoanController from '../controller/loans/ControllerSearchIdLoan';


class CustomerRoute{

    public routeCustomerApi: Router;
    constructor(){
        this.routeCustomerApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.routeCustomerApi.get('/listCustomer', listCustomerController.bringCustomer);
        this.routeCustomerApi.post('/createCustomer', createCustomerController.recordCustomer);
        this.routeCustomerApi.get('/searchCustomer/:elcodigo', searchCustomerController.searchCustomer);
        this.routeCustomerApi.put('/updateCustomer', updateCustomerController.updateCustomer);
        this.routeCustomerApi.delete('/deleteCustomer/:elcodigo', deleteCustomerController.deleteCustomer);
    }
}

const customerRoute = new CustomerRoute();
export default customerRoute.routeCustomerApi;
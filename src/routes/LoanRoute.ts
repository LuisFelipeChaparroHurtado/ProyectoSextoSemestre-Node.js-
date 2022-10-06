import {Router} from 'express';
import createLoanController from '../controller/loans/ControllerCreateLoans';
import deleteLoanController from '../controller/loans/ControllerDeleteLoans';
import listLoansController from '../controller/loans/ControllerListLoans';
import searchLoanController from '../controller/loans/ControllerSearchLoans';
import updateLoanController from '../controller/loans/ControllerUpdateLoans';
import searchCustomerIdLoanController from '../controller/loans/ControllerSearchIdLoan';


class LoanRoute{

    public routeLoansApi: Router;
    constructor(){
        this.routeLoansApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.routeLoansApi.get('/listLoans', listLoansController.bringLoans);
        this.routeLoansApi.post('/createLoan', createLoanController.recordLoans);
        this.routeLoansApi.get('/searchLoan/:elcodigo', searchLoanController.searchLoan);
        this.routeLoansApi.get('/searchIdLoan/:elcodigo', searchCustomerIdLoanController.searchIdLoan);
        this.routeLoansApi.put('/updateLoan', updateLoanController.updateLoans);
        this.routeLoansApi.delete('/deleteLoan/:elcodigo', deleteLoanController.deleteLoan);
    }
}

const loanRoute = new LoanRoute();
export default loanRoute.routeLoansApi;